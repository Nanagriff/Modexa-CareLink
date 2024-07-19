"use client";

import { useState } from 'react';
import { AppStateProvider, useAppState } from '@/components/Forums/useAppState';
import ForumsPage from '@/components/Forums/ForumsPage';
import ForumDetailPage from '@/components/Forums/ForumDetailPage';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Dasboard/Navbar';

const MainContent = () => {
  const { currentForumId } = useAppState();
  return currentForumId ? <ForumDetailPage /> : <ForumsPage />;
};

const HomePage = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleCollapseChange = (collapsed: boolean) => {
    setIsSidebarCollapsed(collapsed);
  };

  return (
    <AppStateProvider>
      <div className="flex h-screen">
        <Sidebar onCollapseChange={handleCollapseChange} />
        <div className={`flex-1 flex flex-col ${isSidebarCollapsed ? 'ml-16' : 'ml-64'} transition-all duration-300`}>
          <Navbar />
          <div className="flex-1 flex">
            <div className="flex-1 p-4 mr-4">
              <MainContent />
            </div>
          </div>
        </div>
      </div>
    </AppStateProvider>
  );
};

export default HomePage;
