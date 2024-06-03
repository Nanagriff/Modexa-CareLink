import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type GoogleInputprop = {
    text: string
}

export default function GoogleSignIn({text}: GoogleInputprop) {
  return (
    <div>
       <Link href="https://support.google.com/" className="flex justify-center mt-5">
          <div className="flex gap-5 border-1 bg-white border-black self-center text-center justify-center items-center w-full rounded-md border-0 py-1.5 dark:bg-slate-950 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
           <Image src="/google.jpg" width={20} height={18} alt="google-log" />
            <p className="text-center">{text}</p>
          </div>
        </Link>

    </div>
  )
}
