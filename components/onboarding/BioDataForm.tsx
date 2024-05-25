"use client"
import { useState } from "react";
import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image"; 
// import { signIn as nextAuthSignIn } from "next-auth/react";
import { LoginInputProps, RegisterInputProps } from "@/types/types";
import SubmitButton from "../formInputs/SubmitButton"; // Ensure this import is correct
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
// import { Button } from "../ui/button";
// import CustomButton from "../CustomButton";
import TextInput from "../formInputs/TextInput";
import React from "react";
import { DatePickerInput } from "../formInputs/DatePickerInput";





export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [dob, setDob] = useState<Date>()
  const [expiry, setExpiry] = useState<Date>()
  // console.log(dob)
  const [showNotification, setShowNotification] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginInputProps>();

  async function onSubmit(data: LoginInputProps) {

  }
  return (
    <div className="w-full">
      <div className="text-center border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold mb-2 tracking-tight text-slate-950">Bio Data</h1>
        <p className="text-balance text-sm text-muted-foreground">Enter your bio informations to create an Account</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className=" py-4 px-4 mx-auto">
        {showNotification && (
          <Alert color="failure" icon={HiInformationCircle}>
            <span className="font-medium">Wrong Token!</span> Please Check the
            token and Enter again
          </Alert>
        )}
        <div className="grid gap-4 grid-cols-2">
          
          <TextInput
            label="First Name"
            name="firstName"
            type="name"
            placeholder=""
            register={register}
            required={true}
            errors={errors}
            className="col-span-full sm:col-span-1"
          />

          <TextInput
            label="Last Name"
            name="lastName"
            type="name"
            placeholder=""
            register={register}
            required={true}
            errors={errors}
            className="col-span-full sm:col-span-1"
          />

          <TextInput
            label="Middle Name (optional)"
            name="middleName"
            type="name"
            placeholder=""
            register={register}
            required={false}
            errors={errors}
            className="col-span-full sm:col-span-1"
          />
          <div className="">
            <DatePickerInput 
            title="Date of Birth" 
            date={dob} 
            setDate={setDob} 
            />
          </div>

          <TextInput
            label="Medical License Number"
            name="medicalLicense"
            placeholder=""
            register={register}
            required={true}
            errors={errors}
            className="col-span-full sm:col-span-1"
          />

          {/* Medical license expiration */}
          <div className="">
          <DatePickerInput 
            title="Medical License Expiration" 
            date={expiry} 
            setDate={setExpiry} 
            />
          </div>
         
        </div>

        {/* Submit Button */}
        {/* <CustomButton className="w-full my-6 h-10" title="Submit" /> */}

        <div className="mt-8 flex justify-center items-center">
          <SubmitButton title="Save and Continue"
            loadingTitle="Saving please wait...."
            login={""}
            isLoading={isLoading} /></div>

      </form>
    </div>
  );
}

