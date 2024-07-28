"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginInputProps } from "@/types/types";
import SubmitButton from "../formInputs/SubmitButton";
import TextInput from "../formInputs/TextInput";
import React from "react";

// Define the type for props including onComplete
interface BioDataFormProps {
  onComplete?: () => void; // Optional onComplete function
}

export default function BioDataForm({ onComplete }: BioDataFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginInputProps>();

  async function onSubmit(data: LoginInputProps) {
    setIsLoading(true);
    try {
      // Perform API call or form submission logic here
      console.log(data); // Example: Replace with actual submit logic
      
      // Call onComplete prop function if it is provided
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
        <h1 className="text-2xl font-bold mb-2 tracking-tight text-slate-950">Contact Information</h1>
        <p className="text-balance text-sm text-muted-foreground">Please fill out your contact info</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="py-4 px-4 mx-auto">
        <div className="grid gap-4 grid-cols-2">
          {/* Email Address */}
          <TextInput
            label="Email Address"
            name="email" // Ensure this matches your LoginInputProps type
            type="email"
            placeholder="john@example.com"
            register={register}
            required={true}
            errors={errors}
            className="col-span-full"
          />

          {/* Phone */}
          <TextInput
            label="Phone Number"
            name="phone"
            type="tel"
            placeholder=""
            register={register}
            required={true}
            errors={errors}
            className="col-span-full sm:col-span-1"
          />

          {/* Country */}
          <TextInput
            label="Country"
            name="country" // Ensure this matches your LoginInputProps type
            type="text"
            placeholder=""
            register={register}
            required={false}
            errors={errors}
            className="col-span-full sm:col-span-1"
          />

          {/* City */}
          <TextInput
            label="City"
            name="city"
            type="text"
            placeholder=""
            register={register}
            required={false}
            errors={errors}
            className="col-span-full sm:col-span-1"
          />

          {/* State */}
          <TextInput
            label="State"
            name="state"
            type="text"
            placeholder=""
            register={register}
            required={false}
            errors={errors}
            className="col-span-full sm:col-span-1"
          />
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
