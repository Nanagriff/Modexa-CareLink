"use client";

import React, { useState, useEffect } from 'react';
import AppointmentDetails from './AppointmentDetails';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Patient {
  id: number;
  name: string;
  age: number;
  sex: string;
  organization: string;
  date: string;
  time: string;
  mode: string;
  sessionNotes: string;
}

const patients: Patient[] = [
  { id: 1, name: 'Elisha Mensa', age: 45, sex: 'Male', organization: 'G S T S', date: '08-08-24', time: '10:15', mode: 'Video', sessionNotes: 'Patient is experiencing symptoms of...' },
  { id: 2, name: 'Nana Griffiths', age: 50, sex: 'Female', organization: 'G S T S', date: '08-08-24', time: '10:15', mode: 'Video', sessionNotes: 'Follow-up on recent surgery...' },
  { id: 3, name: 'Sadick Mustaph', age: 35, sex: 'Male', organization: 'G S T S', date: '08-08-24', time: '10:15', mode: 'Video', sessionNotes: 'Discussing test results and next steps...' },
  { id: 4, name: 'Compson Elvis', age: 60, sex: 'Male', organization: 'G S T S', date: '08-08-24', time: '10:15', mode: 'Video', sessionNotes: 'Routine check-up...' },
  { id: 5, name: 'Bernard Tetteh', age: 42, sex: 'Male', organization: 'G S T S', date: '08-08-24', time: '10:15', mode: 'Video', sessionNotes: 'Patient has a history of...' },
  { id: 6, name: 'Justina Abbey', age: 29, sex: 'Female', organization: 'G S T S', date: '08-08-24', time: '10:15', mode: 'Video', sessionNotes: 'Review of medication regimen...' },
  // Add more patients as needed
];

const fetchPatients = async (type: string): Promise<Patient[]> => {
  // Replace with real API call to fetch patients based on type (incoming, appointments, closed)
  // For now, return all patients as a placeholder
  return patients;
};

const PatientList: React.FC<{ type: string }> = ({ type }) => {
  const [patientList, setPatientList] = useState<Patient[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const patientsPerPage = 4; // Number of patients per page

  useEffect(() => {
    const loadPatients = async () => {
      const data = await fetchPatients(type);
      setPatientList(data);
    };
    loadPatients();
  }, [type]);

  const handlePatientClick = (patient: Patient) => {
    setSelectedPatient(patient);
  };

  const closeModal = () => {
    setSelectedPatient(null);
  };

  const cancelAppointment = (reason: string) => {
    alert(`Appointment cancelled for reason: ${reason}`);
    // Implement actual cancel functionality here
  };

  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = patientList.slice(indexOfFirstPatient, indexOfLastPatient);

  const totalPages = Math.ceil(patientList.length / patientsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mx-auto max-w-4xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{type}</h2>
        <div className="flex space-x-4">
          <input
            type="date"
            className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 mr-2"
          />
          <input
            type="date"
            className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div className="grid grid-cols-6 gap-4 text-center font-semibold text-gray-700">
          <div>#</div>
          <div>Patient Name</div>
          <div>Organization</div>
          <div>Date</div>
          <div>Time</div>
          <div>Mode</div>
        </div>
        {currentPatients.map((patient, index) => (
          <div
            key={patient.id}
            className="grid grid-cols-6 gap-4 text-center p-4 rounded-lg bg-green-600 text-white hover:shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer"
            onClick={() => handlePatientClick(patient)}
          >
            <div className="font-medium">{indexOfFirstPatient + index + 1}</div>
            <div className="font-medium">{patient.name}</div>
            <div className="font-medium">{patient.organization}</div>
            <div className="font-medium">{patient.date}</div>
            <div className="font-medium">{patient.time}</div>
            <div className="font-medium">{patient.mode}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
          Showing {indexOfFirstPatient + 1} to {Math.min(indexOfLastPatient, patientList.length)} of {patientList.length}
        </div>
        <div className="flex space-x-2">
          <button onClick={handlePrevPage} disabled={currentPage === 1} className="px-4 py-2 bg-gray-300 rounded-l-lg hover:bg-gray-400 disabled:bg-gray-200">
            <FaChevronLeft />
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 ${currentPage === i + 1 ? 'bg-green-600 text-white' : 'bg-gray-300 hover:bg-gray-400'}`}
            >
              {i + 1}
            </button>
          ))}
          <button onClick={handleNextPage} disabled={currentPage === totalPages} className="px-4 py-2 bg-gray-300 rounded-r-lg hover:bg-gray-400 disabled:bg-gray-200">
            <FaChevronRight />
          </button>
        </div>
      </div>
      {selectedPatient && <AppointmentDetails patient={selectedPatient} onClose={closeModal} onCancel={cancelAppointment} />}
    </div>
  );
};

export default PatientList;
