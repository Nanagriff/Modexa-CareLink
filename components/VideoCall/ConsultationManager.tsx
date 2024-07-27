"use client";

import React, { useState } from 'react';
import IncomingRequests from '@/components/Sessions/IncomingRequest';
import Connecting from './Connecting';
import Consultation from './Consultation';


const ConsultationManager: React.FC = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConsulting, setIsConsulting] = useState(false);

  const handleAcceptCall = () => {
    console.log("Call accepted, transitioning to connecting state.");
    setIsConnecting(true);
  };

  const handleDeclineCall = () => {
    console.log("Call declined.");
    // decline call logic here
  };

  const handleConnectionEstablished = () => {
    console.log("Connection established, transitioning to consulting state.");
    setIsConnecting(false);
    setIsConsulting(true);
  };

  if (isConsulting) {
    console.log("Rendering Consultation component.");
    return <Consultation handleConnectionEstablished={handleConnectionEstablished} />;
  }

  if (isConnecting) {
    console.log("Rendering Connecting component.");
    return <Connecting onConnected={handleConnectionEstablished} />;
  }

  console.log("Rendering IncomingRequests component.");
  return <IncomingRequests onAccept={handleAcceptCall} onDecline={handleDeclineCall} />;
};

export default ConsultationManager;
