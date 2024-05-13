"use client"
import { Facebook, Instagram, Linkedin, Twitter, Youtube, YoutubeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    const footerNavs = [
        {
            label: "Company",
            items: [
                {
                    href: '/join/doctors',
                    name: 'Join as a Service Provider'
                },
                {
                    href: 'javascript:void()',
                    name: 'Blog'
                },
                
                {
                    href: 'javascript:void()',
                    name: 'Team'
                },
                {
                    href: 'javascript:void()',
                    name: 'Careers'
                },
            ],
        },
       
        {
            label: "About",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'Terms'
                },
                {
                    href: 'javascript:void()',
                    name: 'License'
                },
                {
                    href: 'javascript:void()',
                    name: 'Privacy'
                },
                {
                    href: 'javascript:void()',
                    name: 'About US'
                },
            ]
        }
    ]

    const socialLinks = [
        {
            title: "LinkedIn",
            href: "https://modexabio.com/",
            icon: Linkedin,
            
        },
        {
            title: "Youtube",
            href: "https://modexabio.com/",
            icon: YoutubeIcon
        }, {
            title: "Instagram",
            href: "https://modexabio.com/",
            icon: Instagram
        }, {
            title: "Twitter",
            href: "https://modexabio.com/",
            icon: Twitter
        }, {
            title: "Facebook",
            href: "https://modexabio.com/",
            icon: Facebook
        },
    ]

    return (
        <footer className="text-gray-500 mt-[100px] bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
            <div className="gap-6 justify-between md:flex">
                <div className="flex-1">
                    <div className="max-w-xs">
                        {/* <img src="https://www.floatui.com/logo.svg" className="w-32" /> */}
                        <Image alt='logo' width={30} height={30} src="/logo.jpg"/>
                        <p className="leading-relaxed mt-2 text-[15px]">
                        Modexa is a digital health startup that seeks to simplify the process of gathering health data. Our goal is to help healthcare providers
                        </p>
                    </div>
                </div>
                <div className="flex-1 mt-5 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
                    {
                        footerNavs.map((item, idx) => (
                            <ul
                                className="space-y-4"
                                key={idx}
                            >
                                <h4 className="text-blue font-medium">
                                    { item.label }
                                </h4>
                                {
                                    item.items.map(((el, idx) => (
                                        <li key={idx}>
                                            <a 
                                                href={el.href}
                                                className="hover:underline hover:text-indigo-600"
                                            
                                            >
                                                { el.name }
                                            </a>
                                        </li>
                                    )))
                                }
                            </ul>
                        ))
                    }
                </div>
            </div>
            <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; {(new Date).getFullYear()}   Carelink All rights reserved.
                </div>
                <div className="mt-6 sm:mt-0">
                    <ul className="flex items-center space-x-4">
                       {
                        socialLinks.map((item, i) => {
                            const Icon = item.icon
                            return (
                                <li key={i} className='w-10 h-10 border rounded-full flex items-center justify-center' >
                             <Link href={item.href}>
                             <Icon className='w-6 h-6 text-blue'/>
                             </Link>
                            </li>
                            )

                           
                        })
                       }
                    </ul>
                </div>
            </div>
        </footer>
    )
}

