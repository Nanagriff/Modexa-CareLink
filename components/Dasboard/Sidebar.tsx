"use client"

import React from "react";
import Link from "next/link"
import {
    Bell,
    Folder,
    Grid2X2,
    Home,
    LineChart,
    Package,
    Settings,
    ShoppingCart,
    Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";



export default function Sidebar() {
    // This will be the main nav Link the one below is just for demonstration
    // const sideBarLinks = [
    //     {
    //         name: "Dashboard",
    //         path: "/dashboard",
    //         icon: Home
    //     },
    //     {
    //         name: "Patients",
    //         path: "/patients",
    //         icon: Folder
    //     },
    //     {
    //         name: "Appointments",
    //         path: "/appointment",
    //         icon: Grid2X2
    //     },
    //     {
    //         name: "Reports",
    //         path: "/reports",
    //         icon: LineChart
    //     },
    //     {
    //         name: "settings",
    //         path: "/settings",
    //         icon: Settings
    //     },
    //     {
    //         name: "Logout",
    //         path: "/dashboard",
    //         icon: Bell
    //     },
    // ]

const pathname = usePathname()

    const sideBarLinks = [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: Home
        },
        {
            name: "Patients",
            path: "/dashboard/patients",
            icon: Folder
        },
        {
            name: "Appointments",
            path: "/dashboard/appointments",
            icon: Grid2X2,
            badgeCount: 6
        },
        {
            name: "Analytics",
            path: "/dashboard/analytics",
            icon: LineChart

        },
        {
            name: "settings",
            path: "/dashboard/settings",
            icon: Settings
        },

    ]

    return (
        <div className="hidden border-r bg-muted/40 md:block dark:bg-slate-950">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Link href="/" className="flex items-center gap-2 font-normal">
                        {/* <Package2 className="h-6 w-6" /> */}
                        <Image src="/logo.jpg" height={24} width={24} alt="logo" />
                        <span className="">Care Link</span>
                    </Link>
                    <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                        <Bell className="h-4 w-4" />
                        <span className="sr-only">Toggle notifications</span>
                    </Button>
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                        {sideBarLinks.map((item, i) => {
                            const Icon = item.icon
                            return (
                                <Link
                                    key={i}
                                    href={item.path}
                                    className={cn("flex hover:bg-gray-200 dark:hover:bg-gray-900 items-center font-normal dark:text-slate-200 text-black gap-3 rounded-lg px-3 py-2 transition-all hover:font-semibold",
                                    pathname === item.path ? "bg-muted text-primary dark:bg-slate-900 bg-gray-300": ""
                                    )}
                                >
                                    <Icon className="h-4 w-4 dark:text-slate-400 text-blue" />
                                    {item.name}
                                    {item.badgeCount &&   <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                                        {item.badgeCount}
                                    </Badge>}
                                </Link>
                            )
                        })}

{/* 
                        <Link
                            href="#"
                            className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                        >
                            <Package className="h-4 w-4" />
                            Products{" "}
                        </Link> */}

                    </nav>
                </div>
                <div className="mt-auto p-4">

                </div>
            </div>
        </div>
    );
}