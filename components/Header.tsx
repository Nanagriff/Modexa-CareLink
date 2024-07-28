import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md w-full">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Appointments"
            className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      <div className="flex items-center space-x-4 ml-auto">
        <button className="text-green-600 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
          Speak to Tobi
        </button>
        <button className="text-white-600 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
          mmm
        </button>
      </div>
    </div>
  );
};

export default Header;
