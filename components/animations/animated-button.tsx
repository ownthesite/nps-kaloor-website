'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
}

export function AnimatedButton({ children, onClick, className }: AnimatedButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={className}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    >
      {children}
    </motion.button>
  )
}
