
import React from 'react';
import { ArrowLeft, Plus } from 'lucide-react';
import { ViewState } from '../types';

interface CreateGroupViewProps {
  onBack: () => void;
}

export const CreateGroupView: React.FC<CreateGroupViewProps> = ({ onBack }) => {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:ajo-green font-semibold transition-colors">
        <ArrowLeft size={18} /> Back
      </button>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-black text-gray-900 mb-2">Create New Group</h2>
        <p className="text-gray-500 mb-8">Set up your savings circle and invite your trusted contacts.</p>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Group Name</label>
            <input 
              type="text" 
              placeholder="e.g. Family Holiday Fund"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-ajo-green focus:bg-white transition-all"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Contribution Amount (₦)</label>
              <input 
                type="number" 
                placeholder="5000"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-ajo-green focus:bg-white transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Frequency</label>
              <select className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-ajo-green focus:bg-white transition-all">
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Total Slots (Members)</label>
              <input 
                type="number" 
                placeholder="10"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-ajo-green focus:bg-white transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Payment Day of Month</label>
              <input 
                type="number" 
                placeholder="30"
                max="31"
                min="1"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-ajo-green focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="pt-4">
            <button className="w-full py-4 bg-ajo-green text-white font-black rounded-2xl shadow-lg shadow-green-900/10 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
              <Plus size={20} /> Create Savings Group
            </button>
            <p className="text-center text-[10px] text-gray-400 mt-4 uppercase tracking-widest font-bold">
              By creating a group, you agree to the Ajo Digital terms of service
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
