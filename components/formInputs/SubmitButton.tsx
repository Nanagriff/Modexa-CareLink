import React from 'react'
type SubmitButtonProps = {
    title: string,
    buttonType?: "submit" | "reset" | "button" | undefined
    login: string,
    isLoading: boolean,
}

13
export default function SubmitButton({title, buttonType="submit", isLoading=false}: SubmitButtonProps) {
  return (
    <button
    type={buttonType}
    className="flex w-full justify-center rounded-md bg-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
   {title}
  </button>
  )
}
