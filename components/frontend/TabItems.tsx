"use client"

import React from 'react'
import { Tabs } from "flowbite-react"
// import {MdDashboard} from "react-icons/md"
// import {HiUserCircle} from "react-icons/hi"
import { Microscope, Orbit, Stethoscope, Syringe } from 'lucide-react'
// import ServicesList from './services/ServicesList'
import LinkCard from './Doctors/LinkCard'
import ServiceCard from './services/ServiceCard'

export default function TabItems() {
    const services = [
        {
            title: "TeleHealth",
            // image: "/public/img/doctor.jpg",
            slug: "telehealth",
        }, 
        {
            title: "Mental Health Consult",
            slug: "mentalhealth",
        },
         {
            title: "UTI consult",
            slug: "Uticonsult",
        },
         {
            title: "ED consult",
            slug: "edconsult",
        }, 
        {
            title: "Video prescription",
            slug: "eprescription",
        },
        {
            title: "urgent care",
            slug: "urgentcare",
        },
    ]

    const tabs = [
        {
            title: "Popular Services",
            icon: Stethoscope,
            component: <ServiceCard/>,
            content: [],
        },
        {
            title: "Doctors",
            icon: Microscope,
            component: <LinkCard className='bg-cyan'/>,
            content: [],
        },
        {
            title: "Physicians",
            icon: Orbit,
            component: <LinkCard className='bg-regalblue'/>,
            content: [],
        },
        {
            title: "Symptoms",
            icon: Syringe,
            component: <LinkCard />,
            content: [],
        },
    ]

    return (

        <div>
            <Tabs arial-label="Tabs with underline" className='' style='underline'>
                {tabs.map((tab, i) => {
                    return (
                        <Tabs.Item key={i} active title={tab.title} icon={tab.icon} >
                            {tab.component}
                        </Tabs.Item>
                    )
                })

                }
            </Tabs>
        </div>
    )
}
