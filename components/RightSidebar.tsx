"use client";

import React, { useState } from 'react';
import ScheduleCalendar from './ScheduleCalendar';
import Profile from './Profile';
import ChatItem from './ChatItem';
import ForumItem from './ForumItem';

const RightSidebar = () => {
  const [showAllChats, setShowAllChats] = useState(false);

  const handleMoreClick = () => {
    setShowAllChats(!showAllChats);
  };

  const chats = [
    { name: "St. James Seminary", lastMessage: "Appointment confirmed for tomorrow.", time: "4:30 AM", unreadCount: 1 },
    { name: "Mary Johnson", lastMessage: "Can we reschedule our meeting?", time: "4:45 AM", unreadCount: 2 },
    // Add more chat items here
  ];

  const forums = [
    { title: "Sexual Health", details: "Premature Ejaculation", views: 5700, likes: 100, time: "4:30 AM", image: "https://via.placeholder.com/150" },
    { title: "Dental Hygiene", details: "Premature Ejaculation", views: 2300, likes: 50, time: "4:30 AM", image: "https://via.placeholder.com/150" },
    // Add more forum items here
  ];

  const displayedChats = showAllChats ? chats : chats.slice(0, 2);

  return (
    <div className="w-80 p-6 fixed right-0 top-0 bottom-0 overflow-y-auto bg-white text-gray-900">
      <Profile doctorName="Dr. Samuel Griff" />
      <div className="mb-6">
        <ScheduleCalendar />
      </div>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Chats</h2>
          <button className="text-green-600" onClick={handleMoreClick}>
            {showAllChats ? "Less" : "More"}
          </button>
        </div>
        <div className="space-y-4">
          {displayedChats.map((chat, index) => (
            <ChatItem  key={index} {...chat} />
          ))}
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Your Forums</h2>
          <button className="text-green-600">More</button>
        </div>
        <div className="space-y-4">
          {forums.map((forum, index) => (
            <ForumItem key={index} {...forum} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
