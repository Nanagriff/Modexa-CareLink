"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import SubmitButton from "../formInputs/SubmitButton";
import TextInput from "../formInputs/TextInput";
import React from "react";
import { DatePickerInput } from "../formInputs/DatePickerInput";
import { TextareaInput } from "../formInputs/TextareaInput";
import { RadioGroupInput } from "../formInputs/RadioGroupInput";

interface BioDataFormProps {
  onComplete?: () => void; // Optional onComplete function
}

interface FormData {
  firstName: string;
  lastName: string;
  middleName?: string;
  medicalLicense: string;
}

export default function BioDataForm({ onComplete }: BioDataFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [dob, setDob] = useState<Date>();
  const [expiry, setExpiry] = useState<Date>();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    try {
      console.log(data);
      if (onComplete) {
        onComplete(); // Call the onComplete function to move to the next step
      }
    } catch (error) {
      console.error("Failed to submit form:", error);
    } finally {
      setIsLoading(false);
      reset(); // Reset form after submission
    }
  };

  return (
    <div className="w-full">
      <div className="text-center border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold mb-2 tracking-tight text-slate-950">Bio Data</h1>
        <p className="text-sm text-muted-foreground">Enter your bio information to create an account</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="py-4 px-4 mx-auto">
        <div className="grid gap-4 grid-cols-2">
          <TextInput label="First Name" name="firstName" register={register} required={true} errors={errors} />
          <TextInput label="Last Name" name="lastName" register={register} required={true} errors={errors} />
          <TextInput label="Middle Name (optional)" name="middleName" register={register} required={false} errors={errors} />
          <div className="col-span-full">
            <DatePickerInput title="Date of Birth" date={dob} setDate={setDob} />
          </div>
          <TextInput label="Medical License Number" name="medicalLicense" register={register} required={true} errors={errors} />
          <div className="col-span-full">
            <DatePickerInput title="Medical License Expiration" date={expiry} setDate={setExpiry} />
          </div>
          <div className="col-span-full">
            <RadioGroupInput />
          </div>
          <div className="col-span-full">
            <TextareaInput />
          </div>
        </div>
        <div className="mt-8 flex justify-center items-center">
          <SubmitButton title="Save and Continue" loadingTitle="Saving, please wait..." isLoading={isLoading} />
        </div>
      </form>
    </div>
  );
}
