import React from 'react'

export function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

