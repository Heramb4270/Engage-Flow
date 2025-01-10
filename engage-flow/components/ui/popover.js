import React, { useState, useRef, useEffect } from 'react'

const PopoverContext = React.createContext()

export function Popover({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const popoverRef = useRef(null)
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <PopoverContext.Provider value={{ isOpen, setIsOpen }}>
      <div ref={popoverRef} className="relative inline-block">
        {children}
      </div>
    </PopoverContext.Provider>
  )
}

export function PopoverTrigger({ children, asChild }) {
  const { isOpen, setIsOpen } = React.useContext(PopoverContext)
  
  if (asChild) {
    return React.cloneElement(children, {
      onClick: (e) => {
        e.stopPropagation()
        setIsOpen(prev => !prev)
      },
      'aria-expanded': isOpen,
      'aria-haspopup': true
    })
  }

  return (
    <button
      onClick={() => setIsOpen(prev => !prev)}
      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      aria-expanded={isOpen}
      aria-haspopup={true}
    >
      {children}
    </button>
  )
}

export function PopoverContent({ 
  children, 
  className = '',
  align = 'center',
  sideOffset = 4
}) {
  const { isOpen } = React.useContext(PopoverContext)
  const contentRef = useRef(null)

  const alignmentClasses = {
    'start': 'left-0',
    'center': 'left-1/2 -translate-x-1/2',
    'end': 'right-0'
  }

  if (!isOpen) return null

  return (
    <div
      ref={contentRef}
      className={`
        absolute z-50 min-w-[8rem] 
        overflow-hidden rounded-md border border-gray-200 
        bg-white p-1 text-gray-900 shadow-md 
        data-[state=open]:animate-in data-[state=closed]:animate-out 
        data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 
        data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 
        ${alignmentClasses[align]}
        mt-${sideOffset} 
        ${className}
      `}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className={`
          relative h-full w-full p-4
          data-[state=open]:animate-in data-[state=closed]:animate-out
          data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
          data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
        `}
      >
        {children}
      </div>
    </div>
  )
}

export default { Popover, PopoverTrigger, PopoverContent }