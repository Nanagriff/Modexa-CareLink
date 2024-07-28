import React, { useState } from 'react';
import PatientSearch from './PatientSearch';
import PhysicianSearch from './PhysicianSearch';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Patient {
  name: string;
  age: number;
  sex: string;
  organization: string;
}

interface Physician {
  name: string;
}

interface AppointmentFormProps {
  onAddAppointment: (appointment: any) => void;
  onClose: () => void;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ onAddAppointment, onClose }) => {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [physician, setPhysician] = useState<Physician | null>(null);
  const [date, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState<string>('');
  const [mode, setMode] = useState<string>('');
  const [reason, setReason] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<string[]>([]);

  const validateForm = () => {
    const errors = [];
    if (!patient) errors.push('Patient is required.');
    if (!physician) errors.push('Physician is required.');
    if (!date) errors.push('Date is required.');
    if (!time) errors.push('Time is required.');
    if (!mode) errors.push('Mode is required.');
    if (!reason) errors.push('Reason is required.');
    setErrors(errors);
    return errors.length === 0;
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    const newAppointment = {
      id: Math.floor(Math.random() * 10000), 
      patientName: patient?.name,
      patientAge: patient?.age,
      patientSex: patient?.sex,
      patientOrganization: patient?.organization,
      physicianName: physician?.name,
      date: date.toLocaleDateString(),
      time,
      mode,
      reason,
    };
    onAddAppointment(newAppointment);
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Close"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Schedule Appointment</h2>
        {errors.length > 0 && (
          <div className="mb-4 text-red-500">
            {errors.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <PatientSearch setPatient={setPatient} />
          {patient && (
            <>
              <div className="mb-4">
                <label className="block font-semibold mb-2 text-gray-700">Date:</label>
                <DatePicker
                  selected={date}
                  onChange={(date: Date) => setDate(date)}
                  className="p-2 border border-gray-300 rounded-lg w-full focus:ring focus:ring-blue-200 focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-2 text-gray-700">Time:</label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="p-2 border border-gray-300 rounded-lg w-full focus:ring focus:ring-blue-200 focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-2 text-gray-700">Mode:</label>
                <select
                  value={mode}
                  onChange={(e) => setMode(e.target.value)}
                  className="p-2 border border-gray-300 rounded-lg w-full focus:ring focus:ring-blue-200 focus:outline-none"
                  required
                >
                  <option value="">Select mode</option>
                  <option value="video">Video</option>
                  <option value="chat">Chat</option>
                  <option value="audio">Audio</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-2 text-gray-700">Reason:</label>
                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="p-2 border border-gray-300 rounded-lg w-full focus:ring focus:ring-blue-200 focus:outline-none"
                  rows={3}
                  required
                ></textarea>
              </div>
              <PhysicianSearch setPhysician={setPhysician} />
              {physician && (
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className={`px-4 py-2 rounded text-white focus:ring focus:ring-green-200 ${isSubmitting ? 'bg-green-300' : 'bg-green-500 hover:bg-green-600'}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Scheduling...' : 'Schedule'}
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:ring focus:ring-gray-200"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
