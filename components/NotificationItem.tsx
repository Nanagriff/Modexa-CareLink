import React from 'react';

interface NotificationItemProps {
  title: string;
  message: string;
  time: string;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ title, message, time }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{message}</p>
      <p className="text-xs text-gray-500">{time}</p>
    </div>
  );
};

export default NotificationItem;
