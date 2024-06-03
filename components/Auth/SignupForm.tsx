"use client"
import { RegisterInputProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import SubmitButton from "../formInputs/SubmitButton";
import { useState } from "react";
import { UserRole } from "@prisma/client";
import { SelectUser } from "../formInputs/SelectUser";
import GoogleSignIn from "../formInputs/GoogleSignIn";
// import toast from "react-hot-toast";

export default function SignupForm({ role = "SERVICE_PROVIDERS", plan }: { role?: UserRole; plan?: string }) {


    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterInputProps>();

    async function onSubmit(data: RegisterInputProps) {
        setIsLoading(true);
        data.role = role;
        // You might want to make an API call here to actually register the user
        // Example: await createUser(data);
        setIsLoading(false);
        // Redirect or show success message
    }

    return (
        <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Image src="/logo.jpg" width={34} height={34} className="mx-auto h-10 w-auto" alt="logo" />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight dark:text-white text-gray-900">
                    Create New Account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                <SelectUser />

                    {/* EMAIL ADDRESS */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium dark:text-white text-gray-900">
                            Email
                        </label>
                        <input
                            {...register("email", { required: "phone number is required" })}
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="mt-1 block w-full rounded-md  dark:bg-slate-950 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        {errors.email && <span className="text-red-600">{errors.email.message}</span>}
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium dark:text-white text-gray-900">
                            Password
                        </label>
                        <input
                            {...register("password", { required: "Password name is required" })}
                            id="password"
                            name="password"
                            type="text"
                            autoComplete="password"
                            className="mt-1 block w-full rounded-md  dark:bg-slate-950 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        {errors.password && <span className="text-red-600">{errors.password.message}</span>}
                    </div>



                    {/* I have to add the google button for auth services later  */}

                    {/* I have to also add the WHO AM I ON BOTH PAGES */}
                    {/* Other fields like Last Name, Email, Phone Number, Password */}
                    {/* Submit Button */}
                    <SubmitButton title="Create Account" loadingTitle="Creating, please wait..." isLoading={isLoading} login={""} />
                </form>
{/* Don't have an account */}
                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link href="/logIn" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Sign In
                    </Link>
                </p>

                {/* Google sign in  */}
                <GoogleSignIn text="Sign up"/>
            </div>
        </div>
    );
}


