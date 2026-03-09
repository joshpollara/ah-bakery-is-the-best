import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'
import RainyWindow from '../components/illustrations/RainyWindow'

const reports = [
  {
    location: 'De Pijp',
    time: '8:47 AM — Steady rain',
    body: 'At 8:47 on a Tuesday morning, a man in cycling rain gear is purchasing a roomboter croissant with the quiet efficiency of someone who has done this approximately 900 times. He does not pause. He does not deliberate. Outside, the rain continues. Inside, there is warm pastry.',
    filedBy: 'J. van der Berg, Senior Correspondent',
  },
  {
    location: 'Oost',
    time: '5:38 PM — Late afternoon sun',
    body: 'The post-work procession follows a reliable pattern: enter for dinner ingredients, pause at the bakery section, add one (1) item that was not on the list. Today it is the chocoladebroodje. It will be consumed before the bicycle reaches the first traffic light.',
    filedBy: 'R. Bakker, Chief of Bakery Intelligence',
  },
]

function ReportCard({ report }) {
  return (
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
  )
}

export default function FieldReportsSection() {
  return (
    <section className="bg-cream py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <ScrollReveal>
          <SectionHeading
            eyebrow="DISPATCHES"
            title="Field Reports from Amsterdam"
            subtitle="On-the-ground observations from our embedded pastry correspondents."
          />
        </ScrollReveal>

        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Left column: illustration + De Pijp report */}
          <ScrollReveal className="flex flex-col items-center lg:items-start gap-8">
            <RainyWindow className="w-40 sm:w-48 lg:w-56 mx-auto lg:mx-0" />
            <ReportCard report={reports[0]} />
          </ScrollReveal>

          {/* Right column: Oost report, centered vertically */}
          <ScrollReveal delay={0.1} className="flex items-center">
            <ReportCard report={reports[1]} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
