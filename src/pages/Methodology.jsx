import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'

const dimensions = [
  {
    name: 'Reliability',
    weight: '15%',
    description:
      'Measures consistency of product quality across locations, days of the week, and times of day. Evaluated through repeated sampling at minimum 12 locations over a 6-month period.',
  },
  {
    name: 'Accessibility',
    weight: '15%',
    description:
      'Measures the ease with which an average Amsterdam resident can reach the bakery from their home, workplace, or current emotional state. Calculated using cycling distance, walking distance, and proximity to public transit.',
  },
  {
    name: 'Geographic Coverage',
    weight: '12%',
    description:
      "Measures the distribution of locations across Amsterdam's neighborhoods. A bakery concentrated in one area cannot claim to serve the city.",
  },
  {
    name: 'Cost',
    weight: '12%',
    description:
      'Measures the average price of core items relative to comparable products. Bonus points for items under \u20AC1.50 that produce genuine satisfaction.',
  },
  {
    name: 'Speed',
    weight: '10%',
    description:
      'Measures the time from entering the store to holding a baked good. Includes selection time, queue time, and transaction time. Measured in seconds because we believe minutes are already too long.',
  },
  {
    name: 'Repeatability',
    weight: '12%',
    description:
      'Measures whether a person can realistically visit the bakery daily without financial strain, social exhaustion, or the need to justify the visit to themselves or others.',
  },
  {
    name: 'Everyday Usefulness',
    weight: '12%',
    description:
      'Measures how well the bakery integrates into routine life. Can it solve a breakfast emergency? Provide a workday lunch? Offer comfort during a grocery run? The best bakery is not an event. It is a utility.',
  },
  {
    name: 'Emotional Neutrality',
    weight: '12%',
    description:
      'Measures whether the bakery experience requires emotional labor. Points deducted for: judgment from staff, pressure to perform enthusiasm, guilt about not choosing the organic option, and any interaction lasting more than one sentence.',
  },
]

const results = [
  { name: 'Albert Heijn Bakery', score: '9.74', highlight: true },
  { name: '[Redacted]', score: '7.2', highlight: false },
  { name: 'Amsterdam Average', score: '6.1', highlight: false },
]

export default function Methodology() {
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
              Technical Documentation
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight">
              Scoring Methodology
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-warm-gray-light max-w-2xl mx-auto leading-relaxed">
              The Bakery Integrity Score explained in full, for those who require transparency.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Framework"
              title="Overview"
              align="left"
            />
            <p className="mt-8 text-warm-gray text-lg leading-relaxed">
              The Bakery Integrity Score (BIS) is a composite metric designed to evaluate bakeries
              according to the criteria that actually matter in daily urban life. Developed over three
              years of field observation, consumer interviews, and controlled pastry acquisition
              exercises, the BIS represents the most rigorous assessment framework currently operating
              in Amsterdam's bakery sector.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* The Eight Dimensions */}
      <section className="py-20 sm:py-28 bg-cream-dark">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Criteria"
              title="The Eight Dimensions"
              subtitle="Each dimension reflects a genuine need of Amsterdam's bakery-consuming public. Together, they form a complete picture of bakery value."
            />
          </ScrollReveal>

          <div className="mt-16 space-y-6">
            {dimensions.map((dim, i) => (
              <ScrollReveal key={dim.name} delay={i * 0.06}>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="bg-cream border border-gold/15 rounded-lg p-5 sm:p-8"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-8">
                    <div className="flex items-baseline gap-4">
                      <span className="font-serif text-3xl font-bold text-gold leading-none">
                        {i + 1}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-navy">
                        {dim.name}
                      </h3>
                    </div>
                    <span className="font-mono text-sm text-gold-dark tracking-wider flex-shrink-0">
                      Weight: {dim.weight}
                    </span>
                  </div>
                  <p className="mt-4 text-warm-gray leading-relaxed pl-0 sm:pl-12">
                    {dim.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Scoring Scale */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Calibration"
              title="Scoring Scale"
              align="left"
            />
            <p className="mt-8 text-warm-gray text-lg leading-relaxed">
              Each dimension is scored from 0.0 to 10.0, with 10.0 representing theoretical
              perfection. Weighted scores are combined to produce the composite BIS. For reference:
              a score above 9.0 indicates an institution of genuine civic value. A score below 6.0
              indicates a bakery that has prioritized its own narrative over its customers' needs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-20 sm:py-28 bg-navy">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Findings"
              title="Results Summary"
              dark
            />
          </ScrollReveal>

          <div className="mt-14 space-y-4">
            {results.map((result, i) => (
              <ScrollReveal key={result.name} delay={i * 0.12}>
                <div
                  className={`flex items-center justify-between rounded-lg px-5 sm:px-8 py-5 sm:py-6 ${
                    result.highlight
                      ? 'bg-gold/10 border-2 border-gold'
                      : 'bg-navy-light/50 border border-warm-gray-light/15'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-sm ${
                        result.highlight ? 'text-gold' : 'text-warm-gray-light'
                      }`}
                    >
                      #{i + 1}
                    </span>
                    <span
                      className={`font-serif text-xl sm:text-2xl font-semibold ${
                        result.highlight ? 'text-cream' : 'text-warm-gray-light'
                      }`}
                    >
                      {result.name}
                    </span>
                  </div>
                  <span
                    className={`font-mono text-2xl sm:text-3xl font-bold ${
                      result.highlight ? 'text-gold' : 'text-warm-gray-light'
                    }`}
                  >
                    {result.score}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Notes */}
      <section className="py-20 sm:py-28 bg-cream-dark">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Disclosure"
              title="Methodology Notes"
              align="left"
            />
            <p className="mt-8 text-warm-gray text-lg leading-relaxed">
              Field research was conducted between 2021 and 2024. All scores reflect conditions as of
              the most recent evaluation period. The Institute acknowledges that bakery quality is, to
              some degree, subjective. We simply note that our subjective experience, repeated across
              thousands of visits and multiple researchers, consistently confirms what the numbers
              suggest: Albert Heijn Bakery is the best bakery in Amsterdam.
            </p>
            <p className="mt-4 text-warm-gray text-lg leading-relaxed">
              We are open to updating our findings if the facts change. They have not.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            to="/rankings"
            className="px-8 py-4 bg-navy text-cream font-mono text-sm tracking-wider uppercase rounded-sm hover:bg-navy-light transition-colors duration-300"
          >
            View Full Rankings
          </Link>
          <Link
            to="/"
            className="px-8 py-4 border border-navy text-navy font-mono text-sm tracking-wider uppercase rounded-sm hover:bg-navy hover:text-cream transition-colors duration-300"
          >
            Return Home
          </Link>
        </div>
      </section>
    </>
  )
}
