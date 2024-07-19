import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import RightSidebar from '@/components/RightSidebar';
import PatientInfo from '@/components/EHR/PatientDetails';
import TabNavigation from '@/components/EHR/TabNavigation';
import PatientDetails from '@/components/EHR/PatientDetails';

const PatientDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleCollapseChange = (collapsed: boolean) => {
    setIsSidebarCollapsed(collapsed);
  };

  // Dummy patient data for demonstration
  const patientData = {
    id: 1,
    name: 'Emefa Duah',
    studentID: 'STJ781666',
    indexNo: 'UE48881888',
    class: 'Year 3',
    age: 23,
    sex: 'Female',
    dob: '10-09-2000',
    bloodGroup: 'O+',
    allergies: 'N/A',
    status: 'Active',
    contact: '+233 54 227 2456',
    email: 'emefa@email.com',
    emergencyContactName: 'Mary Duah',
    emergencyContactRelation: 'Mother',
    emergencyContactNumber: '+233 54 227 2456',
    emergencyContactEmail: 'emefa@email.com',
  };

  return (
    <div className="flex h-screen">
      <Sidebar onCollapseChange={handleCollapseChange} />
      <div className={`flex-1 flex flex-col bg-gray-100 overflow-hidden transition-all duration-300 ${isSidebarCollapsed ? 'ml-16' : 'ml-48'}`}>
        <Header />
        <div className="flex-1 flex p-6 space-x-6 overflow-auto">
          <div className="flex-1 max-w-full lg:max-w-3xl xl:max-w-4xl space-y-6">
            <PatientDetails patient={patientData} />
            <TabNavigation />
          </div>
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default PatientDetailPage;
