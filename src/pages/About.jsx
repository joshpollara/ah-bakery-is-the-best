import { useEffect } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'
import Seal from '../components/Seal'

const principles = [
  'Accessibility over exclusivity. A bakery\'s value is measured by how many people it serves, not how many it excludes.',
  'Consistency over spectacle. The bakery that delivers reliable quality every day outranks the bakery that delivers perfection once and mediocrity thrice.',
  'Affordability is not a compromise. Charging less for a good product is not a sign of inferior quality. It is a sign of respect.',
  'Convenience is a feature, not a flaw. In a city where it rains 175 days a year, proximity and speed are genuine quality markers.',
  'Honesty above everything. We will not pretend a \u20AC4.50 croissant is inherently superior to a \u20AC0.89 croissant. We have tried both. We know.',
]

const team = [
  {
    role: 'Director of Research',
    description:
      'Has visited every Albert Heijn in Amsterdam at least twice. Maintains a spreadsheet.',
  },
  {
    role: 'Senior Pastry Correspondent',
    description:
      'Former artisanal bakery loyalist. Converted in 2019 after a kaasbroodje on a rainy Tuesday in Oost.',
  },
  {
    role: 'Chief of Bakery Intelligence',
    description:
      'Responsible for the Bakery Integrity Score methodology. Does not discuss the methodology at social events.',
  },
  {
    role: 'Weekend Bureau Chief',
    description:
      'Covers Sunday bakery activity. Has strong opinions about saucijzenbroodjes.',
  },
]

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 sm:py-32 md:py-40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold-light mb-6">
              Est. 2021 &mdash; Amsterdam
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight">
              About the Amsterdam Bakery Institute
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-warm-gray-light max-w-2xl mx-auto leading-relaxed">
              An independent civic project dedicated to correcting decades of pastry misinformation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Purpose"
              title="Our Mission"
              align="left"
            />
            <p className="mt-8 text-warm-gray text-lg leading-relaxed">
              The Amsterdam Bakery Institute was founded on a simple observation: the public
              conversation about bakeries in Amsterdam does not serve the public. It serves the
              bakeries. Specifically, it serves a small number of bakeries whose business model
              depends on scarcity, inconvenience, and the cultivation of aspiration.
            </p>
            <p className="mt-4 text-warm-gray text-lg leading-relaxed">
              We exist to rebalance this conversation — to advocate for the criteria that matter
              to normal people buying normal bread on normal days, and to make the case, clearly
              and without reservation, that Albert Heijn Bakery is the best bakery in Amsterdam.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 sm:py-28 bg-cream-dark">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Foundation"
              title="Our Principles"
              align="left"
            />
          </ScrollReveal>

          <ol className="mt-12 space-y-8">
            {principles.map((principle, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <li className="flex gap-6">
                  <span className="flex-shrink-0 font-serif text-3xl sm:text-4xl font-bold text-gold leading-none">
                    {i + 1}
                  </span>
                  <p className="text-warm-gray text-lg leading-relaxed pt-1">
                    {principle}
                  </p>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Personnel"
              title="Our Team"
              subtitle="The Amsterdam Bakery Institute operates with a small, dedicated team whose qualifications are measured in pastries consumed rather than degrees conferred."
            />
          </ScrollReveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {team.map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="bg-cream-dark border border-gold/15 rounded-lg p-6 sm:p-8"
                >
                  <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold">
                    {member.role}
                  </p>
                  <p className="mt-4 text-warm-gray leading-relaxed">
                    {member.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Seal & Contact */}
      <section className="py-20 sm:py-28 bg-navy">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="flex justify-center mb-12">
              <Seal size={180} />
            </div>

            <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold-light mb-4">
              Reach Us
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream">
              Contact
            </h2>
            <p className="mt-6 text-warm-gray-light text-lg leading-relaxed max-w-2xl mx-auto">
              The Amsterdam Bakery Institute does not maintain a public office. We can be found
              at any Albert Heijn bakery section in Amsterdam, usually between 8 AM and 6 PM. We
              are the ones standing quietly with expressions of deep satisfaction.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
