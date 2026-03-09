import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AwardCard({ rank, title, item, description, score, tastingNotes }) {
  const [notesOpen, setNotesOpen] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(27, 42, 74, 0.12)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="bg-cream border border-gold/20 rounded-lg overflow-hidden cursor-default"
    >
      <div className="p-5 sm:p-8">
        {/* Rank */}
        <span className="font-serif text-4xl sm:text-5xl font-bold text-gold leading-none">
          {rank}
        </span>

        {/* Award category title */}
        <p className="mt-3 sm:mt-4 font-mono text-xs tracking-[0.2em] uppercase text-warm-gray">
          {title}
        </p>

        {/* Winning item */}
        <h3 className="mt-2 font-serif text-xl sm:text-2xl font-semibold text-navy">
          {item}
        </h3>

        {/* Description */}
        <p className="mt-3 font-sans text-sm leading-relaxed text-warm-gray">
          {description}
        </p>

        {/* Score */}
        <div className="mt-5 pt-4 border-t border-gold/15">
          <span className="font-mono text-lg text-navy font-medium">
            {score}
          </span>
          <span className="font-mono text-sm text-warm-gray ml-1">/ 10</span>
        </div>

        {/* Tasting notes trigger */}
        {tastingNotes && !notesOpen && (
          <button
            onClick={() => setNotesOpen(true)}
            className="mt-4 flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-gold-dark/70 hover:text-gold-dark transition-colors duration-300 group"
          >
            <span className="inline-block w-4 h-px bg-gold-dark/40 group-hover:w-6 transition-all duration-300" />
            Read Tasting Notes
          </button>
        )}
      </div>

      {/* Expandable tasting notes */}
      <AnimatePresence>
        {notesOpen && tastingNotes && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="bg-[#2c1e14] px-5 sm:px-8 py-5 sm:py-6 border-t border-[#4a3628]">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#c9a96e] mb-3">
                    Tasting Notes
                  </p>
                  <p className="font-serif italic text-sm sm:text-base leading-relaxed text-[#e8dcc8]">
                    {tastingNotes}
                  </p>
                </div>
                <button
                  onClick={() => setNotesOpen(false)}
                  className="flex-shrink-0 mt-1 text-[#c9a96e]/60 hover:text-[#c9a96e] transition-colors duration-200 text-lg leading-none"
                  aria-label="Close tasting notes"
                >
                  &times;
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
