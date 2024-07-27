import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaSearch, FaUserMd } from 'react-icons/fa';

interface ConsultationProcessProps {
  setStage: (stage: 'DETAILS' | 'SUCCESS' | 'SEARCHING' | 'CONNECTING' | 'VIDEO_CALL') => void;
}

const StageMessage: React.FC<{ icon: JSX.Element, title: string, message: string, iconClass?: string }> = ({ icon, title, message, iconClass }) => (
  <div className="flex flex-col items-center justify-center animate-fadeIn text-center">
    <div className={`mb-4 ${iconClass}`}>
      {icon}
    </div>
    <h1 className="text-2xl font-bold">{title}</h1>
    <p className="mt-4">{message}</p>
  </div>
);

const ConsultationProcess: React.FC<ConsultationProcessProps> = ({ setStage }) => {
  const [stage, setLocalStage] = useState<'SUCCESS' | 'SEARCHING' | 'CONNECTING' | 'VIDEO_CALL'>('SUCCESS');

  useEffect(() => {
    if (stage === 'SUCCESS') {
      setTimeout(() => setLocalStage('SEARCHING'), 3000);
    } else if (stage === 'SEARCHING') {
      setTimeout(() => setLocalStage('CONNECTING'), 5000);
    } else if (stage === 'CONNECTING') {
      setTimeout(() => {
        setLocalStage('VIDEO_CALL');
        setStage('VIDEO_CALL');
      }, 3000);
    }
  }, [stage, setStage]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {stage === 'SUCCESS' && (
        <StageMessage 
          icon={<FaCheckCircle className="h-16 w-16 text-green-500" />} 
          title="SUCCESS" 
          message="You have successfully requested a consultation session. Please hold on."
        />
      )}
      {stage === 'SEARCHING' && (
        <StageMessage 
          icon={<FaSearch className="h-16 w-16 text-blue-500 animate-spin" />} 
          title="SEARCHING" 
          message="Searching for an available physician..." 
        />
      )}
      {stage === 'CONNECTING' && (
        <StageMessage 
          icon={<FaUserMd className="h-16 w-16 text-yellow-500" />} 
          title="CONNECTING" 
          message="Found an available physician, Connecting..."
        />
      )}
    </div>
  );
};

export default ConsultationProcess;
