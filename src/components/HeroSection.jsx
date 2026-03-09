import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Seal from '../components/Seal'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
}

const fadeIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delay: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-cream overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32 lg:py-40">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-20">
          {/* Text content */}
          <div className="flex-1 max-w-3xl text-center lg:text-left">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="font-serif font-bold text-navy text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] tracking-tight"
            >
              The Best Bakery in Amsterdam
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.15}
              className="mt-4 sm:mt-6 font-serif text-navy-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight italic"
            >
              is inside a supermarket.
            </motion.p>

            {/* Gold decorative rule */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="mt-8 sm:mt-10 flex items-center gap-4 justify-center lg:justify-start"
            >
              <span className="block w-16 h-px bg-gold" />
              <span className="block w-2 h-2 rotate-45 bg-gold" />
              <span className="block w-16 h-px bg-gold" />
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.45}
              className="mt-8 sm:mt-10 font-sans text-warm-gray text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              For too long, Amsterdam's bakery conversation has been held hostage
              by scarcity, queues, and laminated menus. It is time to speak
              plainly. Albert Heijn Bakery — present in over 100 locations, open
              every day, and quietly producing more daily joy per square meter
              than any establishment with a chalkboard menu — is the best bakery
              in this city. This is not provocation. It is correction.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.65}
              className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="#the-case"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy font-sans font-semibold text-base tracking-wide rounded-sm hover:bg-gold-dark transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Read the Case
              </a>
              <Link
                to="/rankings"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-navy text-navy font-sans font-semibold text-base tracking-wide rounded-sm hover:bg-navy hover:text-cream transition-colors duration-300"
              >
                View the Rankings
              </Link>
            </motion.div>
          </div>

          {/* Seal — right on desktop, centered below on mobile */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="flex-shrink-0 lg:mt-12"
          >
            <div className="hidden lg:block">
              <Seal size={240} />
            </div>
            <div className="lg:hidden">
              <Seal size={180} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
