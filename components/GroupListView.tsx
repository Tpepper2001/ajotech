
import React from 'react';
import { Search, Plus, Filter, ArrowRight } from 'lucide-react';
import { MOCK_GROUPS } from '../constants';
import { Group, ViewState } from '../types';

interface GroupListViewProps {
  onSelectGroup: (g: Group) => void;
  onViewChange: (view: ViewState) => void;
}

export const GroupListView: React.FC<GroupListViewProps> = ({ onSelectGroup, onViewChange }) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search groups..." 
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-ajo-green focus:border-ajo-green outline-none"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-600 px-4 py-2.5 rounded-xl font-semibold">
            <Filter size={18} /> Filter
          </button>
          <button 
            onClick={() => onViewChange('create-group')}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-ajo-green text-white px-6 py-2.5 rounded-xl font-semibold shadow-sm"
          >
            <Plus size={18} /> Create Group
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_GROUPS.map((group) => (
          <div 
            key={group.id} 
            onClick={() => onSelectGroup(group)}
            className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-ajo-green hover:shadow-md transition-all cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4">
              <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full ${
                group.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
              }`}>
                {group.status}
              </span>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:ajo-green transition-colors">{group.name}</h3>
            <p className="text-xs text-gray-400 mb-4">Code: <span className="font-mono text-gray-600">{group.invite_code}</span></p>
            
            <div className="flex items-center gap-6 mb-6">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Amount</p>
                <p className="text-base font-bold text-gray-900">₦{group.cycle_amount.toLocaleString()}</p>
              </div>
              <div className="h-8 w-[1px] bg-gray-100"></div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Frequency</p>
                <p className="text-base font-bold text-gray-900 capitalize">{group.frequency}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-gray-500">Cycle Progress</span>
                <span className="text-gray-900">{group.current_cycle} / {group.total_slots}</span>
              </div>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-ajo-green transition-all duration-1000" 
                  style={{ width: `${(group.current_cycle / group.total_slots) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-500 overflow-hidden">
                    <img src={`https://picsum.photos/seed/${group.id}${i}/32/32`} alt="user" />
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-400">
                  +{group.total_slots - 3}
                </div>
              </div>
              <button className="text-ajo-green text-sm font-bold flex items-center gap-1">
                Details <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}

        <div 
          onClick={() => onViewChange('create-group')}
          className="border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center p-8 text-gray-400 hover:text-ajo-green hover:border-ajo-green hover:bg-green-50/30 transition-all cursor-pointer group"
        >
          <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-3 group-hover:bg-green-100">
            <Plus size={24} />
          </div>
          <p className="font-bold">Create New Group</p>
          <p className="text-xs">Invite friends and start saving</p>
        </div>
      </div>
    </div>
  );
};
