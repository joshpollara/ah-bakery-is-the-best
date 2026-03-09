import { motion } from 'framer-motion'

export default function AwardCard({ rank, title, item, description, score }) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(27, 42, 74, 0.12)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="bg-cream border border-gold/20 rounded-lg p-5 sm:p-8 cursor-default"
    >
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
    </motion.div>
  )
}
