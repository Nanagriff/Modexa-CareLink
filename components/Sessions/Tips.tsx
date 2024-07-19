import React from 'react';

const tips = [
  "Don't Kill any more patients",
  "Don't feed them the beans, we're out of ...",
  "Don't unplug the guy on life support, agai...",
];

const Tips = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Tips and Best Practices</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tips.map((tip, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Effective Communication</h3>
            <ul className="list-disc pl-4">
              {tip.split(', ').map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tips;
