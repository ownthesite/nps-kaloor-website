'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-50px' }}
        className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
