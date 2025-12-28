
import React from 'react';
import { LayoutDashboard, Users, CreditCard, User, LogOut, Bell, ShieldCheck } from 'lucide-react';
import { Profile, Group, Payment, GroupMember } from './types';

export const COLORS = {
  primary: '#00A86B',
  accent: '#FFD700',
  error: '#DC2626',
  success: '#166534',
  warning: '#EA580C',
};

export const MOCK_PROFILE: Profile = {
  id: 'user-1',
  email: 'tunde.ade@example.com',
  phone: '+234 812 345 6789',
  first_name: 'Tunde',
  last_name: 'Adewale',
  bank_name: 'Access Bank',
  account_number: '0123456789',
  trust_score: 55, // Lowered initial score to show impact of BVN verification
  created_at: '2023-10-01',
  is_bvn_verified: false,
  is_phone_verified: true,
  is_email_verified: true,
};

export const MOCK_GROUPS: Group[] = [
  {
    id: 'group-1',
    name: 'Lagos Tech Savings',
    admin_id: 'user-1',
    cycle_amount: 50000,
    frequency: 'monthly',
    payment_day: 30,
    total_slots: 10,
    current_cycle: 4,
    status: 'active',
    start_date: '2023-10-01',
    invite_code: 'TECHLAG1',
  },
  {
    id: 'group-2',
    name: 'Ibadan Retail Ajo',
    admin_id: 'user-2',
    cycle_amount: 10000,
    frequency: 'weekly',
    payment_day: 1,
    total_slots: 5,
    current_cycle: 0,
    status: 'forming',
    invite_code: 'RETAILIB',
  }
];

export const MOCK_PAYMENTS: Payment[] = [
  {
    id: 'pay-1',
    group_id: 'group-1',
    cycle_number: 4,
    payer_id: 'user-1',
    recipient_id: 'user-5',
    amount: 50000,
    due_date: '2024-05-30',
    status: 'pending',
  },
  {
    id: 'pay-2',
    group_id: 'group-1',
    cycle_number: 3,
    payer_id: 'user-1',
    recipient_id: 'user-4',
    amount: 50000,
    due_date: '2024-04-30',
    status: 'completed',
    paid_date: '2024-04-28',
  }
];

export const MOCK_MEMBERS: GroupMember[] = [
  { id: 'm1', group_id: 'group-1', user_id: 'user-1', position: 1, status: 'active', profile: MOCK_PROFILE },
  { id: 'm2', group_id: 'group-1', user_id: 'user-2', position: 2, status: 'active', profile: { ...MOCK_PROFILE, first_name: 'Chioma', last_name: 'Okoro', trust_score: 92, is_bvn_verified: true } },
  { id: 'm3', group_id: 'group-1', user_id: 'user-3', position: 3, status: 'active', profile: { ...MOCK_PROFILE, first_name: 'Ahmed', last_name: 'Musa', trust_score: 75, is_bvn_verified: true } },
];

export const NAV_ITEMS = [
  { id: 'dashboard', label: 'Home', icon: <LayoutDashboard size={20} /> },
  { id: 'groups', label: 'Groups', icon: <Users size={20} /> },
  { id: 'payments', label: 'History', icon: <CreditCard size={20} /> },
  { id: 'profile', label: 'Account', icon: <User size={20} /> },
];
