import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"; // Default styling
import { Calendar as CalendarIcon } from "lucide-react";
// import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

// type DatePickerInputProps = {
//   date: Date | undefined;
//   setDate: (date: Date | null) => void;
//   title: string;
// }

type DatePickerInputProps = {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;  // Adjusted to accept undefined
  title: string;
};

export const DatePickerInput: React.FC<DatePickerInputProps> = ({ date, setDate, title }) => {
  return (
    <Popover>
      <h2 className="text-sm">{title}</h2>
      <PopoverTrigger asChild className="mt-5">
        <Button variant={"outline"} className="lg:w-full w-[290px] dark:bg-slate-100 hover:bg-none justify-start text-left font-normal">
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? <span>{date.toLocaleDateString()}</span> : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <DatePicker
          selected={date}
          onChange={date => setDate(date || undefined)}
          dateFormat="dd/MM/yyyy"
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          wrapperClassName="date-picker"
          inline
          calendarClassName="bg-white rounded-lg shadow p-4 border mt-1"
        />
      </PopoverContent>
    </Popover>
  );
}
