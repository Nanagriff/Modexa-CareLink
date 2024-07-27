// components/Nurse/SearchPatientPopup.tsx
import React, { useState } from 'react';
import SearchBar from '@/components/EHR/SearchBar';
import SearchResults from '@/components/EHR/SearchResults';
import { Result } from '@/types/types';
import { usePatient } from '@/components/Nurse/PatientContext';

interface SearchPatientPopupProps {
  onClose: () => void;
  setCurrentView: (view: 'sessions' | 'patientDetails' | 'medicalSessionDetails') => void;
}

const SearchPatientPopup: React.FC<SearchPatientPopupProps> = ({ onClose, setCurrentView }) => {
  const [query, setQuery] = useState('');
  const { selectPatient } = usePatient();
  const [results, setResults] = useState<Result[]>([]);

  const handleSearch = (query: string) => {
    setQuery(query);

    // Dummy data for demonstration purposes
    const dummyResults: Result[] = [
      { id: 1, name: 'Emefa Duah', studentID: 'STJ781666', indexNo: 'UE48881888', class: 'Year 3', age: 23, sex: 'Female', dob: '10-09-2000', bloodGroup: 'O+', allergies: 'N/A', status: 'Active', contact: '+233 54 227 2456', email: 'emefa@email.com', emergencyContactName: 'Mary Mensa', emergencyContactRelation: 'Mother', emergencyContactNumber: '+233 54 227 2456', emergencyContactEmail: 'mary@email.com', vitals: [], tests: [], prescriptions: [], consultationNotes: [] },
      { id: 2, name: 'James Aboon', studentID: 'PC7816457', indexNo: 'UE48881854', class: 'Year 1', age: 20, sex: 'Male', dob: '12-11-2001', bloodGroup: 'A+', allergies: 'Nuts', status: 'Active', contact: '+233 24 567 2345', email: 'james@email.com', emergencyContactName: 'John Aboon', emergencyContactRelation: 'Father', emergencyContactNumber: '+233 24 567 2345', emergencyContactEmail: 'john@email.com', vitals: [], tests: [], prescriptions: [], consultationNotes: [] }
    ];

    const filteredResults = dummyResults.filter(
      (result) =>
        result.name.toLowerCase().includes(query.toLowerCase()) ||
        result.studentID.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };

  const handlePatientClick = (patient: Result) => {
    selectPatient(patient);
    setCurrentView('patientDetails');
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl relative">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-4">Search Patient</h2>
        <SearchBar onSearch={handleSearch} />
        <SearchResults query={query} results={results} onPatientClick={handlePatientClick} />
      </div>
    </div>
  );
};

export default SearchPatientPopup;
