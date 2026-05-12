'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

// The custom easing curve for a premium, buttery-smooth reveal
const premiumEase = [0.16, 1, 0.3, 1]

interface StaggerContainerProps {
  children: ReactNode
  staggerDelay?: number
  delayChildren?: number
}

export function StaggerContainer({
  children,
  staggerDelay = 0.15,
  delayChildren = 0.2,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: ReactNode
}

export function StaggerItem({ children }: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { ease: premiumEase, duration: 0.8 },
        },
      }}
    >
      {children}
    </motion.div>
  )
}