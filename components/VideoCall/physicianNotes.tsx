"use client";

import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import SeveritySlider from './SeveritySlider';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Define the schema for form validation using yup
const schema = yup.object().shape({
  reasonForVisit: yup.string().required('Reason for visit is required'),
  symptomDescription: yup.string().required('Symptom description is required'),
  onset: yup.date().required('Onset date is required').nullable(),
  duration: yup.string().required('Duration is required'),
  severity: yup.number().required('Severity is required').min(1).max(10),
  additionalNotes: yup.string(),
  diagnosis: yup.string().required('Diagnosis is required'),
  treatmentPlan: yup.string().required('Treatment plan is required'),
});

// Define the type for form fields
interface FormFields {
  reasonForVisit: string;
  symptomDescription: string;
  onset: Date | null;
  duration: string;
  severity: number;
  additionalNotes?: string;
  diagnosis: string;
  treatmentPlan: string;
}

// Define the type for PhysicianNotes props
interface PhysicianNotesProps {
  notes: FormFields;
  onSaveNotes: (notes: FormFields) => void;
}

const PhysicianNotes: React.FC<PhysicianNotesProps> = ({ notes, onSaveNotes }) => {
  const { register, handleSubmit, control, reset, formState: { errors } } = useForm<FormFields>({
    resolver: yupResolver(schema),
    defaultValues: notes
  });

  useEffect(() => {
    reset(notes);
  }, [notes, reset]);

  const onSubmit = (data: FormFields) => {
    onSaveNotes(data);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">General Check-Up</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Chief Complaint</h3>
          <label className="block text-sm font-medium text-gray-600">Reason for Visit</label>
          <textarea {...register('reasonForVisit')} className="mt-1 block w-full p-3 border border-gray-600 rounded-md" placeholder="Enter reason for visit" />
          {errors.reasonForVisit && <p className="text-red-500 text-sm mt-2">{errors.reasonForVisit?.message}</p>}
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">History of Presenting Illness</h3>
          <label className="block text-sm font-medium text-gray-600">Symptom Description</label>
          <textarea {...register('symptomDescription')} className="mt-1 block w-full p-3 border border-gray-600 rounded-md" placeholder="Enter symptom description" />
          {errors.symptomDescription && <p className="text-red-500 text-sm mt-2">{errors.symptomDescription?.message}</p>}

          <label className="block text-sm font-medium text-gray-600 mt-4">Onset</label>
          <Controller
            control={control}
            name="onset"
            render={({ field }) => (
              <DatePicker
                className="mt-1 block w-full p-3 border border-gray-600 rounded-md"
                placeholderText="Select date"
                selected={field.value}
                onChange={field.onChange}
              />
            )}
          />
          {errors.onset && <p className="text-red-500 text-sm mt-2">{errors.onset?.message}</p>}

          <label className="block text-sm font-medium text-gray-600 mt-4">Duration</label>
          <input {...register('duration')} type="text" className="mt-1 block w-full p-3 border border-gray-600 rounded-md" placeholder="Enter duration" />
          {errors.duration && <p className="text-red-500 text-sm mt-2">{errors.duration?.message}</p>}

          <label className="block text-sm font-medium text-gray-600 mt-4">Severity</label>
          <div className="mb-4">
            <SeveritySlider />
          </div>

          {errors.severity && <p className="text-red-500 text-sm mt-2">{errors.severity?.message}</p>}

          <label className="block text-sm font-medium text-gray-600 mt-4">Additional Notes</label>
          <textarea {...register('additionalNotes')} className="mt-1 block w-full p-3 border border-gray-600 rounded-md" placeholder="Enter additional notes" />
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Assessment and Plan</h3>
          <label className="block text-sm font-medium text-gray-600">Diagnosis</label>
          <textarea {...register('diagnosis')} className="mt-1 block w-full p-3 border border-gray-600 rounded-md" placeholder="Enter diagnosis" />
          {errors.diagnosis && <p className="text-red-500 text-sm mt-2">{errors.diagnosis?.message}</p>}

          <label className="block text-sm font-medium text-gray-600 mt-4">Treatment Plan</label>
          <textarea {...register('treatmentPlan')} className="mt-1 block w-full p-3 border border-gray-50 rounded-md" placeholder="Enter treatment plan" />
          {errors.treatmentPlan && <p className="text-red-500 text-sm mt-2">{errors.treatmentPlan?.message}</p>}
        </div>

        <div className="text-center">
          <button type="submit" className="px-6 py-3 bg-blue text-white rounded-lg shadow-md hover:bg-gray-700 transition duration-300">Save</button>
        </div>
      </form>
    </div>
  );
};

export default PhysicianNotes;
