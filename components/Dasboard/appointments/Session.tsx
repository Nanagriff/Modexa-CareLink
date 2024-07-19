"use client"; // Ensure this is a client component

import React, { useState } from 'react';

const MedicalSessions = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapseChange = (collapsed: boolean) => {
    setIsCollapsed(collapsed);
  };

  return (
    <div className={`flex h-screen bg-gray-100 ${isCollapsed ? 'pl-20' : 'pl-64'}`}>
      <div className="flex-1 flex flex-col p-4">
        <div className="bg-white p-4 shadow rounded mb-4">
          <h2 className="text-xl font-semibold mb-4">Medical Sessions</h2>
          <div className="flex space-x-4 mb-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded">Incoming Requests</button>
            <button className="bg-gray-200 px-4 py-2 rounded">Appointments</button>
            <button className="bg-gray-200 px-4 py-2 rounded">Closed Sessions</button>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="border-b-2 p-2">Patient Name</th>
                <th className="border-b-2 p-2">Organization</th>
                <th className="border-b-2 p-2">Date</th>
                <th className="border-b-2 p-2">Time</th>
                <th className="border-b-2 p-2">Mode</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b p-2">Elisha Mensah</td>
                <td className="border-b p-2">G S T S</td>
                <td className="border-b p-2">08-08-24</td>
                <td className="border-b p-2">10:15</td>
                <td className="border-b p-2">Video</td>
              </tr>
              <tr>
                <td className="border-b p-2">Elisha Mensah</td>
                <td className="border-b p-2">G S T S</td>
                <td className="border-b p-2">08-08-24</td>
                <td className="border-b p-2">10:15</td>
                <td className="border-b p-2">Video</td>
              </tr>
              <tr>
                <td className="border-b p-2">Elisha Mensah</td>
                <td className="border-b p-2">G S T S</td>
                <td className="border-b p-2">08-08-24</td>
                <td className="border-b p-2">10:15</td>
                <td className="border-b p-2">Video</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="flex mb-4">
          <div className="bg-white p-4 shadow rounded flex-1 mr-4">
            <h3 className="text-lg font-semibold mb-2">Statistics</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-green-100 p-4 rounded">
                <h4 className="text-md font-semibold">Total Sessions</h4>
                <p className="text-lg">250</p>
              </div>
              <div className="bg-red-100 p-4 rounded">
                <h4 className="text-md font-semibold">Avg Duration (min)</h4>
                <p className="text-lg">25</p>
              </div>
              <div className="bg-yellow-100 p-4 rounded">
                <h4 className="text-md font-semibold">Avg Rating</h4>
                <p className="text-lg">4.6</p>
              </div>
              <div className="bg-purple-100 p-4 rounded">
                <h4 className="text-md font-semibold">Video Calls</h4>
                <p className="text-lg">250</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-lg font-semibold mb-2">Recent Activities</h3>
          <ul>
            <li className="mb-2">Session finalized <span className="text-gray-500">12/04/2023 10:04:14 AM</span></li>
            <li className="mb-2">Lab test requested at Modexa labs <span className="text-gray-500">12/04/2023 10:04:14 AM</span></li>
            <li className="mb-2">Updated a prescription for Elisha Mensah <span className="text-gray-500">12/04/2023 10:04:14 AM</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MedicalSessions;
