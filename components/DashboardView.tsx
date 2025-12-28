
import React from 'react';
import { Wallet, ArrowUpCircle, Calendar, Plus, Users, ShieldCheck } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MOCK_GROUPS, MOCK_PAYMENTS } from '../constants';
import { TrustScoreBadge } from './TrustScoreBadge';
import { ViewState, Profile } from '../types';

const chartData = [
  { month: 'Jan', amount: 50000 },
  { month: 'Feb', amount: 100000 },
  { month: 'Mar', amount: 120000 },
  { month: 'Apr', amount: 170000 },
  { month: 'May', amount: 220000 },
];

interface DashboardViewProps {
  onViewChange: (view: ViewState) => void;
  profile: Profile;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ onViewChange, profile }) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Welcome, {profile.first_name}! 👋</h2>
          <p className="text-gray-500">Here's what's happening with your savings today.</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button 
            onClick={() => onViewChange('create-group')}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-ajo-green text-white px-4 py-2.5 rounded-xl font-semibold shadow-sm active:scale-95 transition-all"
          >
            <Plus size={18} /> New Group
          </button>
          <button 
            onClick={() => onViewChange('join-group')}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2.5 rounded-xl font-semibold shadow-sm hover:bg-gray-50 active:scale-95 transition-all"
          >
            Join Group
          </button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-green-50 text-ajo-green rounded-lg">
              <Wallet size={20} />
            </div>
            <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded">+12%</span>
          </div>
          <p className="text-gray-500 text-sm font-medium">Total Savings</p>
          <p className="text-2xl font-bold text-gray-900">₦220,000</p>
        </div>
        
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <Users size={20} />
            </div>
          </div>
          <p className="text-gray-500 text-sm font-medium">Active Groups</p>
          <p className="text-2xl font-bold text-gray-900">2</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
              <ShieldCheck size={20} />
            </div>
          </div>
          <p className="text-gray-500 text-sm font-medium">Trust Score</p>
          <div className="flex items-center gap-2 mt-1">
            <p className="text-2xl font-bold text-gray-900">{profile.trust_score}</p>
            <TrustScoreBadge score={profile.trust_score} size="sm" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
              <ArrowUpCircle size={20} />
            </div>
          </div>
          <p className="text-gray-500 text-sm font-medium">Next Payout</p>
          <p className="text-2xl font-bold text-gray-900">₦500,000</p>
          <p className="text-xs text-gray-400 mt-1">Due in 12 days</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-h-[400px]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-800">Savings Growth</h3>
            <select className="bg-gray-50 border-none text-xs font-semibold rounded-lg px-2 py-1 focus:ring-0">
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00A86B" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00A86B" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#999'}} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  labelStyle={{ fontWeight: 'bold', marginBottom: '4px' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="amount" 
                  stroke="#00A86B" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorAmount)" 
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-4">Upcoming Payments</h3>
          <div className="space-y-4">
            {MOCK_PAYMENTS.filter(p => p.status === 'pending').map((p) => (
              <div 
                key={p.id} 
                className="flex items-center gap-4 p-3 rounded-xl border border-dashed border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => onViewChange('payments')}
              >
                <div className="w-12 h-12 bg-ajo-green/10 text-ajo-green rounded-xl flex items-center justify-center shrink-0">
                  <Calendar size={24} />
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-sm font-bold text-gray-900 truncate">₦{p.amount.toLocaleString()}</p>
                  <p className="text-xs text-gray-500 truncate">Lagos Tech Savings</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-red-500 uppercase">May 30</p>
                  <button className="text-[10px] bg-ajo-green text-white px-2 py-1 rounded font-bold mt-1">PAY</button>
                </div>
              </div>
            ))}
            
            <div className="pt-2">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Active Groups</h4>
              <div className="space-y-3">
                {MOCK_GROUPS.map(g => (
                  <div 
                    key={g.id} 
                    className="flex items-center justify-between cursor-pointer group"
                    onClick={() => onViewChange('groups')}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-ajo-green"></div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-ajo-green">{g.name}</span>
                    </div>
                    <span className="text-xs font-bold text-gray-900">{Math.round((g.current_cycle / g.total_slots) * 100)}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
