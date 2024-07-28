"use client";

import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface AppointmentDetailsProps {
  patient: {
    name: string;
    age: number;
    sex: string;
    organization: string;
    date: string;
    time: string;
    mode: string;
    sessionNotes: string;
  };
  onClose: () => void;
  onCancel: (reason: string) => void;
}

const AppointmentDetails: React.FC<AppointmentDetailsProps> = ({ patient, onClose, onCancel }) => {
  const [showNotes, setShowNotes] = useState(false);
  const [showReschedule, setShowReschedule] = useState(false);
  const [rescheduleDate, setRescheduleDate] = useState<Date | null>(new Date());
  const [rescheduleTime, setRescheduleTime] = useState<string>('10:00');

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        target.closest(".appointment-details-popup") ||
        target.closest(".consultation-notes-popup") ||
        target.closest(".reschedule-popup")
      ) return;
      onClose();
      setShowNotes(false);
      setShowReschedule(false);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  const handleCancel = () => {
    const reason = prompt("Please provide the reason for cancellation:");
    if (reason) {
      onCancel(reason);
    }
  };

  const handleShowNotes = () => {
    setShowNotes(true);
  };

  const handleShowReschedule = () => {
    setShowReschedule(true);
  };

  const closeNotes = () => {
    setShowNotes(false);
  };

  const closeReschedule = () => {
    setShowReschedule(false);
  };

  const handleReschedule = () => {
    alert(`Appointment rescheduled to ${rescheduleDate?.toLocaleDateString()} at ${rescheduleTime}`);
    setShowReschedule(false);
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="appointment-details-popup bg-white p-8 rounded-lg shadow-lg w-full max-w-lg relative">
          <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-2xl font-bold mb-4">Appointment Details</h2>
          <div className="space-y-2 mb-6">
            <p><span className="font-semibold">Patient Name:</span> {patient.name}</p>
            <p><span className="font-semibold">Age:</span> {patient.age}</p>
            <p><span className="font-semibold">Sex:</span> {patient.sex}</p>
            <p><span className="font-semibold">Organization:</span> {patient.organization}</p>
            <p><span className="font-semibold">Date:</span> {patient.date}</p>
            <p><span className="font-semibold">Time:</span> {patient.time}</p>
          </div>
          <div className="flex space-x-4">
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={handleCancel}
            >
              Cancel Appointment
            </button>
            <button
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              onClick={handleShowReschedule}
            >
              Reschedule
            </button>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={handleShowNotes}
            >
              Notes
            </button>
          </div>
        </div>
      </div>

      {showNotes && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-60">
          <div className="consultation-notes-popup bg-white p-8 rounded-lg shadow-lg w-full max-w-lg relative">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={closeNotes}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-4">Consultation Notes</h2>
            <div className="space-y-2 mb-6">
              <p>{patient.sessionNotes}</p>
            </div>
            <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400" onClick={closeNotes}>
              Close
            </button>
          </div>
        </div>
      )}

      {showReschedule && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-60">
          <div className="reschedule-popup bg-white p-8 rounded-lg shadow-lg w-full max-w-lg relative">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={closeReschedule}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-4">Reschedule Appointment</h2>
            <div className="space-y-2 mb-6">
              <div className="flex flex-col">
                <label className="font-semibold mb-2">Select New Date:</label>
                <DatePicker
                  selected={rescheduleDate}
                  onChange={(date: Date) => setRescheduleDate(date)}
                  className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div className="flex flex-col mt-4">
                <label className="font-semibold mb-2">Select New Time:</label>
                <input
                  type="time"
                  value={rescheduleTime}
                  onChange={(e) => setRescheduleTime(e.target.value)}
                  className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400" onClick={closeReschedule}>
                Close
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" onClick={handleReschedule}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppointmentDetails;
