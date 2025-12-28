
import React, { useState } from 'react';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

interface AuthViewProps {
  onLogin: () => void;
}

export const AuthView: React.FC<AuthViewProps> = ({ onLogin }) => {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth success
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl shadow-gray-200 border border-gray-100">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-16 h-16 bg-ajo-green text-white rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-green-900/20">
            <ShieldCheck size={40} />
          </div>
          <h1 className="text-3xl font-black text-gray-900">Ajo Digital</h1>
          <p className="text-gray-500 font-medium">
            {isRegistering ? 'Start your savings journey' : 'Modern informal savings for Nigeria'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegistering ? (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">First Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Tunde"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-ajo-green outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Last Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Adewale"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-ajo-green outline-none"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  placeholder="+234 800 000 0000"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-ajo-green outline-none"
                />
              </div>
            </>
          ) : null}

          <div className="space-y-1">
            <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Email Address</label>
            <input 
              type="email" 
              required
              defaultValue={isRegistering ? "" : "tunde.ade@example.com"}
              placeholder="email@example.com"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-ajo-green outline-none"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Password</label>
            <input 
              type="password" 
              required
              defaultValue={isRegistering ? "" : "********"}
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-ajo-green outline-none"
            />
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-ajo-green text-white font-black rounded-2xl mt-4 active:scale-95 transition-all shadow-lg shadow-green-900/10"
          >
            {isRegistering ? 'Create Account' : 'Login to Dashboard'}
          </button>

          <button 
            type="button"
            onClick={() => setIsRegistering(!isRegistering)}
            className="w-full py-4 bg-transparent text-ajo-green font-bold hover:bg-green-50 rounded-2xl transition-all"
          >
            {isRegistering ? 'Already have an account? Login' : 'Create new account'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-xs text-gray-400 font-medium">
            Securely integrated with Paystack
          </p>
        </div>
      </div>
    </div>
  );
};
