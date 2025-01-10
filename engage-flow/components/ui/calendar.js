import React, { useState } from 'react'

export function Calendar({ onSelect }) {
  const [selectedDate, setSelectedDate] = useState(null)

  const handleDateClick = (date) => {
    setSelectedDate(date)
    onSelect(date)
  }

  // This is a simplified calendar. In a real implementation, you'd generate the days dynamically.
  return (
    <div className="p-4 border rounded-md">
      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-bold">{day}</div>
        ))}
        {[...Array(31)].map((_, i) => (
          <button
            key={i}
            onClick={() => handleDateClick(new Date(2023, 0, i + 1))}
            className={`p-2 rounded-full ${selectedDate && selectedDate.getDate() === i + 1 ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

