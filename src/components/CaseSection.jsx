import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'
import BakeryCounter from '../components/illustrations/BakeryCounter'

const arguments_ = [
  {
    number: '01',
    title: 'Unmatched Availability',
    body: 'A bakery you cannot reach is a bakery that has failed you. Albert Heijn operates over 1,100 stores across the Netherlands — every neighborhood, every morning, no appointment needed.',
  },
  {
    number: '02',
    title: 'The Convenience-to-Quality Ratio',
    body: 'The most exquisite croissant you can obtain in under ninety seconds while also buying dish soap. In a city where time is currency and rain is constant, this ratio is the only metric that matters.',
  },
  {
    number: '03',
    title: 'Radical Affordability',
    body: 'A kaasbroodje at a boutique bakery costs €4.50 and comes with a sense of occasion. A kaasbroodje at Albert Heijn costs €1.19 and comes with cheese.',
  },
  {
    number: '04',
    title: 'Civic Infrastructure',
    body: 'Albert Heijn Bakery is not a destination. It is infrastructure. The 7:48 AM croissant before the tram, the 12:15 PM broodje during lunch, the 5:30 PM nooduitgang pastry when morale is low.',
  },
]

export default function CaseSection() {
  return (
    <section id="the-case" className="bg-cream py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <ScrollReveal>
          <SectionHeading
            eyebrow="THE ARGUMENT"
            title="Why Albert Heijn Bakery Is the Best"
            subtitle="A claim made not lightly, but after years of observation, repetition, and a refusal to confuse inconvenience with excellence."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <BakeryCounter className="w-full max-w-md mx-auto mb-8 opacity-80" />
        </ScrollReveal>

        <div className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {arguments_.map((arg, i) => (
            <ScrollReveal key={arg.number} delay={i * 0.1}>
              <div className="group h-full bg-white border border-cream-dark rounded-sm p-8 sm:p-10 transition-all duration-300 hover:border-gold/40 hover:shadow-lg">
                <span className="block font-mono text-5xl sm:text-6xl font-bold text-gold-light/60 leading-none select-none">
                  {arg.number}
                </span>

                <h3 className="mt-4 font-serif text-xl sm:text-2xl font-bold text-navy leading-snug">
                  {arg.title}
                </h3>

                <p className="mt-4 font-sans text-warm-gray text-base leading-relaxed">
                  {arg.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
