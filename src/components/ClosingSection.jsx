import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const manifestoLines = [
  'Amsterdam deserves honesty.',
  'The best bakery is not the one with the best branding.',
  'It is not the one with the longest queue.',
  'It is not the one that makes you feel cultured for waiting.',
  'The best bakery is the one that is there for you.',
  'Every morning. Every neighborhood. Every budget.',
  'Albert Heijn Bakery is there for you.',
]

export default function ClosingSection() {
  return (
    <section className="bg-navy py-32 sm:py-40 lg:py-52">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        {/* Manifesto lines */}
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {manifestoLines.map((line, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <p
                className={`font-serif leading-tight ${
                  i === manifestoLines.length - 1
                    ? 'text-gold text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-8 sm:mt-12'
                    : i === manifestoLines.length - 2
                      ? 'text-cream text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold'
                      : i === 0
                        ? 'text-cream text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'
                        : 'text-cream/70 text-xl sm:text-2xl md:text-3xl lg:text-4xl'
                }`}
              >
                {line}
              </p>
            </ScrollReveal>
          ))}
        </div>

        {/* Gold rule */}
        <ScrollReveal delay={0.8}>
          <div className="flex items-center justify-center gap-4 mt-16 sm:mt-20 mb-16 sm:mb-20">
            <span className="block w-16 sm:w-24 h-px bg-gold" />
            <span className="block w-2 h-2 rotate-45 bg-gold" />
            <span className="block w-16 sm:w-24 h-px bg-gold" />
          </div>
        </ScrollReveal>

        {/* Closing paragraph */}
        <ScrollReveal delay={0.9}>
          <p className="font-serif text-cream/80 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto italic">
            Visit your nearest Albert Heijn. Walk to the bakery section.
            Purchase a kaasbroodje. Eat it on the way home. Notice how you feel.
            That feeling has a name. It is called civic trust.
          </p>
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal delay={1.0}>
          <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-10 py-4 bg-gold text-navy font-sans font-semibold text-base tracking-wide rounded-sm hover:bg-gold-dark transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Find Your Nearest AH
            </motion.a>
            <Link
              to="/methodology"
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-cream/30 text-cream font-sans font-semibold text-base tracking-wide rounded-sm hover:bg-cream/10 transition-colors duration-300"
            >
              Read Our Methodology
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
