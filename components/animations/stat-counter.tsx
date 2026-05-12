'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

interface StatCounterProps {
  number: number
  label: string
  suffix?: string
  icon?: React.ReactNode
}

export function StatCounter({ number, label, suffix = '', icon }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  // Initialize Framer Motion values for physics-based counting
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 90,
  })
  
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      motionValue.set(number)
    }
  }, [isInView, motionValue, number])

  useEffect(() => {
    // Sync the spring animation value with React state for rendering
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.floor(latest))
    })
    return () => unsubscribe()
  }, [springValue])

  return (
    <div ref={ref} className="text-center">
      {icon && (
        <div className="mb-3 flex justify-center text-2xl text-muted-foreground/80">
          {icon}
        </div>
      )}
      
      <div className="mb-3 flex items-center justify-center text-4xl font-extrabold tracking-tight text-primary">
        {displayValue}
        {suffix && (
          <span className="ml-1 text-muted-foreground">{suffix}</span>
        )}
      </div>
      
      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </p>
    </div>
  )
}