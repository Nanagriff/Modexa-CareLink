"use client"

import Navbar from '@/components/Dasboard/Navbar'
import RightSidebar from '@/components/RightSidebar';
import Sidebar from '@/components/Sidebar'
import React, { ReactNode, useState } from 'react'


export default function Layout({children}:{children:ReactNode}) {
  
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  return (
    <div className=" flex min-h-screen  ">
    <Sidebar onCollapseChange={setIsSidebarCollapsed} />
    <div  className={`flex-1 flex flex-col bg-gray-100 overflow-hidden transition-all duration-300 ${
          isSidebarCollapsed ? 'ml-16' : 'ml-48'
        } pr-80`}>
      <Navbar/>

      <div className="flex min-h-screen w-full flex-col">
      {children}
      </div>
      <RightSidebar/>
     
    </div>
</div>
  )
}

