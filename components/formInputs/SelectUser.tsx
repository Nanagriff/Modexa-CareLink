import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



export function SelectUser() {
  return (
    <Select>
        <h2 className="text-sm">Who are you</h2>
      <SelectTrigger className="w-full mt-6 h-10">
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select</SelectLabel>
          <SelectItem value="apple">School</SelectItem>
          <SelectItem value="banana">Service provider</SelectItem>
          <SelectItem value="blueberry">Admin</SelectItem>
         
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
