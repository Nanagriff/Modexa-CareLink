"use client";

import React, { useState } from 'react';
import ClosedSessionsList from './ClosedSessionsList';
import { ClosedSession } from '@/types/types';

const closedSessions: ClosedSession[] = [
  { id: 1, name: 'Elisha Mensa', age: 45, sex: 'Male', organization: 'G S T S', date: '08-08-24', time: '10:15', duration: '30 mins', doctor: 'Dr. Samuel Griff', sessionType: 'Consultation', symptoms: 'Fever, cough', consultationNotes: 'Patient showed signs of ...', diagnosis: 'Common cold', prescription: 'Paracetamol, Rest', followUpInstructions: 'Follow up in 2 weeks.', attachments: [{ name: 'Blood Test Results.pdf', url: '/path/to/file' }, { name: 'Plan.pdf', url: '/path/to/file' }], additionalNotes: 'Patient was advised to check in if experiencing any adverse side effects from medication.' },
  { id: 2, name: 'Nana Griffiths', age: 50, sex: 'Female', organization: 'G S T S', date: '08-08-24', time: '10:15', duration: '45 mins', doctor: 'Dr. Samuel Griff', sessionType: 'Follow up', symptoms: 'Headache', consultationNotes: 'Patient showed signs of ...', diagnosis: 'Migraine', prescription: 'Ibuprofen, Rest', followUpInstructions: 'Follow up in 1 month.', attachments: [{ name: 'Blood Test Results.pdf', url: '/path/to/file' }, { name: 'Plan.pdf', url: '/path/to/file' }], additionalNotes: 'Patient was advised to check in if experiencing any adverse side effects from medication.' },
  
];

const ClosedSessions = () => {
  return (
    <div>
      <ClosedSessionsList sessions={closedSessions} />
    </div>
  );
};

export default ClosedSessions;
