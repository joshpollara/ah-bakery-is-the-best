import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'

const neighborhoods = [
  { name: 'Centrum', locations: 14, rating: 'SATURATED', level: 100 },
  { name: 'Zuid', locations: 11, rating: 'SATURATED', level: 100 },
  { name: 'Oost', locations: 9, rating: 'DENSE', level: 85 },
  { name: 'West', locations: 8, rating: 'FULL COVERAGE', level: 75 },
  { name: 'Nieuw-West', locations: 8, rating: 'FULL COVERAGE', level: 75 },
  { name: 'De Pijp', locations: 7, rating: 'DENSE', level: 85 },
  { name: 'Noord', locations: 6, rating: 'COVERED', level: 60 },
  { name: 'Jordaan', locations: 5, rating: 'FULL COVERAGE', level: 75 },
  { name: 'Zuidoost', locations: 5, rating: 'COVERED', level: 60 },
  { name: 'IJburg', locations: 3, rating: 'ADEQUATE', level: 40 },
]

const ratingColors = {
  SATURATED: 'bg-gold',
  DENSE: 'bg-gold-dark',
  'FULL COVERAGE': 'bg-navy-light',
  COVERED: 'bg-navy',
  ADEQUATE: 'bg-warm-gray',
}

const comparisons = [
  {
    label: 'Average distance to nearest AH Bakery',
    value: '4.2 minutes by bike',
  },
  {
    label: 'Average distance to nearest artisanal bakery',
    value: '14.7 minutes by bike',
  },
  {
    label: 'Average wait time at AH Bakery',
    value: '38 seconds',
  },
  {
    label: 'Average wait time at artisanal bakery',
    value: '12.4 minutes',
  },
]

export default function CoverageSection() {
  return (
    <section className="bg-navy py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <ScrollReveal>
          <SectionHeading
            eyebrow="THE NETWORK"
            title="Amsterdam Bakery Coverage Index"
            subtitle="One of Albert Heijn's most decisive advantages: it is distributed like infrastructure, not hoarded like prestige."
            dark
          />
        </ScrollReveal>

        {/* Neighborhood Grid */}
        <div className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {neighborhoods.map((hood, i) => (
            <ScrollReveal key={hood.name} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-navy-light/30 border border-cream/10 rounded-sm p-5 sm:p-6 cursor-default"
              >
                <h3 className="font-serif text-lg font-bold text-cream">
                  {hood.name}
                </h3>

                <p className="mt-2 font-mono text-3xl font-bold text-gold leading-none">
                  {hood.locations}
                </p>
                <p className="font-mono text-xs text-cream/50 mt-1">
                  locations
                </p>

                {/* Coverage bar */}
                <div className="mt-4 w-full h-1.5 bg-cream/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${hood.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.05 + 0.3 }}
                    className={`h-full rounded-full ${ratingColors[hood.rating]}`}
                  />
                </div>

                <p className="mt-3 font-mono text-[10px] tracking-[0.2em] uppercase text-gold-light">
                  {hood.rating}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bakery Access Index */}
        <ScrollReveal delay={0.2}>
          <div className="mt-20 sm:mt-24 border border-cream/10 rounded-sm p-8 sm:p-12 lg:p-16">
            <h3 className="font-mono text-xs tracking-[0.25em] uppercase text-gold-light mb-10">
              Bakery Access Index
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {comparisons.map((item, i) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-2 pb-6 border-b border-cream/10 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0"
                >
                  <p className="font-sans text-sm text-cream/60">
                    {item.label}
                  </p>
                  <p className="font-mono text-2xl sm:text-3xl font-bold text-cream">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Conclusion */}
            <div className="mt-10 pt-8 border-t border-gold/20">
              <p className="font-serif text-lg sm:text-xl text-cream/80 italic leading-relaxed max-w-3xl">
                Conclusion: The math is not complicated. It is merely
                inconvenient for those who have confused waiting with quality.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
