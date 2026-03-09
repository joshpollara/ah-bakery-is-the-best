import { useCountUp } from '../hooks/useCountUp'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function StatCard({ number, label, suffix = '', description }) {
  const [ref, isVisible] = useScrollReveal(0.3)
  const count = useCountUp(number, 2000, isVisible)

  return (
    <div
      ref={ref}
      className="bg-cream border border-gold/20 rounded-lg p-8 text-center transition-shadow duration-300 hover:shadow-lg"
    >
      <p className="font-serif text-5xl sm:text-6xl font-bold text-gold leading-none">
        {count}
        {suffix && (
          <span className="text-3xl sm:text-4xl text-gold-dark">{suffix}</span>
        )}
      </p>

      <p className="mt-3 font-sans text-lg font-semibold text-navy tracking-wide">
        {label}
      </p>

      {description && (
        <p className="mt-2 font-sans text-sm text-warm-gray leading-relaxed max-w-xs mx-auto">
          {description}
        </p>
      )}
    </div>
  )
}
