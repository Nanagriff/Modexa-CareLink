"use client";
import Navbar from '@/components/Dasboard/Navbar';
import RightSidebar from '@/components/RightSidebar';
import Sidebar from '@/components/Nurse/Sidebar';
import React, { ReactNode, useState } from 'react';

interface Notification {
    message: string;
    time: string;
    type: 'doctor' | 'forum' | 'other';
    profileName: string;
 
}

interface Note {
  id: string;
  content: string;
  createdAt: string;
  
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

  // Example data for the props 
  const notifications: Notification[] = [
        {
          message: 'Message from Dr. Ameyaw',
          time: 'Just now',
          type: 'doctor',
          profileName: 'Dr. Ameyaw',
        },
        {
          message: 'New post in the Forum',
          time: '23 minutes ago',
          type: 'forum',
          profileName: 'Forum Post',
        },
      ];
  
  const notes: Note[] = [
    
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
        }`}
      >
        <Navbar />

        <div className="flex flex-1 w-full flex-col">
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
