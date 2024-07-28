import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

interface ChatItemProps {
  name: string;
  lastMessage: string;
  time: string;
  unreadCount: number;
}

const ChatItem: React.FC<ChatItemProps> = ({ name, lastMessage, time, unreadCount }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-2 hover:bg-gray-100 cursor-pointer transition duration-200 ease-in-out">
      <div className="flex items-center">
        <FaEnvelope className="h-8 w-8 text-green-700" />
        <div className="ml-4">
          <h4 className="font-bold text-gray-800">{name}</h4>
          <p className="text-gray-600 text-sm">{lastMessage}</p>
        </div> 
      </div>
      <div className="text-right">
        <p className="text-gray-500 text-xs">{time}</p>
        {unreadCount > 0 && <span className="bg-green-600 text-white rounded-full text-xs px-2 py-1">{unreadCount}</span>}
      </div>
    </div>
  );
};

export default ChatItem;

