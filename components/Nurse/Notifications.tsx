"use client";

import React from 'react';

type Notification = {
  message: string;
  time: string;
  type: 'doctor' | 'forum' | 'other';
  profileName: string;
};

type NotificationsProps = {
  notifications: Notification[];
};

const getInitials = (name: string) => {
  const nameParts = name.split(' ');
  return nameParts.map(part => part[0]).join('').toUpperCase();
};

const handleClick = (notification: Notification) => {
 
  alert(`Clicked on: ${notification.message}`);
};

const Notifications = ({ notifications }: NotificationsProps) => {

  if (!notifications) {
    return <div className="bg-white p-4 rounded-lg shadow-lg h-full">Error loading notifications</div>;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg h-full overflow-y-auto" role="region" aria-labelledby="notifications-header">
      <h2 id="notifications-header" className="text-xl font-semibold mb-4">Notifications</h2>
      {notifications.length ? (
        notifications.map((notification: Notification, index: number) => (
          <button
            key={index}
            className="mb-4 w-full text-left flex items-start p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 ease-in-out"
            onClick={() => handleClick(notification)}
          >
            <div className="w-10 h-10 rounded-full bg-blue flex items-center justify-center text-white font-bold mr-4">
              {getInitials(notification.profileName)}
            </div>
            <div>
              <p className="font-medium text-gray-900">{notification.message}</p>
              <p className="text-gray-500 text-sm">{notification.time}</p>
            </div>
          </button>
        ))
      ) : (
        <p className="text-gray-500 text-center">No new notifications</p>
      )}
    </div>
  );
};

export default Notifications;
