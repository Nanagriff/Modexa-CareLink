import React, { useState } from 'react';

interface Vital {
  vital: string;
  parameter: string;
  addedBy: string;
  time: string;
  date: string;
}

interface VitalsProps {
  vitals: Vital[][];
}

const Vitals: React.FC<VitalsProps> = ({ vitals }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 1;
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = vitals.slice(indexOfFirstEntry, indexOfLastEntry);

  const totalPages = Math.ceil(vitals.length / entriesPerPage);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-teal-700">Vitals</h2>
      {currentEntries.map((entrySet, entryIndex) => (
        <React.Fragment key={entryIndex}>
          <table className="min-w-full divide-y divide-gray-200 mb-4">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vital</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parameter</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Added By</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {entrySet.map((entry, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.vital}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.parameter}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.addedBy}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {entryIndex < currentEntries.length - 1 && (
            <hr className="border-t-2 border-gray-300 my-4" />
          )}
        </React.Fragment>
      ))}
      <hr className="border-t-2 border-gray-300 my-4" />
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-700">
          Showing {indexOfFirstEntry + 1} to {indexOfLastEntry} of {vitals.length} entries
        </span>
        <div className="flex space-x-1">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border ${currentPage === i + 1 ? 'border-gray-300 bg-gray-200 text-gray-700' : 'border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'}`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vitals;
