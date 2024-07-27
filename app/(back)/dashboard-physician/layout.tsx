"use client";
import Navbar from '@/components/Dasboard/Navbar';
import RightSidebar from '@/components/RightSidebar';
import Sidebar from '@/components/Sidebar';
import React, { ReactNode, useState } from 'react';

interface Notification {
  id: string;
  message: string;
  timestamp: string;
  // Add other relevant fields
}

interface Note {
  id: string;
  content: string;
  createdAt: string;
  // Add other relevant fields
}

interface LoginInfo {
  loginAs: string;
  userType: string;
  organization: string;
  loginTime: string;
  lastLogin: string;
}

export default function Layout({ children }: { children: ReactNode }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  // Example data for the props (replace with your actual data source)
  const notifications: Notification[] = [
    // your notifications data here
  ];
  const notes: Note[] = [
    // your notes data here
  ];
  const loginInfo: LoginInfo = {
    loginAs: 'User',
    userType: 'Admin',
    organization: 'Example Org',
    loginTime: '2024-07-25T12:00:00Z',
    lastLogin: '2024-07-24T12:00:00Z',
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar onCollapseChange={setIsSidebarCollapsed} />
      <div
        className={`flex-1 flex flex-col bg-gray-100 overflow-hidden transition-all duration-300 ${
          isSidebarCollapsed ? 'ml-16' : 'ml-48'
        } pr-80`}
      >
        <Navbar />

        <div className="flex min-h-screen w-full flex-col">
          {children}
        </div>
        <RightSidebar
          notifications={notifications}
          loginInfo={loginInfo}
        />
      </div>
    </div>
  );
}
