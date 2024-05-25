"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


type DatePickerInputProps = {
date: Date | undefined
setDate: any,
title: string
}


export function DatePickerInput({date,setDate,title}: DatePickerInputProps) {


  return (
    <Popover>
        <h2 className=" text-sm">{title}</h2>
      <PopoverTrigger asChild className="mt-5 dark:bg-slate-100">
        <Button
          variant={"outline"}
          className={cn(
            "w-[290px] lg:w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
