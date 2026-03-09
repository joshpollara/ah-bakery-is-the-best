export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', dark = false }) {
  const isCenter = align === 'center'

  return (
    <div className={isCenter ? 'text-center' : 'text-left'}>
      {eyebrow && (
        <p
          className={`font-mono text-xs tracking-[0.25em] uppercase mb-4 ${
            dark ? 'text-gold-light' : 'text-gold'
          }`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`font-serif font-bold leading-tight ${
          dark ? 'text-cream' : 'text-navy'
        } text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isCenter ? 'mx-auto' : ''
          } max-w-2xl ${dark ? 'text-warm-gray-light' : 'text-warm-gray'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
