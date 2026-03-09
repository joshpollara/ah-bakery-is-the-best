import ScrollReveal from '../components/ScrollReveal'
import StatCard from '../components/StatCard'

const stats = [
  {
    number: 1100,
    suffix: '+',
    label: 'stores nationwide',
    description: 'Infrastructure, not ambition',
  },
  {
    number: 100,
    suffix: '+',
    label: 'Amsterdam locations',
    description: 'Within cycling distance. Always.',
  },
  {
    number: 1.19,
    suffix: '',
    label: 'average pastry price',
    description: 'Joy should not require budgeting',
    prefix: '\u20AC',
  },
  {
    number: 38,
    suffix: ' sec',
    label: 'average transaction time',
    description: 'From intent to pastry. Measured.',
  },
]

export default function StatsSection() {
  return (
    <section className="bg-navy py-20 sm:py-24 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <ScrollReveal>
          <p className="text-center font-mono text-xs tracking-[0.3em] uppercase text-gold-light mb-12 sm:mb-16">
            By the Numbers
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.12}>
              <div className="bg-navy-light/50 border border-gold/15 rounded-sm p-8 sm:p-10 text-center transition-all duration-300 hover:border-gold/35 hover:bg-navy-light/70">
                <p className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gold leading-none">
                  {stat.prefix && (
                    <span className="text-3xl sm:text-4xl lg:text-5xl text-gold-dark">
                      {stat.prefix}
                    </span>
                  )}
                  {stat.number.toLocaleString()}
                  {stat.suffix && (
                    <span className="text-2xl sm:text-3xl lg:text-4xl text-gold-dark">
                      {stat.suffix}
                    </span>
                  )}
                </p>

                <p className="mt-4 font-sans text-base sm:text-lg font-semibold text-cream tracking-wide">
                  {stat.label}
                </p>

                <p className="mt-2 font-sans text-sm text-warm-gray-light leading-relaxed italic">
                  {stat.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
