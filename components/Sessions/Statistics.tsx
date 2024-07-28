"use client";

import React from 'react';
import { FaUserMd, FaPhone, FaStar, FaVideo } from 'react-icons/fa';

const stats = [
  { label: 'Total Sessions', value: 250, icon: FaUserMd, color: 'bg-green-200', textColor: 'text-green-800' },
  { label: 'Avg Duration (min)', value: 25, icon: FaPhone, color: 'bg-red-200', textColor: 'text-red-800' },
  { label: 'Avg Rating', value: 4.6, icon: FaStar, color: 'bg-yellow-200', textColor: 'text-yellow-800' },
  { label: 'Video Calls', value: 250, icon: FaVideo, color: 'bg-purple-200', textColor: 'text-purple-800' },
];

const Statistics = () => {
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
          </div>
        );
      })}
    </div>
  );
};

export default Statistics;
