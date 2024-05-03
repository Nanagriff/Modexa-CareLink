"use client"
import { RegisterInputProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form"



export default function SignupForm() {
  const { 
      register,
      handleSubmit,
      reset,
      formState: { errors },

    } = useForm<RegisterInputProps>();

async function onSubmit (data: RegisterInputProps){
  console.log(data)
}



  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image src="/logo.jpg" width={34} height={34} className="mx-auto h-10 w-auto" alt="logo" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create New account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" >
       
          {/* First name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
              First Name
            </label>
            <div className="mt-2">
              <input
              {...register("firstName", {required: true})}
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.firstName && <span className="text-red-600">first name is required</span>}
            </div>
          </div>

          {/* Last name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
              Last Name
            </label>
            <div className="mt-2">
              <input
              {...register("lastName", {required: true})}
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
              {...register("email", {required: true})}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.email && <span className="text-red-600">email is required</span>}

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
              {...register("password", {required: true})}
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
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        {/* Already have an account */}

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an Account?{' '}
          <Link href="signIn" className="font-semibold leading-6 text-blue hover:text-cyan">
            Sign In
          </Link>
        </p>
      </div>
    </div>

  )
}