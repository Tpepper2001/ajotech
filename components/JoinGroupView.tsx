
import React from 'react';
import { ArrowLeft, UserPlus, Search } from 'lucide-react';

interface JoinGroupViewProps {
  onBack: () => void;
}

export const JoinGroupView: React.FC<JoinGroupViewProps> = ({ onBack }) => {
  return (
    <div className="max-w-xl mx-auto space-y-6">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:ajo-green font-semibold transition-colors">
        <ArrowLeft size={18} /> Back
      </button>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <div className="w-16 h-16 bg-ajo-green/10 text-ajo-green rounded-2xl flex items-center justify-center mb-6">
          <UserPlus size={32} />
        </div>
        <h2 className="text-2xl font-black text-gray-900 mb-2">Join a Savings Group</h2>
        <p className="text-gray-500 mb-8">Enter the unique invite code shared by your group administrator.</p>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Invite Code</label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="e.g. TECHLAG1"
                className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-ajo-green focus:bg-white transition-all font-mono font-bold text-lg uppercase tracking-widest"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
            </div>
          </div>

          <div className="pt-2">
            <button className="w-full py-4 bg-ajo-green text-white font-black rounded-2xl shadow-lg shadow-green-900/10 active:scale-[0.98] transition-all">
              Find Group
            </button>
            <button 
              type="button"
              className="w-full py-4 bg-transparent text-gray-400 font-bold hover:text-gray-600 transition-colors mt-2"
            >
              Don't have a code? Browse public groups
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
