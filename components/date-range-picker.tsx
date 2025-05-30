"use client"

import { useState } from "react"
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const quickRanges = ["Last 12 months", "Last 3 months", "Last 30 days", "Last 7 days"]

const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export function DateRangePicker({
  value,
  onChange,
  placeholder = "Select date range",
}: {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 4)) // May 2025
  const [selectedDate, setSelectedDate] = useState<number | null>(24)
  const [searchQuery, setSearchQuery] = useState("")

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
    return firstDay === 0 ? 6 : firstDay - 1 // Convert Sunday (0) to 6, Monday (1) to 0, etc.
  }

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth)
    const firstDay = getFirstDayOfMonth(currentMonth)
    const days = []

    // Previous month's trailing days
    const prevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 0)
    const daysInPrevMonth = prevMonth.getDate()

    for (let i = firstDay - 1; i >= 0; i--) {
      days.push(
        <button key={`prev-${daysInPrevMonth - i}`} className="w-8 h-8 text-sm text-gray-500 hover:bg-gray-700 rounded">
          {daysInPrevMonth - i}
        </button>,
      )
    }

    // Current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = day === selectedDate
      const isToday = day === 24 // Highlighting day 24 as shown in screenshot

      days.push(
        <button
          key={day}
          onClick={() => setSelectedDate(day)}
          className={cn(
            "w-8 h-8 text-sm rounded hover:bg-gray-700",
            isSelected && "bg-blue-600 text-white",
            isToday && !isSelected && "bg-blue-600 text-white",
            day === 3 || day === 4 || day === 10 || day === 11 || day === 17 || day === 18
              ? "text-red-400"
              : "text-white",
          )}
        >
          {day}
        </button>,
      )
    }

    // Next month's leading days
    const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7
    const remainingCells = totalCells - (firstDay + daysInMonth)

    for (let day = 1; day <= remainingCells; day++) {
      days.push(
        <button key={`next-${day}`} className="w-8 h-8 text-sm text-gray-500 hover:bg-gray-700 rounded">
          {day}
        </button>,
      )
    }

    return days
  }

  const filteredRanges = quickRanges.filter((range) => range.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="bg-gray-900 border-gray-700 justify-start">
          <Calendar className="w-4 h-4 mr-2" />
          {value || placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-gray-900 border-gray-700" align="start">
        <div className="flex">
          {/* Calendar */}
          <div className="p-4 border-r border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                className="h-8 w-8"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h3 className="font-semibold text-white">
                {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                className="h-8 w-8"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {daysOfWeek.map((day) => (
                <div key={day} className="w-8 h-8 text-xs text-gray-400 flex items-center justify-center">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>

            <div className="flex gap-2 mt-4">
              <Button variant="outline" className="flex-1 bg-gray-800 border-gray-700">
                Cancel
              </Button>
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Apply time range</Button>
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-400 mb-2">Recently used</h4>
              <p className="text-sm text-gray-500">No recent ranges</p>
            </div>
          </div>

          {/* Quick Search */}
          <div className="w-64 p-4">
            <h4 className="text-sm font-medium text-white mb-3">Quick search</h4>
            <Input
              placeholder="Search quick ranges"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mb-3 bg-gray-800 border-gray-700"
            />
            <div className="space-y-1">
              {filteredRanges.map((range) => (
                <button
                  key={range}
                  onClick={() => {
                    onChange?.(range)
                    setIsOpen(false)
                  }}
                  className="w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-800 rounded"
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
