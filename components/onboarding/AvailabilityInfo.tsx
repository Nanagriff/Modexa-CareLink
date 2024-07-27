import React from 'react';

// Define the props type for AvailabilityInfo
type AvailabilityInfoProps = {
  onComplete: () => void;
};

const AvailabilityInfo: React.FC<AvailabilityInfoProps> = ({ onComplete }) => {
  const handleComplete = () => {
    // Perform any actions needed, then call onComplete
    onComplete();
  };

  return (
    <div>
      <h2>Availability Information Form</h2>
      {/* Add form elements and other content as needed */}
      <button onClick={handleComplete}>Complete Step</button>
    </div>
  );
};

export default AvailabilityInfo;
