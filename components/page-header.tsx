interface PageHeaderProps {
  title: string
  subtitle?: string
  image?: string
}

export function PageHeader({ title, subtitle, image }: PageHeaderProps) {
  return (
    <div className="relative h-64 sm:h-80 flex items-center justify-center overflow-hidden">
      {image && (
        <>
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </>
      )}
      <div className={`relative z-10 text-center text-white max-w-3xl mx-auto px-4 ${!image ? 'bg-primary py-12' : ''}`}>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-lg text-white/90">{subtitle}</p>}
      </div>
    </div>
  )
}
