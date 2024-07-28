import React, { useState } from 'react';

const SeveritySlider: React.FC = () => {
  const [severity, setSeverity] = useState(1);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeverity(Number(event.target.value));
  };

  const getColor = (value: number) => {
    const red = Math.min(255, (value / 10) * 255);
    const green = Math.min(255, ((10 - value) / 10) * 255);
    return `rgb(${red}, ${green}, 0)`;
  };

  return (
    <div className="flex flex-col items-center mb-4">
      <label htmlFor="severity" className="mb-2 font-medium">
        Severity
      </label>
      <input
        id="severity"
        type="range"
        min="1"
        max="10"
        value={severity}
        onChange={handleChange}
        style={{ background: getColor(severity) }}
        className="w-full"
      />
      <div className="mt-2 text-xl" style={{ color: getColor(severity) }}>
        {severity}
      </div>
    </div>
  );
};

export default SeveritySlider;
