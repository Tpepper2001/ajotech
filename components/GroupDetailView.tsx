
import React from 'react';
/* Added Plus to imports */
import { ArrowLeft, Share2, Info, Users, ShieldCheck, CheckCircle2, Clock, Plus } from 'lucide-react';
import { Group } from '../types';
import { MOCK_MEMBERS, MOCK_PAYMENTS } from '../constants';
import { TrustScoreBadge } from './TrustScoreBadge';

export const GroupDetailView: React.FC<{ group: Group; onBack: () => void }> = ({ group, onBack }) => {
  return (
    <div className="space-y-6 pb-12">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:ajo-green font-semibold transition-colors">
        <ArrowLeft size={18} /> Back to Groups
      </button>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-ajo-green h-32 md:h-48 flex items-end p-6 relative">
          <div className="absolute top-4 right-4 flex gap-2">
            <button className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg backdrop-blur-md transition-all">
              <Share2 size={20} />
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg backdrop-blur-md transition-all">
              <Info size={20} />
            </button>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between w-full">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white">{group.name}</h2>
              <div className="flex items-center gap-4 mt-2">
                <span className="flex items-center gap-1 text-white/80 text-sm font-medium"><Users size={16}/> {group.total_slots} Members</span>
                <span className="flex items-center gap-1 text-white/80 text-sm font-medium"><ShieldCheck size={16}/> Managed by You</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0 bg-white/10 rounded-xl px-4 py-2 border border-white/20 backdrop-blur-sm">
              <p className="text-xs text-white/70 font-bold uppercase tracking-wider">Next Payout</p>
              <p className="text-xl font-bold text-white">₦{(group.cycle_amount * group.total_slots).toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Cycle Status */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                Current Cycle Status 
                <span className="bg-ajo-green/10 text-ajo-green text-[10px] px-2 py-0.5 rounded-full uppercase">Cycle {group.current_cycle}</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Total Paid</p>
                  <p className="text-lg font-bold text-gray-900">₦250k</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Pending</p>
                  <p className="text-lg font-bold text-red-500">₦50k</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Days Left</p>
                  <p className="text-lg font-bold text-gray-900">12</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Positions</p>
                  <p className="text-lg font-bold text-gray-900">10/10</p>
                </div>
              </div>
            </div>

            {/* Member List */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Member Contributions</h3>
              <div className="space-y-3">
                {MOCK_MEMBERS.map((member, i) => (
                  <div key={member.id} className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-2xl hover:border-ajo-green transition-all shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500">
                        {member.position}
                      </div>
                      <img src={`https://picsum.photos/seed/${member.id}/40/40`} className="w-10 h-10 rounded-full border border-gray-200" alt="member" />
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{member.profile?.first_name} {member.profile?.last_name}</p>
                        <div className="flex items-center gap-2">
                          <TrustScoreBadge score={member.profile?.trust_score || 0} size="sm" />
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`flex items-center justify-end gap-1 text-[10px] font-bold uppercase ${i === 2 ? 'text-orange-500' : 'text-ajo-green'}`}>
                        {i === 2 ? <Clock size={12} /> : <CheckCircle2 size={12} />}
                        {i === 2 ? 'Pending' : 'Completed'}
                      </span>
                      <p className="text-xs text-gray-400 mt-1">Paid on 12 May</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Quick Actions Card */}
            <div className="bg-gray-900 rounded-3xl p-6 text-white shadow-xl shadow-gray-200">
              <h4 className="text-xl font-black mb-4">Actions</h4>
              <div className="space-y-3">
                <button className="w-full py-3 px-4 bg-ajo-green text-white font-bold rounded-xl hover:bg-green-600 transition-colors shadow-lg shadow-green-900/20 active:scale-95">
                  Make Contribution
                </button>
                <button className="w-full py-3 px-4 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all active:scale-95">
                  Send Reminder
                </button>
                <button className="w-full py-3 px-4 bg-transparent text-gray-400 text-sm font-semibold hover:text-red-400 transition-colors">
                  Leave Group
                </button>
              </div>
            </div>

            {/* Invite Info */}
            <div className="bg-ajo-green/5 border border-dashed border-ajo-green/30 rounded-3xl p-6">
              <h4 className="font-bold text-ajo-green mb-2 flex items-center gap-2">
                <Share2 size={18} /> Invite Members
              </h4>
              <p className="text-xs text-gray-500 mb-4">Share this code with your contacts to join this group.</p>
              <div className="flex gap-2">
                <div className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-2 font-mono font-bold text-gray-700 flex items-center justify-center">
                  {group.invite_code}
                </div>
                <button className="bg-white border border-gray-200 p-2 rounded-xl text-gray-500 hover:text-ajo-green">
                  <Plus size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
