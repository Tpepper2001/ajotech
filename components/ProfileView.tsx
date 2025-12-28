
import React, { useState } from 'react';
import { Camera, Shield, Smartphone, Banknote, Building2, History, ShieldCheck, ShieldAlert } from 'lucide-react';
import { Profile } from '../types';
import { TrustScoreBadge } from './TrustScoreBadge';
import { BVNVerificationModal } from './BVNVerificationModal';

interface ProfileViewProps {
  profile: Profile;
  onUpdateProfile: (updates: Partial<Profile>) => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ profile, onUpdateProfile }) => {
  const [showBvnModal, setShowBvnModal] = useState(false);

  const handleBvnVerified = (bvn: string) => {
    onUpdateProfile({
      bvn: bvn,
      is_bvn_verified: true,
      trust_score: profile.trust_score + 30 // Significant boost for BVN
    });
    setShowBvnModal(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {showBvnModal && <BVNVerificationModal onClose={() => setShowBvnModal(false)} onVerified={handleBvnVerified} />}
      
      {/* Profile Header */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8">
          <TrustScoreBadge score={profile.trust_score} size="lg" />
        </div>
        
        <div className="relative group">
          <div className="w-32 h-32 rounded-3xl bg-ajo-green text-white flex items-center justify-center font-black text-4xl shadow-xl shadow-green-200">
            {profile.first_name[0]}{profile.last_name[0]}
          </div>
          <button className="absolute -bottom-2 -right-2 p-2 bg-white border border-gray-100 rounded-xl shadow-md text-gray-600 hover:text-ajo-green transition-all">
            <Camera size={20} />
          </button>
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-3xl font-black text-gray-900">{profile.first_name} {profile.last_name}</h2>
          <p className="text-gray-500 font-medium">Standard Saver • Member since Oct 2023</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
            <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 ${profile.is_email_verified ? 'bg-ajo-green/10 text-ajo-green' : 'bg-gray-100 text-gray-400'}`}>
              <Shield size={12} /> Email {profile.is_email_verified ? 'Verified' : 'Pending'}
            </span>
            <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 ${profile.is_phone_verified ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-400'}`}>
              <Smartphone size={12} /> Phone {profile.is_phone_verified ? 'Verified' : 'Pending'}
            </span>
            <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 ${profile.is_bvn_verified ? 'bg-purple-100 text-purple-700' : 'bg-red-100 text-red-700'}`}>
              {profile.is_bvn_verified ? <ShieldCheck size={12} /> : <ShieldAlert size={12} />}
              BVN {profile.is_bvn_verified ? 'Verified' : 'Unverified'}
            </span>
          </div>
        </div>
      </div>

      {!profile.is_bvn_verified && (
        <div className="bg-red-50 border border-red-100 p-6 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 shrink-0">
              <ShieldAlert size={24} />
            </div>
            <div>
              <h4 className="font-black text-red-900">Complete Verification</h4>
              <p className="text-sm text-red-700 font-medium">Your account is limited. Verify your BVN to increase your trust score and join premium saving circles.</p>
            </div>
          </div>
          <button 
            onClick={() => setShowBvnModal(true)}
            className="whitespace-nowrap px-8 py-3 bg-red-600 text-white font-black rounded-2xl hover:bg-red-700 transition-all shadow-lg shadow-red-900/10 active:scale-95"
          >
            Verify Now
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bank Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            <Building2 size={20} className="text-ajo-green" /> Bank Details
          </h3>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-6">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Bank Name</p>
                <p className="text-base font-bold text-gray-900">{profile.bank_name || 'Not Set'}</p>
              </div>
              <Banknote className="text-gray-300" />
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Account Number</p>
              <p className="text-base font-bold text-gray-900 tracking-widest">{profile.account_number || '**********'}</p>
            </div>
            <button className="w-full py-3 px-4 bg-gray-900 text-white font-bold rounded-xl active:scale-95 transition-all">
              Update Bank Info
            </button>
          </div>
        </div>

        {/* Trust Score Breakdown */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            <History size={20} className="text-ajo-green" /> Score Breakdown
          </h3>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-600">Basic Verification</span>
              <span className="text-sm font-bold text-ajo-green">+15 pts</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-600">BVN Verification</span>
              <span className={`text-sm font-bold ${profile.is_bvn_verified ? 'text-ajo-green' : 'text-gray-400'}`}>
                {profile.is_bvn_verified ? '+30 pts' : 'Locked'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-600">On-time Payments</span>
              <span className="text-sm font-bold text-ajo-green">+10 pts</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-600">Completed Cycles</span>
              <span className="text-sm font-bold text-gray-400">0 pts</span>
            </div>
            <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
              <span className="text-base font-black text-gray-900">Current Score</span>
              <span className="text-xl font-black ajo-green">{profile.trust_score}</span>
            </div>
            <p className="text-xs text-gray-400 italic">Increase your score by making contributions on time and completing cycles.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
