import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'

const testimonials = [
  {
    quote:
      'I used to bike twenty minutes to a bakery where they made me feel inadequate about rye flour. Now I go to AH. I am free.',
    name: 'Daan, 34',
    descriptor: 'recovering bakery snob',
  },
  {
    quote:
      'My roommate asked me where I get my croissants. I said Albert Heijn. She looked at me like I had confessed to a crime. But she tried one. She has not been back to her old bakery since.',
    name: 'Femke, 28',
    descriptor: 'convert',
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
      'The saucijzenbroodje saved my marriage. I am not being metaphorical.',
    name: 'Pieter, 44',
    descriptor: 'unspecified district',
  },
  {
    quote:
      'I brought visitors from Paris. I took them to Albert Heijn bakery. They were confused. Then they were eating. Then they were quiet. It was the most French response possible.',
    name: 'Anouk, 31',
    descriptor: 'dual citizen',
  },
]

const cardVariants = [
  'bg-cream',
  'bg-white',
  'bg-cream',
  'bg-white',
  'bg-cream',
  'bg-white',
]

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <ScrollReveal>
          <SectionHeading
            eyebrow="VOICES"
            title="What Amsterdam Is Saying"
            subtitle="Unsolicited endorsements from citizens who have seen the truth."
          />
        </ScrollReveal>

        <div className="mt-16 sm:mt-20 lg:mt-24 columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.08}>
              <motion.blockquote
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`${cardVariants[i]} break-inside-avoid border border-cream-dark rounded-sm p-8 sm:p-10 cursor-default`}
              >
                {/* Opening quotation mark */}
                <span
                  className="block font-serif text-6xl text-gold/40 leading-none select-none -mb-4"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                {/* Quote */}
                <p className="font-serif text-navy text-lg sm:text-xl leading-relaxed italic">
                  {t.quote}
                </p>

                {/* Attribution */}
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
    </section>
  )
}
