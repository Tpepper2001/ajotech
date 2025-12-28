
export type GroupStatus = 'forming' | 'active' | 'completed' | 'paused';
export type PaymentStatus = 'pending' | 'completed' | 'late' | 'failed';
export type Frequency = 'weekly' | 'monthly';

export interface Profile {
  id: string;
  email: string;
  phone: string;
  first_name: string;
  last_name: string;
  bank_name?: string;
  account_number?: string;
  trust_score: number;
  created_at: string;
  bvn?: string;
  is_bvn_verified: boolean;
  is_phone_verified: boolean;
  is_email_verified: boolean;
}

export interface Group {
  id: string;
  name: string;
  admin_id: string;
  cycle_amount: number;
  frequency: Frequency;
  payment_day: number;
  total_slots: number;
  current_cycle: number;
  status: GroupStatus;
  start_date?: string;
  invite_code: string;
}

export interface GroupMember {
  id: string;
  group_id: string;
  user_id: string;
  position: number;
  status: 'active' | 'inactive';
  profile?: Profile;
}

export interface Payment {
  id: string;
  group_id: string;
  cycle_number: number;
  payer_id: string;
  recipient_id: string;
  amount: number;
  due_date: string;
  status: PaymentStatus;
  paid_date?: string;
}

export type ViewState = 
  | 'dashboard' 
  | 'groups' 
  | 'group-detail' 
  | 'profile' 
  | 'payments' 
  | 'auth' 
  | 'create-group' 
  | 'join-group';
