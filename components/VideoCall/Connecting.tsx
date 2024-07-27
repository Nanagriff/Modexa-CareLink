import React, { useEffect } from 'react';

interface ConnectingProps {
  onConnected: () => void;
}

const Connecting: React.FC<ConnectingProps> = ({ onConnected }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Connecting: Calling onConnected callback.");
      onConnected();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onConnected]);

  return (
    <div className="connecting">
      <div>
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Connecting...</span>
        </div>
        <p className="mt-3">Connecting Patient...</p>
      </div>
    </div>
  );
};

export default Connecting;
