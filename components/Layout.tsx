
import React from 'react';
import { Bell, ShieldCheck, LogOut } from 'lucide-react';
import { NAV_ITEMS, MOCK_PROFILE } from '../constants';
import { ViewState } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeView: ViewState;
  onViewChange: (view: ViewState) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeView, onViewChange }) => {
  // If we're in auth view, don't wrap with layout
  if (activeView === 'auth') {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
        <div className="p-6">
          <h1 className="text-2xl font-bold flex items-center gap-2 ajo-green">
            <ShieldCheck size={28} /> Ajo Digital
          </h1>
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id as ViewState)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeView === item.id 
                  ? 'bg-ajo-green text-white font-semibold shadow-md' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button 
            onClick={() => onViewChange('auth')}
            className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-red-600 transition-colors"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center">
        <h1 
          className="text-xl font-bold flex items-center gap-2 ajo-green cursor-pointer"
          onClick={() => onViewChange('dashboard')}
        >
          <ShieldCheck size={24} /> Ajo
        </h1>
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-gray-500">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div 
            className="w-8 h-8 rounded-full bg-ajo-green text-white flex items-center justify-center font-bold text-xs cursor-pointer"
            onClick={() => onViewChange('profile')}
          >
            {MOCK_PROFILE.first_name[0]}{MOCK_PROFILE.last_name[0]}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto pb-24 md:pb-0">
        {/* Desktop Header Top Bar */}
        <header className="hidden md:flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100 sticky top-0 z-10">
          <h2 className="text-xl font-semibold capitalize text-gray-800">{activeView.replace('-', ' ')}</h2>
          <div className="flex items-center gap-6">
            <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-all">
              <Bell size={22} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => onViewChange('profile')}>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900 leading-none">{MOCK_PROFILE.first_name} {MOCK_PROFILE.last_name}</p>
                <p className="text-xs text-gray-500">Tier 2 Verified</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-ajo-green text-white flex items-center justify-center font-bold">
                {MOCK_PROFILE.first_name[0]}{MOCK_PROFILE.last_name[0]}
              </div>
            </div>
          </div>
        </header>

        <div className="p-4 md:p-8">
          {children}
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-2 flex justify-around items-center z-50">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id as ViewState)}
            className={`flex flex-col items-center gap-1 p-2 transition-colors ${
              activeView === item.id ? 'ajo-green' : 'text-gray-400'
            }`}
          >
            {item.icon}
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};
