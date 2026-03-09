import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'

const faqs = [
  {
    question: 'Is this satire?',
    answer:
      'Only in the sense that the truth has become so unfamiliar it reads as comedy. Everything on this site is factually and emotionally accurate.',
  },
  {
    question: 'Have you been to [famous Amsterdam bakery]?',
    answer:
      'Yes. We have been to all of them. We have waited in the queues. We have paid the prices. We have photographed the sourdough. And then we went to Albert Heijn and felt the relief of a civilization that has solved a problem rather than aestheticized it.',
  },
  {
    question: 'Are you saying AH is better than artisanal bakeries?',
    answer:
      "We are saying the definition of 'better' has been corrupted by theater. If 'better' means 'available, affordable, reliable, and capable of producing genuine daily satisfaction,' then yes. Unequivocally.",
  },
  {
    question: 'Is convenience really a bakery virtue?',
    answer:
      'In a city built on water, bicycles, and the daily negotiation of weather, convenience is not merely a virtue. It is a moral position.',
  },
  {
    question: 'Who funds this?',
    answer:
      'Nobody. This is an unfunded civic intervention. We are sustained entirely by conviction and kaasbroodjes.',
  },
]

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-cream-dark">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-6 sm:py-8 text-left cursor-pointer group"
      >
        <h3 className="font-serif text-lg sm:text-xl font-semibold text-navy group-hover:text-gold-dark transition-colors duration-200">
          {question}
        </h3>
        <span
          className={`flex-shrink-0 mt-1 w-6 h-6 flex items-center justify-center font-mono text-lg text-gold transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 sm:pb-8 font-sans text-warm-gray text-base leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function HomeFAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="bg-cream py-24 sm:py-32 lg:py-40">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
        <ScrollReveal>
          <SectionHeading
            eyebrow="COMMON OBJECTIONS"
            title="Frequently Asked Questions"
            subtitle="We anticipated your resistance."
          />
        </ScrollReveal>

        <div className="mt-16 sm:mt-20 border-t border-cream-dark">
          {faqs.map((faq, i) => (
            <ScrollReveal key={faq.question} delay={i * 0.06}>
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
              />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              to="/faq"
              className="inline-flex items-center gap-3 font-sans font-semibold text-navy text-base tracking-wide hover:text-gold-dark transition-colors duration-300 group"
            >
              View All Questions
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
