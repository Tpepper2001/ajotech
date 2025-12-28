
import React from 'react';
import { Search, Download, Filter, CheckCircle2, Clock, XCircle, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { MOCK_PAYMENTS } from '../constants';

export const PaymentView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search transactions..." 
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-ajo-green"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-600 px-4 py-2.5 rounded-xl font-semibold">
            <Filter size={18} /> Status
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-600 px-4 py-2.5 rounded-xl font-semibold">
            <Download size={18} /> Export
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Transaction</th>
                <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Group</th>
                <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Amount</th>
                <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {MOCK_PAYMENTS.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50/50 transition-colors cursor-pointer group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${payment.recipient_id === 'user-1' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-ajo-green'}`}>
                        {payment.recipient_id === 'user-1' ? <ArrowDownLeft size={18} /> : <ArrowUpRight size={18} />}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">{payment.recipient_id === 'user-1' ? 'Payout Received' : 'Cycle Contribution'}</p>
                        <p className="text-[10px] text-gray-400 font-mono">REF: {payment.id.split('-')[0].toUpperCase()}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-semibold text-gray-600">Lagos Tech Savings</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-black text-gray-900">₦{payment.amount.toLocaleString()}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                      payment.status === 'completed' 
                        ? 'bg-green-100 text-green-700' 
                        : payment.status === 'pending' 
                        ? 'bg-yellow-100 text-yellow-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {payment.status === 'completed' ? <CheckCircle2 size={12} /> : payment.status === 'pending' ? <Clock size={12} /> : <XCircle size={12} />}
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs text-gray-500 font-medium">{payment.paid_date || payment.due_date}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
