import { Loader } from 'lucide-react'
import React from 'react'

type SubmitButtonProps = {
  title: string,
  buttonType?: "submit" | "reset" | "button" | undefined
  login: string,
  isLoading: boolean,
  loadingTitle: string
}

13
export default function SubmitButton({ title, buttonType = "submit", isLoading = false, loadingTitle }: SubmitButtonProps) {
  return (
    <>
      {isLoading ? (
        <button
          type={buttonType}
          disabled
          className="flex w-full justify-center rounded-md bg-blue px-3 py-1.5
      text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan 
      focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
       focus-visible:outline-indigo-600 items-center"
        >
          <Loader className='w-4 h-4 mr-2 flex-shrink-0 animate-spin' />
          {loadingTitle}
        </button>

      ) : (
        <button
          type={buttonType}
          className="flex justify-center rounded-md bg-slate-900 px-3 py-1.5
     text-sm leading-6 text-white shadow-sm hover:bg-slate-800
     focus-visible:outline focus-visible:outline-2  focus-visible:outline-offset-2
      focus-visible:outline-indigo-600"
        >
          {title}
        </button>
      )}

    </>
  )
}
