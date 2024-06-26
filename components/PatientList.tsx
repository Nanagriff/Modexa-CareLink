"use client"

import React, { useState } from 'react';

const patients = [
  { name: 'Elisha Mensa', status: 'Flagged', bp: '122/85', bg: '15', temp: '3.9', update: '03 May 2024' },
  { name: 'Nana Griffiths', status: 'Recovered', bp: '105/80', bg: '4.5', temp: '36.7', update: '04 Apr 2024' },
  { name: 'Sadick Mustaph', status: 'Flagged', bp: '113/24', bg: '4.5', temp: '30.1', update: '01 Jun 2024' },
  { name: 'Compson Elvis', status: 'Refer', bp: '122/85', bg: '15', temp: '3.9', update: '03 May 2024' },
  { name: 'Bernard Tetteh', status: 'Recovered', bp: '105/80', bg: '4.5', temp: '36.7', update: '04 May 2024' },
  { name: 'Justina Abbey', status: 'Monitor', bp: '113/24', bg: '4.5', temp: '30.1', update: '06 Jun 2024' },
  // Add more patients as needed
];

const getFilteredPatients = (filter: string, statusFilter: string) => {
  const now = new Date();
  let startDate: Date;

  if (filter === 'This Week') {
    startDate = new Date(now.setDate(now.getDate() - now.getDay()));
  } else if (filter === 'Last Week') {
    startDate = new Date(now.setDate(now.getDate() - now.getDay() - 7));
  } else if (filter === 'Last Month') {
    startDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  } else {
    startDate = new Date(); 
  }

  return patients.filter(patient => {
    const updateDate = new Date(patient.update);
    const matchesStatus = statusFilter === 'All' || patient.status === statusFilter;
    return updateDate >= startDate && matchesStatus;
  });
};

const PatientList = () => {
  const [filter, setFilter] = useState('This Week');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredPatients = getFilteredPatients(filter, statusFilter);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 mr-2"
        >
          <option>This Week</option>
          <option>Last Week</option>
          <option>Last Month</option>
        </select>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          <option>All</option>
          <option>Flagged</option>
          <option>Refer</option>
          <option>Recovered</option>
          <option>Monitor</option>
        </select>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div className="grid grid-cols-6 gap-4 text-center font-semibold text-gray-700">
          <div>Name</div>
          <div>Status</div>
          <div>BP (mmHg)</div>
          <div>BG (mmol/L)</div>
          <div>Temp (°C)</div>
          <div>Update</div>
        </div>
        {filteredPatients.map((patient, index) => (
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
            <div className="font-medium">{patient.name}</div>
            <div className={`font-medium ${patient.status === 'Flagged' ? 'bg-yellow-200 text-yellow-800' : patient.status === 'Recovered' ? 'bg-green-200 text-green-800' : patient.status === 'Refer' ? 'bg-red-200 text-red-800' : 'bg-blue-200 text-blue-800'} rounded-full px-2 py-1`}>{patient.status}</div>
            <div className="flex justify-center">
              <span className="bg-yellow-200 text-yellow-800 rounded-full px-2 py-1">{patient.bp}</span>
            </div>
            <div className="flex justify-center">
              <span className="bg-pink-200 text-pink-800 rounded-full px-2 py-1">{patient.bg}</span>
            </div>
            <div className="flex justify-center">
              <span className="bg-blue-200 text-blue-800 rounded-full px-2 py-1">{patient.temp}</span>
            </div>
            <div>{patient.update}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <div className="mt-4 text-teal-600 cursor-pointer">More</div>
      </div>
    </div>
  );
};

export default PatientList;
