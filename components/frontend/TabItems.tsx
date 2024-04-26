import React from 'react'
import {Tabs} from "flowbite-react"

export default function TabItems() {
const tabs = [
    {
        title: "Popular Services",
        Icon: "",
        content: [],
    },
    {
        title: "Doctors",
        Icon: "",
        content: [],
    },{
        title: "Popular Services",
        Icon: "",
        content: [],
    },
]

  return (

    <div>
    <Tabs arial-label="Tabs with underline" style='underline'>
{ tabs.map((tab,i)=> {
    return (
        <Tabs.Item key={i} active title={tab.title} icon={tab.icon} >

        </Tabs.Item>
    )
})
    
}
    </Tabs>
    </div>
  )
}
