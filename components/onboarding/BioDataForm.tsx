"use client"
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
// import { useRouter } from "next/router"; // Make sure the import is from 'next/router' not 'next/navigation'
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image"; // Uncomment this if you are using the Image component
import { signIn as nextAuthSignIn } from "next-auth/react";
import { LoginInputProps, RegisterInputProps } from "@/types/types";
import SubmitButton from "../formInputs/SubmitButton"; // Ensure this import is correct
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
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
        <h1 className="text-4xl font-bold mb-2 tracking-tight text-slate-950">Bio Data</h1>
        <p className="text-balance text-muted-foreground">Enter your bio informations to create an Account</p>
      </div>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4 px-12 mx-auto max-w-3xl">
          {showNotification && (
            <Alert color="failure" icon={HiInformationCircle}>
              <span className="font-medium">Wrong Token!</span> Please Check the
              token and Enter again
            </Alert>
          )}
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 dark:text-white text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                {...register("email", { required: true })}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="eg johnDoe@gmail.com"
                className="block w-full rounded-md border-0 py-1.5 dark:bg-slate-950 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.email && <span className="text-red-600">email is required</span>}
            </div>
          </div>

       {/* Submit Button */}
            <SubmitButton title="Login"
              loadingTitle="Logging in please wait...."
              login={""}
              isLoading={isLoading} />
    
        </form>
      </div>
  );
}
