"use client"
import { RegisterInputProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import SubmitButton from "../formInputs/SubmitButton";
import { useState } from "react";
import { UserRole } from "@prisma/client";
import toast from "react-hot-toast";

export default function SignupForm({ role = "USER" }: { role?: UserRole }) {
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
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Create New Account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Input fields and other form elements here */}
                    {/* First Name */}
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-900">
                            First Name
                        </label>
                        <input
                            {...register("firstName", { required: "First name is required" })}
                            id="firstName"
                            name="firstName"
                            type="text"
                            autoComplete="name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        {errors.firstName && <span className="text-red-600">{errors.firstName.message}</span>}
                    </div>

{/* Last Name */}
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-900">
                            Last Name
                        </label>
                        <input
                            {...register("lastName", { required: "last name is required" })}
                            id="lastName"
                            name="lastName"
                            type="text"
                            autoComplete="name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        {errors.lastName && <span className="text-red-600">{errors.lastName.message}</span>}
                    </div>

                    {/* Phone number */}
                    <div>
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-900">
                            Phone number
                        </label>
                        <input
                            {...register("phone", { required: "phone number is required" })}
                            id="phone"
                            name="phone"
                            type="tel"
                            autoComplete="phone"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        {errors.phone && <span className="text-red-600">{errors.phone.message}</span>}
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                            Password
                        </label>
                        <input
                            {...register("password", { required: "Password name is required" })}
                            id="password"
                            name="password"
                            type="text"
                            autoComplete="password"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        {errors.password && <span className="text-red-600">{errors.password.message}</span>}
                    </div>

                    {/* Other fields like Last Name, Email, Phone Number, Password */}
                    {/* Submit Button */}
                    <SubmitButton title="Create Account" loadingTitle="Creating, please wait..." isLoading={isLoading} login={""} />
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link href="/logIn" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
}
