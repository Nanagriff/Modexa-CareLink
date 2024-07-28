"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginInputProps } from "@/types/types";
import SubmitButton from "../formInputs/SubmitButton";
import TextInput from "../formInputs/TextInput";
import React from "react";
import { SelectInput } from "../formInputs/SelectInput";


interface BioDataFormProps {
  onComplete?: () => void; // Optional onComplete function
}

export default function BioDataForm({ onComplete }: BioDataFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [dob, setDob] = useState<Date>();
  const [expiry, setExpiry] = useState<Date>();
  const [profileImage, setProfileImage] = useState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginInputProps>();

  async function onSubmit(data: LoginInputProps) {
    setIsLoading(true);
    try {
      // API call or form submission logic here
      console.log(data); 
      

      if (onComplete) {
        onComplete();
      }
    } catch (error) {
      console.error("Failed to submit form:", error);
    } finally {
      setIsLoading(false);
      reset(); // Reset form after submission
    }
  }

  return (
    <div className="w-full">
      <div className="text-center border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold mb-2 tracking-tight text-slate-950">Professional Information</h1>
        <p className="text-balance text-sm text-muted-foreground">Please fill out your professional info</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="py-4 px-4 mx-auto">
        <div className="grid gap-4 grid-cols-2">
          {/* Medical School */}
          <TextInput
            label="Medical School"
            name="school"
            type="text"
            placeholder=""
            register={register}
            required={true}
            errors={errors}
            className="col-span-full"
          />

          {/* Graduation Year */}
          <TextInput
            label="Graduation Year"
            name="graduation"
            type="text"
            placeholder=""
            register={register}
            required={true}
            errors={errors}
            className="col-span-full sm:col-span-1"
          />

          {/* Select Input */}
          <div className="col-span-full sm:col-span-1">
            <SelectInput />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex justify-center items-center">
          <SubmitButton
            title="Save and Continue"
            loadingTitle="Saving please wait...."
            isLoading={isLoading}
          />
        </div>
      </form>
    </div>
  );
}
