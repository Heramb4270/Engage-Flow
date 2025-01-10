import React from 'react'

export function Card({ children, className = '' }) {
  return (
    <div className={`rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm transition-shadow hover:shadow-md ${className}`}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '' }) {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 border-b border-gray-100 ${className}`}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className = '' }) {
  return (
    <h3 className={`text-xl font-semibold leading-none tracking-tight text-gray-900 ${className}`}>
      {children}
    </h3>
  )
}

export function CardDescription({ children, className = '' }) {
  return (
    <p className={`text-sm text-gray-500 ${className}`}>
      {children}
    </p>
  )
}

export function CardContent({ children, className = '' }) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  )
}

export default { Card, CardHeader, CardTitle, CardDescription, CardContent }