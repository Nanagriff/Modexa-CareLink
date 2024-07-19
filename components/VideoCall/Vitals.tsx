import React from 'react';

interface Vital {
  name: string;
  value: string;
}

interface VitalsProps {
  vitals: Vital[];
}

const Vitals: React.FC<VitalsProps> = ({ vitals }) => {
  const determineArrow = (name: string, value: string) => {
    const numericValue = parseFloat(value);

    switch (name) {
      case 'Blood Pressure':
        return numericValue > 120 ? 'high' : numericValue < 80 ? 'low' : 'normal';
      case 'Pulse(BPM)':
        return numericValue > 100 ? 'high' : numericValue < 60 ? 'low' : 'normal';
      case 'Temperature(°C)':
        return numericValue > 37.5 ? 'high' : numericValue < 36.5 ? 'low' : 'normal';
      case 'Resp. Rate':
        return numericValue > 20 ? 'high' : numericValue < 12 ? 'low' : 'normal';
      case 'SPO2':
        return numericValue < 95 ? 'low' : 'normal';
      default:
        return 'normal';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-bold mb-4">Vitals</h2>
      <div className="grid grid-cols-1 gap-4">
        <div className="grid grid-cols-2 gap-8 text-center font-semibold text-gray-700">
          <div>Vital</div>
          <div>Value</div>
        </div>
        {vitals.map((vital, index) => {
          const arrow = determineArrow(vital.name, vital.value);
          return (
            <div key={index} className="vitalCard">
              <div className="vitalName">{vital.name}</div>
              <div className="vitalValue">
                {vital.value}
                {arrow === 'high' && <span className="arrow arrowUp">↑</span>}
                {arrow === 'low' && <span className="arrow arrowDown">↓</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Vitals;
