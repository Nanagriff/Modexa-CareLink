"use client";  // Add this directive at the top of your component file

import React from 'react';
import { FaUserMd, FaPhone, FaComments, FaVideo } from 'react-icons/fa';

const stats = [
  { label: 'Total Patients', value: 250, icon: FaUserMd, color: 'bg-green-200', textColor: 'text-green-800' },
  { label: 'Audio Calls', value: 250, icon: FaPhone, color: 'bg-red-200', textColor: 'text-red-800' },
  { label: 'Chat Sessions', value: 250, icon: FaComments, color: 'bg-yellow-200', textColor: 'text-yellow-800' },
  { label: 'Video Calls', value: 250, icon: FaVideo, color: 'bg-purple-200', textColor: 'text-purple-800' },
];

const StatsCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className={`${stat.color} ${stat.textColor} p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer relative`}
            onClick={() => alert(`${stat.label} clicked!`)}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="bg-white p-3 rounded-full shadow-md">
                <Icon className={`text-3xl ${stat.textColor}`} />
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-lg">{stat.label}</div>
            </div>
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-0 hover:opacity-10 transition-opacity duration-200 ease-in-out"
              style={{ borderRadius: 'inherit' }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCard;
