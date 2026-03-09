import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'

const reports = [
  {
    location: 'De Pijp',
    time: '8:47 AM — Steady rain',
    body: 'The Albert Heijn on Ferdinand Bolstraat is not beautiful. It sits between a phone repair shop and what appears to be a permanently closed yoga studio. Inside, at 8:47 on a Tuesday morning, a man in cycling rain gear is purchasing a roomboter croissant with the quiet efficiency of someone who has done this approximately 900 times. He does not pause. He does not deliberate. He knows what he needs, and it costs €0.89. Outside, the rain continues. Inside, there is warm pastry. This is civic infrastructure at its most fundamental.',
    filedBy: 'J. van der Berg, Senior Correspondent',
  },
  {
    location: 'Amsterdam Zuid',
    time: '12:22 PM — Overcast',
    body: 'The lunch crowd at the Beethovenstraat AH moves with purpose. A woman in a blazer selects a kaasbroodje without breaking stride from the self-checkout. A student holds two appelflappen and a can of energy drink — the meal of someone who has made peace with their choices. The bakery display case is not artful. It is functional. It is replenished every four hours. Nobody has waited more than forty-five seconds. This is what efficiency looks like when it is not trying to impress anyone.',
    filedBy: 'M. de Vries, Urban Pastry Analyst',
  },
  {
    location: 'Oost',
    time: '5:38 PM — Late afternoon sun',
    body: 'The post-work procession at the Eerste van Swindenstraat location follows a reliable pattern: enter for dinner ingredients, pause at the bakery section, add one (1) item that was not on the list. Today it is the chocoladebroodje. It will be consumed before the bicycle reaches the first traffic light. This small act of unplanned joy — repeated thousands of times across hundreds of locations — constitutes one of the largest informal public happiness programs in the Netherlands. No one has applied for a grant.',
    filedBy: 'R. Bakker, Chief of Bakery Intelligence',
  },
  {
    location: 'West',
    time: '11:14 AM — Sunday',
    body: 'Sunday morning in the Kinkerstraat AH has a particular energy. It is the energy of people who did not plan ahead. They are here for bread, eggs, and orange juice, but they are leaving with saucijzenbroodjes because it is Sunday and that is what Sundays are for. The bakery section is modest — four shelves, warm lighting, the faint smell of something that was baked in an industrial oven with commercial-grade affection. A child is pointing at a donut. Their parent is already reaching for it. This is not a food experience. It is a family institution.',
    filedBy: 'S. Jansen, Weekend Bureau Chief',
  },
]

export default function FieldReportsSection() {
  return (
    <section className="bg-cream py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <ScrollReveal>
          <SectionHeading
            eyebrow="DISPATCHES"
            title="Field Reports from Amsterdam"
            subtitle="On-the-ground observations from our embedded pastry correspondents."
          />
        </ScrollReveal>

        <div className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {reports.map((report, i) => (
            <ScrollReveal
              key={report.location}
              delay={i * 0.1}
              className={i % 2 === 1 ? 'lg:mt-12' : ''}
            >
              <article className="bg-white border border-cream-dark rounded-sm p-8 sm:p-10 border-l-4 border-l-gold">
                {/* Header */}
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-6">
                  <span className="font-mono text-xs tracking-[0.2em] uppercase text-gold-dark font-medium">
                    {report.location}
                  </span>
                  <span className="text-cream-dark">|</span>
                  <span className="font-mono text-xs text-warm-gray">
                    {report.time}
                  </span>
                </div>

                {/* Body */}
                <p className="font-serif text-navy text-base sm:text-lg leading-relaxed">
                  {report.body}
                </p>

                {/* Attribution */}
                <div className="mt-8 pt-5 border-t border-cream-dark">
                  <p className="font-mono text-xs tracking-[0.15em] text-warm-gray">
                    Filed by{' '}
                    <span className="text-navy font-medium">
                      {report.filedBy}
                    </span>
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
