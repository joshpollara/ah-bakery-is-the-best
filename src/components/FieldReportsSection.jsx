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
    <article className="bg-white border border-cream-dark rounded-sm p-6 sm:p-8 border-l-4 border-l-gold h-full flex flex-col">
      {/* Header */}
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-5">
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-gold-dark font-medium">
          {report.location}
        </span>
        <span className="text-cream-dark">|</span>
        <span className="font-mono text-xs text-warm-gray">
          {report.time}
        </span>
      </div>

      {/* Body */}
      <p className="font-serif text-navy text-base sm:text-lg leading-relaxed flex-1">
        {report.body}
      </p>

      {/* Attribution */}
      <div className="mt-6 pt-4 border-t border-cream-dark">
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
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16">
          {/* Left: heading + illustration */}
          <div className="lg:w-1/3 flex flex-col items-center lg:items-start lg:sticky lg:top-28">
            <ScrollReveal>
              <SectionHeading
                eyebrow="DISPATCHES"
                title="Field Reports from Amsterdam"
                subtitle="On-the-ground observations from our embedded pastry correspondents."
                align="left"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <RainyWindow className="w-40 sm:w-48 mt-8 opacity-80" />
            </ScrollReveal>
          </div>

          {/* Right: report cards aligned at top */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {reports.map((report, i) => (
              <ScrollReveal key={report.location} delay={i * 0.1}>
                <ReportCard report={report} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
