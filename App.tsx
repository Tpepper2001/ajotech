
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { DashboardView } from './components/DashboardView';
import { GroupListView } from './components/GroupListView';
import { GroupDetailView } from './components/GroupDetailView';
import { PaymentView } from './components/PaymentView';
import { ProfileView } from './components/ProfileView';
import { CreateGroupView } from './components/CreateGroupView';
import { JoinGroupView } from './components/JoinGroupView';
import { AuthView } from './components/AuthView';
import { ViewState, Group, Profile } from './types';
import { MOCK_PROFILE } from './constants';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewState>('dashboard');
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
  const [userProfile, setUserProfile] = useState<Profile>(MOCK_PROFILE);

  const handleGroupSelect = (group: Group) => {
    setSelectedGroup(group);
    setActiveView('group-detail');
  };

  const updateProfile = (updates: Partial<Profile>) => {
    setUserProfile(prev => ({ ...prev, ...updates }));
  };

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardView onViewChange={setActiveView} />;
      case 'groups':
        return <GroupListView onSelectGroup={handleGroupSelect} onViewChange={setActiveView} />;
      case 'group-detail':
        return selectedGroup ? (
          <GroupDetailView group={selectedGroup} onBack={() => setActiveView('groups')} />
        ) : <GroupListView onSelectGroup={handleGroupSelect} onViewChange={setActiveView} />;
      case 'payments':
        return <PaymentView />;
      case 'profile':
        return <ProfileView profile={userProfile} onUpdateProfile={updateProfile} />;
      case 'create-group':
        return <CreateGroupView onBack={() => setActiveView('groups')} />;
      case 'join-group':
        return <JoinGroupView onBack={() => setActiveView('dashboard')} />;
      case 'auth':
        return <AuthView onLogin={() => setActiveView('dashboard')} />;
      default:
        return <DashboardView onViewChange={setActiveView} />;
    }
  };

  return (
    <Layout activeView={activeView} onViewChange={setActiveView}>
      {renderContent()}
    </Layout>
  );
};

export default App;
