'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface CTASectionProps {
  title: string
  description: string
  buttonText?: string
  buttonVariant?: 'primary' | 'secondary'
  onButtonClick?: () => void
}

export function CTASection({
  title,
  description,
  buttonText = 'Enquire Now',
  buttonVariant = 'primary',
  onButtonClick,
}: CTASectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-50px' }}
      className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 sm:p-12 text-center text-white shadow-premium"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-4xl font-bold mb-4"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-white/90 max-w-2xl mx-auto mb-8"
      >
        {description}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          onClick={onButtonClick}
          className={`${
            buttonVariant === 'primary'
              ? 'bg-white text-primary hover:bg-white/90'
              : 'bg-white/20 text-white hover:bg-white/30'
          } transition-smooth`}
        >
          {buttonText}
        </Button>
      </motion.div>
    </motion.div>
  )
}
