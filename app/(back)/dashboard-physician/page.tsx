"use client";
import { Dashboard } from '@/components/Dasboard/Dashboard'
import { PatientProvider } from '@/components/Nurse/PatientContext';
import React from 'react'

export default function page() {
  return (
    <PatientProvider>
    <Dashboard />
  </PatientProvider>
);
}
