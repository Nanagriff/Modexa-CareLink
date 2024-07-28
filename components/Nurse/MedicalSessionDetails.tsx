
import React, { useState } from 'react';
import { FaClipboardList, FaVial, FaTimes } from 'react-icons/fa';
import AddVitalsPopup from './AddVitalsPopup';
import AddTestsPopup from './AddTestsPopup';
import { VitalsData, Test } from '@/types/interfaces';

interface MedicalSessionDetailsProps {
  onSave: (data: { vitals: VitalsData; tests: Test[]; notes: string; attachment: File | null }) => void;
  setStage: (stage: 'SUCCESS' | 'SEARCHING' | 'CONNECTING' | 'VIDEO_CALL') => void;
}

const MedicalSessionDetails: React.FC<MedicalSessionDetailsProps> = ({ onSave, setStage }) => {
  const [isAddVitalsPopupOpen, setIsAddVitalsPopupOpen] = useState(false);
  const [isAddTestsPopupOpen, setIsAddTestsPopupOpen] = useState(false);
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
  const [tests, setTests] = useState<Test[]>([]);
  const [notes, setNotes] = useState('');
  const [attachment, setAttachment] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachment(e.target.files[0]);
    }
  };

  const handleSave = () => {
    if (!notes.trim() && !attachment && vitals.bloodPressureSystolic === '' && vitals.bloodPressureDiastolic === '' && vitals.temperature === '' && vitals.weight === '' && vitals.spo2 === '' && vitals.bloodGlucose === '' && vitals.pulse === '' && tests.length === 0) {
      alert("Please fill in some data before saving.");
      return;
    }
    onSave({ vitals, tests, notes, attachment });
  };

  const handleProceed = () => {
    setStage('SUCCESS'); //  stage set to 'SUCCESS' when proceeding
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="flex justify-between mb-4">
        <button
          className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow"
          onClick={() => setIsAddVitalsPopupOpen(true)}
        >
          <FaClipboardList className="mr-2" />
          Add Vitals
        </button>
        <button
          className="flex items-center bg-blue hover:bg-blue text-white px-4 py-2 rounded shadow"
          onClick={() => setIsAddTestsPopupOpen(true)}
        >
          <FaVial className="mr-2" />
          Add Tests
        </button>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full border rounded p-2"
          rows={4}
          placeholder="Enter notes here..."
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Add Attachment</label>
        <input type="file" onChange={handleFileChange} className="w-full bg-white border rounded p-2" />
      </div>
      <div className="flex justify-between">
        <button
          className="bg-yellow-500 hover:bg-yellow-800 text-white px-4 py-2 rounded shadow"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow"
          onClick={handleProceed}
        >
          Proceed
        </button>
      </div>
      {isAddVitalsPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl relative animate-fadeIn">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={() => setIsAddVitalsPopupOpen(false)}>
              <FaTimes className="h-6 w-6" />
            </button>
            <AddVitalsPopup
              onClose={() => setIsAddVitalsPopupOpen(false)}
              onSave={(vitals) => {
                setVitals(vitals);
                setIsAddVitalsPopupOpen(false);
              }}
            />
          </div>
        </div>
      )}
      {isAddTestsPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl relative animate-fadeIn">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={() => setIsAddTestsPopupOpen(false)}>
              <FaTimes className="h-6 w-6" />
            </button>
            <AddTestsPopup
              tests={tests}
              onSave={(newTests) => {
                setTests(newTests);
                setIsAddTestsPopupOpen(false);
              }}
              onClose={() => setIsAddTestsPopupOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicalSessionDetails;
