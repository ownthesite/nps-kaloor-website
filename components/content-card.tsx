import { ReactNode } from 'react'

interface ContentCardProps {
  icon?: ReactNode
  title: string
  description: string
  image?: string
  badge?: string
}

export function ContentCard({
  icon,
  title,
  description,
  image,
  badge,
}: ContentCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-border overflow-hidden h-full flex flex-col">
      {image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        {badge && (
          <span className="inline-block w-fit text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full mb-3">
            {badge}
          </span>
        )}
        {icon && <div className="mb-3 text-secondary">{icon}</div>}
        <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm flex-1">{description}</p>
      </div>
    </div>
  )
}
