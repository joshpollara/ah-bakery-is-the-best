import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'
import AmsterdamMap from '../components/illustrations/AmsterdamMap'

const comparisons = [
  {
    label: 'Nearest AH Bakery',
    value: '4.2 min',
    unit: 'by bike',
  },
  {
    label: 'Nearest artisanal bakery',
    value: '14.7 min',
    unit: 'by bike',
  },
  {
    label: 'AH Bakery wait time',
    value: '38 sec',
    unit: 'average',
  },
  {
    label: 'Artisanal wait time',
    value: '12.4 min',
    unit: 'average',
  },
]

export default function CoverageSection() {
  return (
    <section className="bg-navy py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <ScrollReveal>
          <SectionHeading
            eyebrow="THE NETWORK"
            title="Amsterdam Bakery Coverage Index"
            subtitle="Distributed like infrastructure, not hoarded like prestige."
            dark
          />
        </ScrollReveal>

        {/* Map Illustration */}
        <ScrollReveal delay={0.1}>
          <div className="mt-12 sm:mt-16">
            <AmsterdamMap className="w-full max-w-2xl mx-auto" />
          </div>
        </ScrollReveal>

        {/* Bakery Access Index — 2x2 grid */}
        <ScrollReveal delay={0.2}>
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {comparisons.map((item) => (
              <div
                key={item.label}
                className="bg-navy-light/30 border border-cream/10 rounded-sm p-6 sm:p-8"
              >
                <p className="font-sans text-sm text-cream/60">
                  {item.label}
                </p>
                <p className="mt-2 font-mono text-3xl sm:text-4xl font-bold text-cream leading-none">
                  {item.value}
                </p>
                <p className="mt-1 font-mono text-xs text-gold-light tracking-wide uppercase">
                  {item.unit}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
