import React from 'react';

// Define the props type for AdditionalInfo
type AdditionalInfoProps = {
  onComplete: () => void;
};

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({ onComplete }) => {
  const handleClick = () => {
    // Perform any actions here, then call onComplete
    onComplete();
  };

  return (
    <div>
      <p>Additional Information</p>
      <button onClick={handleClick}>Complete Step</button>
    </div>
  );
};

export default AdditionalInfo;
