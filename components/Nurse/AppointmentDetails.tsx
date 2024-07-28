"use client";

import React from 'react';
import { FaTimes } from 'react-icons/fa';

interface AppointmentDetailsProps {
  appointment: {
    id: number;
    patientName: string;
    patientAge: number;
    patientSex: string;
    patientOrganization: string;
    physicianName: string;
    date: string;
    time: string;
    mode: string;
  };
  onClose: () => void;
  onRemove: (id: number) => void;
}

const AppointmentDetails: React.FC<AppointmentDetailsProps> = ({ appointment, onClose, onRemove }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg relative">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
          <FaTimes className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-bold mb-4">Appointment Details</h2>
        <div className="space-y-2 mb-6">
          <p><span className="font-semibold">Patient Name:</span> {appointment.patientName}</p>
          <p><span className="font-semibold">Age:</span> {appointment.patientAge}</p>
          <p><span className="font-semibold">Sex:</span> {appointment.patientSex}</p>
          <p><span className="font-semibold">Organization:</span> {appointment.patientOrganization}</p>
          <p><span className="font-semibold">Physician:</span> {appointment.physicianName}</p>
          <p><span className="font-semibold">Date:</span> {appointment.date}</p>
          <p><span className="font-semibold">Time:</span> {appointment.time}</p>
          <p><span className="font-semibold">Mode:</span> {appointment.mode}</p>
        </div>
        <div className="flex space-x-4">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() => onRemove(appointment.id)}
          >
            Cancel Appointment
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetails;
