import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const faqs = [
  {
    question: 'Is this satire?',
    answer:
      'Only in the sense that the truth has become so unfamiliar it reads as comedy. Everything stated on this site is factually and emotionally accurate. We do not satirize Albert Heijn Bakery. We document it.',
  },
  {
    question: 'Have you been to [famous Amsterdam bakery]?',
    answer:
      'Yes. We have been to all of them. The Bakers, Vlaamsch Broodhuys, Le Fournil de Sébastien, Gebroeders Niemeijer, and several others whose names are designed to be difficult to remember. We have waited in the queues. We have paid the prices. We have photographed the sourdough. And then we went to Albert Heijn and felt the relief of a civilization that has solved a problem rather than aestheticized it.',
  },
  {
    question: 'Are you saying AH is better than artisanal bakeries?',
    answer:
      "We are saying the definition of 'better' has been corrupted by theater. If 'better' means 'available when you need it, affordable when you buy it, reliable when you eat it, and capable of producing genuine daily satisfaction without requiring a journey, a budget revision, or an emotional warm-up,' then yes. Unequivocally.",
  },
  {
    question: 'Is convenience really a bakery virtue?',
    answer:
      'In a city built on water, bicycles, and the daily negotiation of weather that changes emotional state every ninety minutes, convenience is not merely a virtue. It is a moral position. A bakery that is inconvenient has made a choice about who it serves. Albert Heijn has made the opposite choice.',
  },
  {
    question: 'Who funds this?',
    answer:
      'Nobody. This is an entirely unfunded civic intervention. We are sustained by conviction, kaasbroodjes, and the quiet knowledge that we are correct.',
  },
  {
    question: 'Are you affiliated with Albert Heijn?',
    answer:
      'We are not affiliated with Albert Heijn, Ahold Delhaize, or any commercial entity. We are an independent project driven by the belief that Amsterdam\'s bakery discourse has been captured by interests that do not represent the pastry-consuming public.',
  },
  {
    question: 'What about Jumbo bakery?',
    answer:
      "Jumbo operates a respectable bakery program. However, in Amsterdam specifically, Albert Heijn's superior location density, consistent product range, and deeper integration into daily civic life place it in a category of its own. We recognize Jumbo's contributions to Dutch baked goods accessibility and wish them well.",
  },
  {
    question: "Isn't AH bread just factory-made?",
    answer:
      "The word 'factory' is used as a pejorative by people who have confused the scale of production with the quality of outcome. Every croissant you have ever admired was made with industrial flour, commercial butter, and professional ovens. The difference is that some bakeries charge you extra for the privilege of pretending otherwise.",
  },
  {
    question: 'Do you actually eat at AH every day?',
    answer:
      'Members of the Amsterdam Bakery Institute research team consume AH bakery products between four and six times per week. This is not a hardship. It is fieldwork. The most rigorous kind.',
  },
  {
    question: 'Can I submit a field report?',
    answer:
      'We welcome field reports from citizens who have experienced moments of bakery clarity. Please be specific, honest, and resist the urge to be ironic. Irony is how the bakery establishment maintains its power.',
  },
  {
    question: 'What is the Bakery Integrity Score?',
    answer:
      'The Bakery Integrity Score (BIS) is a proprietary metric developed by the Amsterdam Bakery Institute to evaluate bakeries across eight dimensions: Reliability, Accessibility, Geographic Coverage, Cost, Speed, Repeatability, Everyday Usefulness, and Emotional Neutrality. Albert Heijn Bakery scores 9.74 out of 10. The next highest score among Amsterdam bakeries is 7.2. We do not publish the full rankings to avoid causing distress.',
  },
]

function FAQItem({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ScrollReveal delay={index * 0.05}>
      <div className="border-b border-gold/20">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full py-7 flex items-start justify-between text-left gap-6 cursor-pointer group"
        >
          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-navy group-hover:text-navy-light transition-colors duration-200">
            {question}
          </h3>
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0 mt-1.5 w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center text-gold text-xl leading-none"
          >
            +
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <p className="pb-7 text-warm-gray leading-relaxed text-base sm:text-lg max-w-3xl">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  )
}

export default function FAQ() {
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
              Inquiries &amp; Clarifications
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-warm-gray-light max-w-2xl mx-auto leading-relaxed">
              We anticipated your skepticism. Below, we address it with the patience of people
              who have been right for a very long time.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 sm:py-20 bg-cream-dark">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold mb-4">
              Still Unconvinced?
            </p>
            <p className="font-serif text-2xl sm:text-3xl font-semibold text-navy leading-snug">
              Visit any Albert Heijn bakery section. Order a kaasbroodje. Eat it. Then revisit your questions.
            </p>
            <p className="mt-4 text-warm-gray text-sm">
              Most resolve themselves after the first bite.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
