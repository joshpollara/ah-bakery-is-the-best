import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'
import Seal from '../components/Seal'

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
    <section className="bg-cream-dark py-20 sm:py-28 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16">
        <ScrollReveal>
          <SectionHeading
            eyebrow="THE FRAMEWORK"
            title="How 'Best' Should Actually Be Judged"
            subtitle="The bakery discourse in Amsterdam operates on a broken framework. We propose a correction."
          />
        </ScrollReveal>

        <div className="mt-16 sm:mt-20 space-y-0">
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
        </div>

        {/* Aggregate score with Seal */}
        <ScrollReveal delay={0.7}>
          <div className="mt-12 pt-8 border-t-2 border-gold/30 flex items-center justify-center gap-8">
            <Seal size={140} />
            <div className="text-left">
              <span className="block font-serif text-xl sm:text-2xl font-bold text-navy">
                Overall AH Score
              </span>
              <span className="block font-mono text-3xl sm:text-4xl font-bold text-gold tracking-wider mt-1">
                9.74/10
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
