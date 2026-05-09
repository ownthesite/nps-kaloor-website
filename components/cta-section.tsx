'use client'

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
    <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 sm:p-12 text-center text-white">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
      <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">{description}</p>
      <Button
        onClick={onButtonClick}
        className={`${
          buttonVariant === 'primary'
            ? 'bg-white text-primary hover:bg-white/90'
            : 'bg-white/20 text-white hover:bg-white/30'
        }`}
      >
        {buttonText}
      </Button>
    </div>
  )
}
