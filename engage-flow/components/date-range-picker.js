'use client'

import * as React from "react"
import { Calendar as CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Button } from "@/components/ui/button2"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DateRangePicker({
  className = "",
  onDateRangeChange
}) {
  const [date, setDate] = React.useState({
    from: new Date(2023, 0, 1),
    to: new Date(),
  })

  const handleSelect = (selectedDate) => {
    setDate(selectedDate)
    if (onDateRangeChange) {
      onDateRangeChange(selectedDate)
    }
  }

  return (
    <div className={`grid gap-2 ${className}`}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={`
              w-[300px] justify-start text-left font-medium
              bg-white hover:bg-gray-50
              border border-gray-200 hover:border-gray-300
              shadow-sm hover:shadow
              transition-all duration-150 ease-in-out
              ${!date && "text-gray-500"}
            `}
          >
            <div className="flex ">

           
            <CalendarIcon className="mr-2 h-5 w-5 text-gray-600" />
            {date?.from ? (
              date.to ? (
                <span className="text-gray-900">
                  {format(date.from, "MMM d, yyyy")} - {format(date.to, "MMM d, yyyy")}
                </span>
              ) : (
                format(date.from, "MMM d, yyyy")
              )
            ) : (
              <span className="text-gray-500">Select date range</span>
            )}
             </div>
          </Button>
          
        </PopoverTrigger>
        <PopoverContent
          className="w-auto p-0 bg-white border border-gray-200 rounded-xl shadow-lg"
          align="start"
        >
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleSelect}
            numberOfMonths={2}
            className="rounded-lg border-0"
            classNames={{
              months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
              month: "space-y-4",
              caption: "flex justify-center pt-2 relative items-center px-4",
              caption_label: "text-sm font-semibold text-gray-900",
              nav: "space-x-1 flex items-center",
              nav_button: `
                h-7 w-7 bg-transparent p-0 hover:bg-gray-100 
                rounded-full transition-colors duration-150 ease-in-out
                text-gray-500 hover:text-gray-900
              `,
              nav_button_previous: "absolute left-1",
              nav_button_next: "absolute right-1",
              table: "w-full border-collapse space-y-1",
              head_row: "flex",
              head_cell: "text-gray-500 rounded-md w-9 font-medium text-[0.8rem] uppercase",
              row: "flex w-full mt-2",
              cell: `
                relative p-0 text-center text-sm focus-within:relative focus-within:z-20
                [&:has([aria-selected])]:bg-gray-100 
                first:[&:has([aria-selected])]:rounded-l-md
                last:[&:has([aria-selected])]:rounded-r-md
                [&:has([aria-selected].day-range-end)]:rounded-r-md
                [&:has([aria-selected].day-range-start)]:rounded-l-md
              `,
              day: `
                h-9 w-9 p-0 font-normal aria-selected:opacity-100
                hover:bg-gray-100 rounded-md transition-colors
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
              `,
              day_range_end: "day-range-end",
              day_range_start: "day-range-start",
              day_selected: `
                bg-gray-900 text-white hover:bg-gray-800
                hover:text-white focus:bg-gray-900 
                focus:text-white focus:ring-gray-900
              `,
              day_today: "bg-gray-50 text-gray-900 font-semibold",
              day_outside: "text-gray-400 opacity-50",
              day_disabled: "text-gray-400 opacity-50 cursor-not-allowed",
              day_hidden: "invisible",
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default DateRangePicker