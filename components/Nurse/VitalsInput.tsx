import React from 'react';

interface VitalsInputProps {
  label: string;
  name: string;
  value: string;
  unit?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const VitalsInput: React.FC<VitalsInputProps> = ({ label, name, value, unit, placeholder, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="mt-1 flex space-x-2 items-center">
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
        {unit && <span className="ml-2">{unit}</span>}
      </div>
    </div>
  );
};

export default VitalsInput;
