import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'
import AwardCard from '../components/AwardCard'

const awards = [
  {
    rank: 1,
    title: 'Best Emergency Croissant',
    item: 'AH Roomboter Croissant',
    description:
      'When the morning has already failed and only laminated dough can restore order. Available within 400 meters of your current emotional state.',
    score: 9.4,
  },
  {
    rank: 2,
    title: 'Best I-Only-Came-In-For-Milk Pastry',
    item: 'AH Chocoladebroodje',
    description:
      'You entered for dairy. You leave with chocolate encased in butter. This is not weakness. This is the bakery working as intended.',
    score: 9.6,
  },
  {
    rank: 3,
    title: 'Best Commuter Breakfast',
    item: 'AH Kaasbroodje',
    description:
      'Consumed between the front door and the bicycle lock. Requires one hand. Provides complete nutritional morale for the journey ahead. The most efficient breakfast in Dutch public life.',
    score: 9.7,
  },
  {
    rank: 4,
    title: 'Best Casual Dessert Procurement',
    item: 'AH Appelflap',
    description:
      'You did not plan dessert. Dessert found you in aisle seven. The appelflap asks nothing of you except €1.29 and the willingness to accept that life can be this simple.',
    score: 9.3,
  },
  {
    rank: 5,
    title: 'Best Cheese Twist in a Functional Democracy',
    item: 'AH Kaas-Ui Broodje',
    description:
      'A society is measured not by its Michelin stars but by the quality of cheese-and-onion pastry available to its average citizen on an average Wednesday. The Netherlands passes.',
    score: 9.5,
  },
  {
    rank: 6,
    title: 'Best Warm Snack Within 6 Minutes of Your House',
    item: 'AH Saucijzenbroodje',
    description:
      'The saucijzenbroodje does not photograph well. It does not need to. It is warm. It is €1.39. It is six minutes from your house. It has resolved more existential crises than therapy.',
    score: 9.8,
  },
]

export default function AwardsSection() {
  return (
    <section className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <ScrollReveal>
          <SectionHeading
            eyebrow="THE AWARDS"
            title="The Amsterdam Bakery Honours"
            subtitle="Recognizing excellence in categories that actually matter to people who eat bread."
          />
        </ScrollReveal>

        <div className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {awards.map((award, i) => (
            <ScrollReveal key={award.rank} delay={i * 0.08}>
              <AwardCard
                rank={award.rank}
                title={award.title}
                item={award.item}
                description={award.description}
                score={award.score}
              />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-16 text-center">
            <Link
              to="/rankings"
              className="inline-flex items-center gap-3 font-sans font-semibold text-navy text-base tracking-wide hover:text-gold-dark transition-colors duration-300 group"
            >
              View Full Rankings
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
