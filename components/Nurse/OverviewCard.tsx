"use client";

import React from 'react';
import { FaUserGraduate, FaPills, FaProcedures, FaFileMedical } from 'react-icons/fa';
import Tooltip from './Tooltip'

interface Stats {
  students: number;
  drugsDispensed: number;
  rpm: number;
  referred: number;
}

const Overview = ({ stats }: { stats: Stats }) => {
  const { students, drugsDispensed, rpm, referred } = stats;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg h-full">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Overview</h2>
      <div className="grid grid-cols-2 gap-4">
        <Tooltip text="Total number of students">
          <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="bg-blue-100 p-3 rounded-full">
              <FaUserGraduate className="text-blue-500 text-2xl" aria-label="Students" />
            </div>
            <div className="ml-4">
              <p className="text-lg font-bold text-gray-700">{students}</p>
              <p className="text-sm text-gray-500">Students</p>
            </div>
          </div>
        </Tooltip>
        <Tooltip text="Total number of drugs dispensed">
          <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="bg-green-100 p-3 rounded-full">
              <FaPills className="text-green-500 text-2xl" aria-label="Drugs Dispensed" />
            </div>
            <div className="ml-4">
              <p className="text-lg font-bold text-gray-700">{drugsDispensed}</p>
              <p className="text-sm text-gray-500">Drugs Dispensed</p>
            </div>
          </div>
        </Tooltip>
        <Tooltip text="Number of remote patient monitoring sessions">
          <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="bg-yellow-100 p-3 rounded-full">
              <FaProcedures className="text-yellow-500 text-2xl" aria-label="Remote Patient Monitoring" />
            </div>
            <div className="ml-4">
              <p className="text-lg font-bold text-gray-700">{rpm}</p>
              <p className="text-sm text-gray-500">R.P.M</p>
            </div>
          </div>
        </Tooltip>
        <Tooltip text="Number of referrals made">
          <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="bg-red-100 p-3 rounded-full">
              <FaFileMedical className="text-red-500 text-2xl" aria-label="Referred" />
            </div>
            <div className="ml-4">
              <p className="text-lg font-bold text-gray-700">{referred}</p>
              <p className="text-sm text-gray-500">Referred</p>
            </div>
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default Overview;
