import React from 'react';

interface Test {
  name: string;
  result: string;
}

interface TestsProps {
  tests: Test[];
}

const Tests: React.FC<TestsProps> = ({ tests }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-bold mb-4">Tests</h2>
      <div className="grid grid-cols-2 gap-8 text-center font-semibold text-gray-700">
        <div>Test</div>
        <div>Result</div>
      </div>
      {tests.map((test, index) => (
        <div
          key={index}
          className="grid grid-cols-2 gap-8 text-center p-4 rounded-lg hover:shadow-lg transition-transform duration-200 ease-in-out"
          style={{
            background: index % 2 === 0 ? '#f9f9f9' : '#fff'
          }}
        >
          <div className="font-medium">{test.name}</div>
          <div className="font-medium">{test.result}</div>
        </div>
      ))}
    </div>
  );
};

export default Tests;
