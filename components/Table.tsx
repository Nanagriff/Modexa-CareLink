"use client";
import React from 'react';

interface TableProps {
  data: {
    name: string;
    organization: string;
    date: string;
    time: string;
    mode: string;
  }[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 gap-4">
        <div className="grid grid-cols-6 gap-4 text-center font-semibold text-gray-700">
          <div>#</div>
          <div>Name</div>
          <div>Organization</div>
          <div>Date</div>
          <div>Time</div>
          <div>Mode</div>
        </div>
        {data.map((session, index) => (
          <div
            key={index}
            className="grid grid-cols-6 gap-4 text-center p-4 rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer"
            style={{
              background: index % 2 === 0 ? '#f9f9f9' : '#fff'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#38a169';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#f9f9f9' : '#fff';
              e.currentTarget.style.color = 'black';
            }}
          >
            <div className="font-medium">{index + 1}</div>
            <div className="font-medium">{session.name}</div>
            <div className="font-medium">{session.organization}</div>
            <div className="font-medium">{session.date}</div>
            <div className="font-medium">{session.time}</div>
            <div className="font-medium">{session.mode}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <div className="mt-4 text-teal-600 cursor-pointer">More</div>
      </div>
    </div>
  );
};

export default Table;
