import React from 'react';

const TabNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <div className="border-b border-gray-200">
      <nav className="flex -mb-px space-x-8">
        {['Incoming Requests', 'Appointments', 'Closed Sessions'].map((tab) => (
          <button
            key={tab}
            className={`${
              activeTab === tab ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TabNavigation;
