import Navbar from '@/components/Dasboard/Navbar'
import Sidebar from '@/components/Dasboard/Sidebar'
import React, { ReactNode } from 'react'

export default function Layout({children}:{children:ReactNode}) {
  return (
    <div>
     <Navbar/>
     <div className="flex">
     <Sidebar/>
     <div className="p-8">
     {children}
     </div>
     </div>
    </div>
  )
}
