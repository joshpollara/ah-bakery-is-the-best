import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'

const arguments_ = [
  {
    number: '01',
    title: 'Unmatched Availability',
    body: 'A bakery you cannot reach is a bakery that has failed you. Albert Heijn operates over 1,100 stores across the Netherlands, with more than 100 in Amsterdam alone. Every neighborhood. Every morning. No appointment needed, no reservation required, no queue stretching past a canal bridge. It is simply there. This is not a limitation. It is a superpower.',
  },
  {
    number: '02',
    title: 'The Convenience-to-Quality Ratio',
    body: 'The croissant at Albert Heijn is not the most exquisite croissant you have ever tasted. It is the most exquisite croissant you can obtain in under ninety seconds while also buying dish soap. This is not a caveat. In a city where time is currency and rain is constant, this ratio is the only metric that matters.',
  },
  {
    number: '03',
    title: 'Radical Affordability',
    body: 'A kaasbroodje at a boutique bakery costs \u20AC4.50 and comes with a sense of occasion. A kaasbroodje at Albert Heijn costs \u20AC1.19 and comes with cheese. Both contain flour, butter, and heat. One of them respects your wallet. The other respects its own Instagram grid.',
  },
  {
    number: '04',
    title: 'Emotional Accessibility',
    body: "You do not need to perform enthusiasm to buy bread at Albert Heijn. There is no barista judging your pronunciation of \u2018pain au chocolat.\u2019 There is no pressure to appreciate the sourdough\u2019s terroir. You simply point, pay, and experience a small, reliable unit of happiness. This is freedom.",
  },
  {
    number: '05',
    title: 'Civic Infrastructure',
    body: 'Albert Heijn Bakery is not a destination. It is infrastructure. Like bike lanes and bridge openings, it is woven into the daily operation of Amsterdam. The 7:48 AM croissant before the tram. The 12:15 PM broodje during lunch. The 5:30 PM nooduitgang pastry when dinner is two hours away and morale is low. It is essential services.',
  },
  {
    number: '06',
    title: 'Honest Consistency',
    body: 'The chocolate croissant at Albert Heijn tastes the same on Monday as it does on Saturday. The same in De Pijp as in Noord. This is not a flaw. This is a promise. In an age of curated unpredictability, Albert Heijn offers the rarest luxury of all: knowing exactly what you are going to get, and being completely fine with it.',
  },
]

export default function CaseSection() {
  return (
    <section id="the-case" className="bg-cream py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <ScrollReveal>
          <SectionHeading
            eyebrow="THE ARGUMENT"
            title="Why Albert Heijn Bakery Is the Best"
            subtitle="A claim made not lightly, but after years of observation, repetition, and a refusal to confuse inconvenience with excellence."
          />
        </ScrollReveal>

        <div className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
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
