"use client";

import React, { useEffect, useState } from 'react';
import { FaUser, FaClock, FaCalendarAlt, FaBuilding } from 'react-icons/fa';

const calculateLoginDuration = (loginTime: Date) => {
  const now = new Date();
  const duration = Math.floor((now.getTime() - loginTime.getTime()) / 1000); // duration in seconds
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;
  return `${hours}h ${minutes}m ${seconds}s`;
};

const LoginStatus = ({
  loginAs,
  userType,
  organization,
  loginTime,
  lastLogin,
}: {
  loginAs: string;
  userType: string;
  organization: string;
  loginTime: string;
  lastLogin: string;
}) => {
  const [loginDuration, setLoginDuration] = useState('');

  useEffect(() => {
    const loginTimeDate = new Date(loginTime);
    const intervalId = setInterval(() => {
      setLoginDuration(calculateLoginDuration(loginTimeDate));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [loginTime]);

  return (
    <div className="bg-[#182A35] p-6 rounded-lg shadow-lg h-full max-w-md mx-auto text-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Login Status</h2>
      <div className="flex items-center mb-4">
        <FaUser className="mr-2 text-xl" />
        <p><strong>Login As:</strong> {loginAs}</p>
      </div>
      <div className="flex items-center mb-4">
        <FaUser className="mr-2 text-xl" />
        <p><strong>User Type:</strong> {userType}</p>
      </div>
      <div className="flex items-center mb-4">
        <FaBuilding className="mr-2 text-xl" />
        <p><strong>Organization:</strong> {organization}</p>
      </div>
      <div className="flex items-center mb-4">
        <FaClock className="mr-2 text-xl" />
        <p><strong>Login Duration:</strong> {loginDuration}</p>
      </div>
      <div className="flex items-center">
        <FaCalendarAlt className="mr-2 text-xl" />
        <p><strong>Last Login:</strong> {new Date(lastLogin).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default LoginStatus;
