"use client"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginInputProps, RegisterInputProps } from "@/types/types";
import SubmitButton from "../formInputs/SubmitButton"; // Ensure this import is correct
import TextInput from "../formInputs/TextInput";
import React from "react";
import { DatePickerInput } from "../formInputs/DatePickerInput";
import { TextareaInput } from "../formInputs/TextareaInput";
import { RadioGroupInput } from "../formInputs/RadioGroupInput";
import ImageInput from "../formInputs/ImageInput";
import { SelectInput } from "../formInputs/SelectInput";





export default function BioDataForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [dob, setDob] = useState<Date>()
  const [expiry, setExpiry] = useState<Date>()
  const [profileImage, setProfileImage] = useState()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginInputProps>();

  async function onSubmit(data: LoginInputProps) {

  }
  function setImageUrl(url: string | undefined): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="w-full">
      <div className="text-center border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold mb-2 tracking-tight text-slate-950">Professional Information</h1>
        <p className="text-balance text-sm text-muted-foreground">Please Fill out your Professional info</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className=" py-4 px-4 mx-auto">
        {/* {showNotification && (
          <Alert color="failure" icon={HiInformationCircle}>
            <span className="font-medium">Wrong Token!</span> Please Check the
            token and Enter again
          </Alert>
        )} */}
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

           {/* Graduation Year */}
           <div className="col-span-full sm:col-span-1">
           <SelectInput/>
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


