"use client"
import { RegisterInputProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form"
import SubmitButton from "../formInputs/SubmitButton";
import { useState } from "react";
// import { createUser } from "@/actions/users";
import { UserRole } from "@prisma/client";
import toast from "react-hot-toast";



export default function SignupForm({role="USER"}: {role?: UserRole}) {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },

  } = useForm<RegisterInputProps>();

  async function onSubmit(data: RegisterInputProps) {
    // console.log(data)
    setIsLoading(true)
    data.role = role;
  //   try {
  //     const user = await createUser(data)
  //     if(user && user.status === 201){
  //       console.log("User Created Successfully")
  //       reset()
  //       setIsLoading(false)
  //       toast.success("User was Created Successfully")
  //       console.log(user.data)
  //     } else {
  //       console.log(user.error)
  //     }
      
  //     console.log(user);
      
  //   } catch (error) {
  //     console.log(error);
      
  //   }
  // }



  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image src="/logo.jpg" width={34} height={34} className="mx-auto h-10 w-auto" alt="logo" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create New account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" >

          {/* First name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
              First Name
            </label>
            <div className="mt-2">
              <input
                {...register("firstName", { required: true })}
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.firstName &&
                <span className="text-red-600">first name is required</span>}
            </div>
          </div>

          {/* Last name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
              Last Name
            </label>
            <div className="mt-2">
              <input
                {...register("lastName", { required: true })}
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.lastName && <span className="text-red-600">Last name is required</span>}


            </div>
          </div>




          {/* Email address */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                {...register("email", { required: true })}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.email && <span className="text-red-600">email is required</span>}

            </div>
          </div>

          {/* Phone number */}

          <div>
            <label htmlFor="phonenumber" className="block text-sm font-medium leading-6 text-gray-900">
              Phone number
            </label>
            <div className="mt-2">
              <input
                {...register("phone", { required: true })}
                name="phone"
                type="tel"
                autoComplete="name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.phone && <span className="text-red-600">Phone number is required</span>}


            </div>
          </div>

          {/* Password */}

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                {...register("password", { required: true })}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.password && <span className="text-red-600">password is required</span>}
            </div>
          </div>
          {/* Submit button */}
          <div>
            <SubmitButton title="Create Account" buttonType="submit" loadingTitle="Creating please wait...." login={""} isLoading={isLoading} />
          </div>
        </form>

        {/* Already have an account */}

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an Account?{' '}
          <Link href="logIn" className="font-semibold leading-6 text-blue hover:text-cyan">
            Sign In
          </Link>
        </p>
      </div>
    </div>

  )
}