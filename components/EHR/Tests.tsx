import React, { useState } from 'react';
import { Test } from '@/types/types';

interface TestsProps {
  tests: Test[][];
}

const Tests: React.FC<TestsProps> = ({ tests }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const testsPerPage = 1;

  const handleNextPage = () => {
    if (currentPage < tests.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Tests</h2>
      {tests.slice(currentPage, currentPage + testsPerPage).map((testSet, index) => (
        <div key={index} className="mb-6">
          <table className="min-w-full divide-y divide-gray-200 mb-4">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Test</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Results</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Added By</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {testSet.map((test, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{test.test}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{test.results}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{test.addedBy}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{test.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{test.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
      <div className="border-t-2 border-gray-200 mt-4 pt-4 flex justify-between items-center">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
          className={`px-4 py-2 rounded-lg ${currentPage === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-teal-600 text-white hover:bg-teal-700'}`}
        >
          Previous
        </button>
        <div className="text-sm text-gray-500">
          Showing {currentPage + 1} of {tests.length} entries
        </div>
        <button
          onClick={handleNextPage}
          disabled={currentPage === tests.length - 1}
          className={`px-4 py-2 rounded-lg ${currentPage === tests.length - 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-teal-600 text-white hover:bg-teal-700'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Tests;
