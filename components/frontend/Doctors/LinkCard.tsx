import Link from 'next/link'
import React from 'react'

export default function LinkCard({className}: {className?:string}) {
  return (
    <div className='grid max-w-full lg:grid-cols-5 gap-8 mt-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
 <Link href="#" className={`flex gap-4 bg-deepblue opacity-90 rounded-mg py-3 text-white ${className}`}>
    <h2>Anxiety</h2>
    <span aria-hidden="true">&rarr;</span>
    </Link><Link href="#" className={`flex gap-4 bg-deepblue opacity-90 rounded-md py-3 text-white ${className}`}>
    <h2>Anxiety</h2>
    <span aria-hidden="true">&rarr;</span>
    </Link><Link href="#" className={`flex gap-4 bg-deepblue opacity-90 rounded-mg py-3 text-white ${className}`}>
    <h2>Anxiety</h2>
    <span aria-hidden="true">&rarr;</span>
    </Link><Link href="#" className={`flex gap-4 bg-deepblue opacity-90 rounded-mg py-3 text-white ${className}`}>
    <h2>Anxiety</h2>
    <span aria-hidden="true">&rarr;</span>
    </Link><Link href="#" className={`flex gap-4 bg-deepblue opacity-90 rounded-mg py-3 text-white ${className}`}>
    <h2>Anxiety</h2>
    <span aria-hidden="true">&rarr;</span>
    </Link><Link href="#" className={`flex gap-4 bg-deepblue opacity-90 rounded-mg py-3 text-white ${className}`}>
    <h2>Anxiety</h2>
    <span aria-hidden="true">&rarr;</span>
    </Link><Link href="#" className={`flex gap-4 bg-deepblue opacity-90 rounded-mg py-3 text-white ${className}`}>
    <h2>Anxiety</h2>
    <span aria-hidden="true">&rarr;</span>
    </Link>
  </div>
   
  )
}

