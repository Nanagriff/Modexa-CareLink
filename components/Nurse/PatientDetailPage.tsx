import React from 'react';
import { usePatient } from '@/components/Nurse/PatientContext';
import PatientDetails from './PatientDetails';
import { Result } from '@/types/types';

interface PatientDetailsPageProps {
  onProceed: () => void;
  onBack: () => void;
}

const PatientDetailsPage: React.FC<PatientDetailsPageProps> = ({ onProceed, onBack }) => {
  const { selectedPatient, selectPatient } = usePatient();

  if (!selectedPatient) {
    return <div>No patient selected</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-between items-center bg-gray-50 p-4">
        <button
          className="text-gray-500 hover:text-gray-700 flex items-center"
          onClick={() => {
            selectPatient(null); // Clear selected patient
            onBack(); // Trigger the back action
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          Back to Search
        </button>
        <button 
          className="bg-blue text-white px-4 py-2 rounded-lg"
          onClick={onProceed}
        >
          Proceed
        </button>
      </div>
      <PatientDetails patient={selectedPatient as Result} onBack={() => selectPatient(null)} />
    </div>
  );
};

export default PatientDetailsPage;
