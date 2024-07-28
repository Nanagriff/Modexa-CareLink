"use client";

import React from 'react';

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, setActiveTab }) => {
  const tabs = ['Incoming Requests', 'Appointments', 'Closed Sessions'];

  return (
    <div className="flex justify-center space-x-4 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`py-2 px-6 rounded-full transition-all duration-300 ${
            activeTab === tab
              ? 'bg-green-600 text-white font-semibold shadow-lg'
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
