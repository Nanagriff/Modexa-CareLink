"use client";

import React from 'react';

const WelcomeMessage = ({ greeting, doctorName, date }: { greeting: string, doctorName: string, date: string }) => {
  return (
    <div className="bg-gradient-to-r from-green-100 via-green-50 to-green-100 p-10 rounded-lg shadow-md w-full lg:w-3/4 xl:w-2/3 h-48 flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold mb-4">{greeting}, <span className="text-green-700">Dr. {doctorName}</span></h1>
        <p className="text-gray-700 text-xl">Today is {date}</p>
      </div>
      <div className="hidden lg:block">
        <img src="https://via.placeholder.com/150" alt="Welcome Image" className="rounded-full shadow-lg" />
      </div>
    </div>
  );
};

export default WelcomeMessage;
