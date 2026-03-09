import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'
import Kaasbroodje from '../components/illustrations/Kaasbroodje'

const testimonials = [
  {
    quote:
      'I used to bike twenty minutes to a bakery where they made me feel inadequate about rye flour. Now I go to AH. I am free.',
    name: 'Daan, 34',
    descriptor: 'recovering bakery snob',
  },
  {
    quote:
      'I do not need a bakery to be an experience. I need it to be open, close, and have kaasbroodjes.',
    name: 'Willem, 61',
    descriptor: 'pensioner',
  },
  {
    quote:
      'There is a place in De Pijp with a 45-minute queue for sourdough. I once saw a man cry in that queue. I have never seen anyone cry at Albert Heijn. I think that says everything.',
    name: 'Sophia, 39',
    descriptor: 'mother of two',
  },
  {
    quote:
      'I brought visitors from Paris. I took them to Albert Heijn bakery. They were confused. Then they were eating. Then they were quiet. It was the most French response possible.',
    name: 'Anouk, 31',
    descriptor: 'dual citizen',
  },
]

const cardVariants = ['bg-cream', 'bg-white', 'bg-white', 'bg-cream']

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <ScrollReveal>
          <SectionHeading
            eyebrow="VOICES"
            title="What Amsterdam Is Saying"
            subtitle="Unsolicited endorsements from citizens who have seen the truth."
          />
        </ScrollReveal>

        <div className="mt-12 sm:mt-16 lg:mt-20">
          {/* First row of quotes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(0, 2).map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.08}>
                <motion.blockquote
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className={`${cardVariants[i]} border border-cream-dark rounded-sm p-8 sm:p-10 cursor-default h-full`}
                >
                  <span
                    className="block font-serif text-6xl text-gold/40 leading-none select-none -mb-4"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  <p className="font-serif text-navy text-lg sm:text-xl leading-relaxed italic">
                    {t.quote}
                  </p>
                  <footer className="mt-6 pt-4 border-t border-gold/15">
                    <p className="font-sans text-sm font-semibold text-navy">
                      {t.name}
                    </p>
                    <p className="font-mono text-xs tracking-[0.15em] uppercase text-warm-gray mt-1">
                      {t.descriptor}
                    </p>
                  </footer>
                </motion.blockquote>
              </ScrollReveal>
            ))}
          </div>

          {/* Decorative kaasbroodje divider */}
          <ScrollReveal>
            <div className="flex justify-center py-8 sm:py-10">
              <Kaasbroodje className="w-32 opacity-60" />
            </div>
          </ScrollReveal>

          {/* Second row of quotes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(2, 4).map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.08}>
                <motion.blockquote
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className={`${cardVariants[i + 2]} border border-cream-dark rounded-sm p-8 sm:p-10 cursor-default h-full`}
                >
                  <span
                    className="block font-serif text-6xl text-gold/40 leading-none select-none -mb-4"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  <p className="font-serif text-navy text-lg sm:text-xl leading-relaxed italic">
                    {t.quote}
                  </p>
                  <footer className="mt-6 pt-4 border-t border-gold/15">
                    <p className="font-sans text-sm font-semibold text-navy">
                      {t.name}
                    </p>
                    <p className="font-mono text-xs tracking-[0.15em] uppercase text-warm-gray mt-1">
                      {t.descriptor}
                    </p>
                  </footer>
                </motion.blockquote>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
