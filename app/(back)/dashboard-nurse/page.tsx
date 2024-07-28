"use client";
import React from 'react';
import Dashboard from '@/components/Nurse/Dashboard';
import { PatientProvider } from '@/components/Nurse/PatientContext';

export default function page() {
  return (
    <div>
    <PatientProvider>
      <Dashboard />
    </PatientProvider>
    </div>
  )
}
