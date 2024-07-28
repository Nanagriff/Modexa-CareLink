import React, { createContext, useContext, useState, ReactNode } from 'react';


interface Patient {
  id: number;
  name: string;
  studentID: string;
  indexNo: string;
  class: string;
  age: number;
  sex: string;
  dob: string;
  bloodGroup: string;
  allergies: string;
  status: string;
  contact: string;
  email: string;
  emergencyContactName: string;
  emergencyContactRelation: string;
  emergencyContactNumber: string;
  emergencyContactEmail: string;
  vitals: any[];
  tests: any[];
  prescriptions: any[];
  consultationNotes: string[];
}



interface PatientContextProps {
  selectedPatient: Patient | null;
  selectPatient: (patient: Patient | null) => void;
}

const PatientContext = createContext<PatientContextProps | undefined>(undefined);

export const PatientProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const selectPatient = (patient: Patient | null) => {
    setSelectedPatient(patient);
  };

  return (
    <PatientContext.Provider value={{ selectedPatient, selectPatient }}>
      {children}
    </PatientContext.Provider>
  );
};

export const usePatient = () => {
  const context = useContext(PatientContext);
  if (!context) {
    throw new Error('usePatient must be used within a PatientProvider');
  }
  return context;
};
