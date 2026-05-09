'use client'

import { useEffect, useRef } from 'react'
import CountUp from 'react-countup'
import { useInView } from 'framer-motion'

interface StatCounterProps {
  number: number
  label: string
  suffix?: string
  icon?: React.ReactNode
}

export function StatCounter({ number, label, suffix = '', icon }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className="text-center">
      <div className="mb-3 text-4xl font-bold text-primary">
        {isInView ? (
          <CountUp start={0} end={number} duration={2.5} suffix={suffix} />
        ) : (
          '0'
        )}
      </div>
      {icon && <div className="mb-3 flex justify-center text-2xl">{icon}</div>}
      <p className="text-muted-foreground text-sm font-medium">{label}</p>
    </div>
  )
}
