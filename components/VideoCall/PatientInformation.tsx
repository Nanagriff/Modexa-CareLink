import React from 'react';

interface PatientInformationProps {
  name: string;
  id: string;
  age: number;
  dob: string;
  sex: string;
  organization: string;
}

const PatientInformation: React.FC<PatientInformationProps> = ({ name, id, age, dob, sex, organization }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-4">Patient Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700">Name:</label>
          <span>{name}</span>
        </div>
        <div>
          <label className="block text-gray-700">ID:</label>
          <span>{id}</span>
        </div>
        <div>
          <label className="block text-gray-700">Age:</label>
          <span>{age}</span>
        </div>
        <div>
          <label className="block text-gray-700">DOB:</label>
          <span>{dob}</span>
        </div>
        <div>
          <label className="block text-gray-700">Sex:</label>
          <span>{sex}</span>
        </div>
        <div>
          <label className="block text-gray-700">Organization:</label>
          <span>{organization}</span>
        </div>
      </div>
    </div>
  );
};

export default PatientInformation;
