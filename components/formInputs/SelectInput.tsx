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

export function SelectInput() {
  return (
    <Select>
        <h2 className="text-sm">Select your primary specialization</h2>
      <SelectTrigger className="w-full mt-6 h-10">
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select</SelectLabel>
          <SelectItem value="apple">Mental Health</SelectItem>
          <SelectItem value="banana">Anesthesiology</SelectItem>
          <SelectItem value="blueberry">Allergy and immunology</SelectItem>
          <SelectItem value="grapes">Dermatology</SelectItem>
          <SelectItem value="pineapple">interventional radiology</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
