import React from 'react';

interface PracticeInfoProps {
  onComplete?: () => void; // Optional onComplete function
}

export default function PracticeInfo({ onComplete }: PracticeInfoProps) {
  const handleCompletion = () => {
    if (onComplete) {
      onComplete(); // Call onComplete when this component is completed
    }
  };

  return (
    <div>
      <h1>Practice Information</h1>
      {/* Add your form or content here */}
      <button onClick={handleCompletion}>Complete Section</button>
    </div>
  );
}
