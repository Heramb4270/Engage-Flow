import React, { useState, createContext, useContext } from 'react'

const TabsContext = createContext()

export function Tabs({ children, defaultValue, className = '' }) {
  const [activeTab, setActiveTab] = useState(defaultValue)
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={`w-full ${className}`}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

export function TabsList({ children, className = '' }) {
  return (
    <div className={`inline-flex h-12 items-center justify-center rounded-xl bg-indigo-50 p-1.5 text-white-700 shadow-sm ${className}`}>
      {children}
    </div>
  )
}

export function TabsTrigger({ children, value, className = '' }) {
  const { activeTab, setActiveTab } = useContext(TabsContext)
  const isActive = activeTab === value
  
  return (
    <button
      className={`
        inline-flex items-center justify-center whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium 
        transition-all duration-200 ease-in-out
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 
        disabled:pointer-events-none disabled:opacity-50
        ${isActive
          ? 'bg-white text-indigo-700 shadow-md transform scale-105'
          : 'text-indigo-600 hover:bg-indigo-100 hover:text-indigo-800'
        } ${className}`
      }
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  )
}

export function TabsContent({ children, value, className = '' }) {
  const { activeTab } = useContext(TabsContext)
  if (activeTab !== value) return null
  
  return (
    <div
      className={`mt-6 ring-offset-white focus-visible:outline-none focus-visible:ring-2 
        focus-visible:ring-indigo-400 focus-visible:ring-offset-2
        animate-fadeIn ${className}`}
      style={{
        animationDuration: '0.3s',
        animationFillMode: 'forwards'
      }}
    >
      {children}
    </div>
  )
}

export default { Tabs, TabsList, TabsTrigger, TabsContent }