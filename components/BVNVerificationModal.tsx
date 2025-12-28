
import React, { useState } from 'react';
import { X, ShieldCheck, Loader2, AlertCircle } from 'lucide-react';

interface BVNVerificationModalProps {
  onClose: () => void;
  onVerified: (bvn: string) => void;
}

export const BVNVerificationModal: React.FC<BVNVerificationModalProps> = ({ onClose, onVerified }) => {
  const [bvn, setBvn] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (bvn.length !== 11) {
      setError('BVN must be exactly 11 digits.');
      return;
    }

    setIsVerifying(true);

    // Simulate verification API call
    setTimeout(() => {
      setIsVerifying(false);
      onVerified(bvn);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-xl font-black text-gray-900 flex items-center gap-2">
            <ShieldCheck className="text-ajo-green" size={24} />
            Verify Identity
          </h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400">
            <X size={20} />
          </button>
        </div>

        <div className="p-8">
          <div className="bg-blue-50 p-4 rounded-2xl mb-6 flex gap-3">
            <AlertCircle className="text-blue-500 shrink-0" size={20} />
            <p className="text-xs text-blue-700 leading-relaxed font-medium">
              Ajo Digital requires BVN verification to ensure the security of all saving circles. We only use this to confirm your identity with the Central Bank of Nigeria (CBN).
            </p>
          </div>

          <form onSubmit={handleVerify} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest">11-Digit BVN</label>
              <input 
                type="text" 
                maxLength={11}
                value={bvn}
                onChange={(e) => setBvn(e.target.value.replace(/\D/g, ''))}
                placeholder="222XXXXXXXX"
                disabled={isVerifying}
                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-ajo-green outline-none font-mono text-xl tracking-widest text-center"
              />
              {error && <p className="text-red-500 text-[10px] font-bold text-center mt-1 uppercase tracking-wider">{error}</p>}
            </div>

            <button 
              type="submit"
              disabled={isVerifying || bvn.length !== 11}
              className="w-full py-4 bg-ajo-green text-white font-black rounded-2xl shadow-lg shadow-green-900/10 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed"
            >
              {isVerifying ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Verifying with NIBSS...
                </>
              ) : (
                'Verify & Secure Account'
              )}
            </button>
          </form>
          
          <p className="text-center text-[10px] text-gray-400 mt-6 font-medium">
            Dial <span className="font-bold text-gray-600">*565*0#</span> on your registered phone line to retrieve your BVN.
          </p>
        </div>
      </div>
    </div>
  );
};
