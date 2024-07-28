// AddVitalsPopup.tsx
import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { VitalsData } from '@/types/types';

interface AddVitalsPopupProps {
  onClose: () => void;
  onSave: (vitals: VitalsData) => void;
}

const AddVitalsPopup: React.FC<AddVitalsPopupProps> = ({ onClose, onSave }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [vitals, setVitals] = useState<VitalsData>({
    bloodPressureSystolic: '',
    bloodPressureDiastolic: '',
    temperature: '',
    temperatureDevice: 'MX3010 Sensor',
    weight: '',
    weightUnit: 'kg',
    spo2: '',
    spo2Device: 'MX3010 Sensor',
    bloodGlucose: '',
    pulse: ''
  });

  useEffect(() => {
    const now = new Date();
    const currentDate = now.toISOString().split('T')[0];
    const currentTime = now.toTimeString().split(' ')[0].substring(0, 5);
    setDate(currentDate);
    setTime(currentTime);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setVitals(prevVitals => ({
      ...prevVitals,
      [name]: value
    }));
  };

  const handleSave = () => {
    // Validation 
    const isValid = Object.values(vitals).every(val => val !== '');
    if (!isValid) {
      alert('Please fill all fields before saving.');
      return;
    }

    onSave(vitals);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-auto animate-fadeIn">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl relative transform transition-transform duration-300 ease-in-out scale-95">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
          <FaTimes className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Add Vitals (Emefa Duah)</h2>
        <div className="flex justify-between mb-4">
          <div className="flex-1 mr-2">
            <label className="block text-sm font-medium text-gray-700">Capture Date</label>
            <input
              type="date"
              value={date}
              className="input mt-1 w-full"
              readOnly
            />
          </div>
          <div className="flex-1 ml-2">
            <label className="block text-sm font-medium text-gray-700">Capture Time</label>
            <input
              type="time"
              value={time}
              className="input mt-1 w-full"
              readOnly
            />
          </div>
        </div>
        <div className="bg-white p-4 rounded-md mb-4">
          <h3 className="text-lg font-medium mb-2">Take Vitals</h3>
          <div className="grid grid-cols-1 gap-y-4">
            <div className="grid grid-cols-3 gap-2 items-center">
              <label className="text-sm font-medium text-gray-700">Blood Pressure</label>
              <div className="flex items-center col-span-2">
                <input
                  type="text"
                  name="bloodPressureSystolic"
                  placeholder="Systolic"
                  value={vitals.bloodPressureSystolic}
                  onChange={handleChange}
                  className="input w-1/2"
                />
                <span className="mx-2">/</span>
                <input
                  type="text"
                  name="bloodPressureDiastolic"
                  placeholder="Diastolic"
                  value={vitals.bloodPressureDiastolic}
                  onChange={handleChange}
                  className="input w-1/2"
                />
                <span className="ml-2">mmHg</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 items-center">
              <label className="text-sm font-medium text-gray-700">Temperature</label>
              <div className="flex items-center col-span-2">
                <input
                  type="text"
                  name="temperature"
                  placeholder="Temperature"
                  value={vitals.temperature}
                  onChange={handleChange}
                  className="input w-1/2"
                />
                <select
                  name="temperatureDevice"
                  value={vitals.temperatureDevice}
                  onChange={handleChange}
                  className="input w-1/2"
                >
                  <option value="MX3010 Sensor">MX3010 Sensor</option>
                  <option value="Thermometer">Thermometer</option>
                  <option value="Infrared">Infrared</option>
                </select>
                <span className="ml-2">°C</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 items-center">
              <label className="text-sm font-medium text-gray-700">Weight</label>
              <div className="flex items-center col-span-2">
                <input
                  type="text"
                  name="weight"
                  placeholder="Weight"
                  value={vitals.weight}
                  onChange={handleChange}
                  className="input"
                />
                <span className="ml-2">kg</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 items-center">
              <label className="text-sm font-medium text-gray-700">SPO2</label>
              <div className="flex items-center col-span-2">
                <input
                  type="text"
                  name="spo2"
                  placeholder="SPO2"
                  value={vitals.spo2}
                  onChange={handleChange}
                  className="input w-1/2"
                />
                <select
                  name="spo2Device"
                  value={vitals.spo2Device}
                  onChange={handleChange}
                  className="input w-1/2"
                >
                  <option value="MX3010 Sensor">MX3010 Sensor</option>
                  <option value="Pulse Oximeter">Pulse Oximeter</option>
                </select>
                <span className="ml-2">%</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 items-center">
              <label className="text-sm font-medium text-gray-700">Blood Glucose</label>
              <div className="flex items-center col-span-2">
                <input
                  type="text"
                  name="bloodGlucose"
                  placeholder="Blood Glucose"
                  value={vitals.bloodGlucose}
                  onChange={handleChange}
                  className="input"
                />
                <span className="ml-2">mmol/L</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 items-center">
              <label className="text-sm font-medium text-gray-700">Pulse</label>
              <div className="flex items-center col-span-2">
                <input
                  type="text"
                  name="pulse"
                  placeholder="Pulse"
                  value={vitals.pulse}
                  onChange={handleChange}
                  className="input"
                />
                <span className="ml-2">per min</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="bg-blue text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddVitalsPopup;
