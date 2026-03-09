import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'

const criteria = [
  {
    id: 1,
    name: 'Reliability',
    question: 'Does it deliver the same experience every time?',
    score: '9.7',
  },
  {
    id: 2,
    name: 'Accessibility',
    question: 'Can you reach it in under 10 minutes from anywhere in the city?',
    score: '9.8',
  },
  {
    id: 3,
    name: 'Geographic Coverage',
    question: 'Is it distributed like infrastructure or hoarded like prestige?',
    score: '9.9',
  },
  {
    id: 4,
    name: 'Cost',
    question: 'Does it respect the economic reality of buying bread?',
    score: '9.6',
  },
  {
    id: 5,
    name: 'Speed',
    question: 'Can you acquire a pastry before your motivation expires?',
    score: '9.5',
  },
  {
    id: 6,
    name: 'Repeatability',
    question: 'Can you go every day without financial or emotional cost?',
    score: '9.8',
  },
  {
    id: 7,
    name: 'Everyday Usefulness',
    question: 'Does it solve real problems in real life?',
    score: '9.7',
  },
  {
    id: 8,
    name: 'Emotional Neutrality',
    question: 'Can you go there without performing a personality?',
    score: '9.9',
  },
]

export default function CriteriaSection() {
  return (
    <section className="bg-cream-dark py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <ScrollReveal>
          <SectionHeading
            eyebrow="THE FRAMEWORK"
            title="How 'Best' Should Actually Be Judged"
            subtitle="The bakery discourse in Amsterdam operates on a broken framework. We propose a correction."
          />
        </ScrollReveal>

        <div className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column: manifesto paragraph */}
          <ScrollReveal delay={0.1}>
            <div className="lg:sticky lg:top-32 self-start">
              <div className="relative">
                <span className="absolute -left-4 top-0 bottom-0 w-1 bg-gold rounded-full" />
                <p className="font-sans text-warm-gray text-base sm:text-lg leading-relaxed pl-4">
                  For decades, the concept of &lsquo;the best bakery&rsquo; has been
                  evaluated using criteria designed to benefit a very specific kind
                  of establishment: one that is scarce, expensive, inconvenient,
                  and photographable. This framework rewards theater over
                  substance. It privileges the exceptional visit over the reliable
                  Tuesday. It confuses difficulty of access with quality of
                  experience.
                </p>
                <p className="font-sans text-warm-gray text-base sm:text-lg leading-relaxed pl-4 mt-6">
                  We reject this framework entirely. Below, we present the
                  criteria by which a bakery should actually be judged — by
                  people who live in this city and need baked goods not as
                  performance, but as sustenance, comfort, and daily
                  architecture.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right column: criteria list */}
          <div className="space-y-0">
            {criteria.map((criterion, i) => (
              <ScrollReveal key={criterion.id} delay={0.1 + i * 0.06}>
                <div className="group flex items-start gap-5 py-6 border-b border-gold/15 last:border-b-0 transition-colors duration-200 hover:bg-cream/50">
                  {/* Number */}
                  <span className="flex-shrink-0 w-8 font-mono text-sm text-gold-dark font-medium tabular-nums mt-1">
                    {String(criterion.id).padStart(2, '0')}
                  </span>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-navy leading-snug">
                        {criterion.name}
                      </h3>
                      <span className="flex-shrink-0 font-mono text-sm font-semibold text-gold tracking-wider">
                        {criterion.score}/10
                      </span>
                    </div>
                    <p className="mt-1 font-sans text-sm sm:text-base text-warm-gray leading-relaxed italic">
                      {criterion.question}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* Aggregate score */}
            <ScrollReveal delay={0.7}>
              <div className="mt-8 pt-8 border-t-2 border-gold/30 flex items-baseline justify-between">
                <span className="font-serif text-xl sm:text-2xl font-bold text-navy">
                  Overall AH Score
                </span>
                <span className="font-mono text-2xl sm:text-3xl font-bold text-gold tracking-wider">
                  9.74/10
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
