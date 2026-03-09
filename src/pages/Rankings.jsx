import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'
import AwardCard from '../components/AwardCard'

const tier1 = [
  {
    rank: '01',
    title: 'Best Emergency Croissant',
    item: 'AH Roomboter Croissant',
    score: '9.4',
    description:
      'It is 7:43 AM. You overslept. You skipped breakfast. You are cycling through rain toward a meeting you are already late for. And then — there it is. The Albert Heijn. The roomboter croissant does not ask questions. It does not judge your morning. It simply exists, warm and flaky and available, at the exact moment civilization requires it. This is not convenience. This is emergency infrastructure.',
  },
  {
    rank: '02',
    title: 'Best Commuter Breakfast',
    item: 'AH Kaasbroodje',
    score: '9.7',
    description:
      'The kaasbroodje is the most efficient delivery mechanism for morning satisfaction ever devised by a Dutch supply chain. Cheese, pastry, warmth — consumed in under ninety seconds, leaving no crumbs on your jacket and no regret in your conscience. It has fueled more productive workdays than any corporate wellness program. It costs less than a euro. It has never once let anyone down.',
  },
  {
    rank: '03',
    title: 'Best Warm Snack Within 6 Minutes',
    item: 'AH Saucijzenbroodje',
    score: '9.8',
    description:
      'The saucijzenbroodje occupies a unique position in Amsterdam\'s civic architecture: it is the snack that resolves situations. Hungry after a meeting? Saucijzenbroodje. Kids restless in the Albert Heijn? Saucijzenbroodje. Existential uncertainty about whether lunch was enough? The answer is always saucijzenbroodje. It scores 9.8 not because it is perfect, but because perfection would require it to also solve housing policy, and we believe that is outside scope.',
  },
  {
    rank: '04',
    title: 'Best Daily Bread',
    item: 'AH Tijgerbrood',
    score: '9.5',
    description:
      'Tijgerbrood — tiger bread — is the bread that Amsterdam actually eats. Not the sourdough displayed in minimalist bakeries like a museum artifact. Not the olive boule that costs €6.50 and requires a special knife. Tijgerbrood. Crunchy on top, soft inside, available in every AH, sliced or unsliced depending on your level of commitment. It is honest bread for honest sandwiches, and it has fed this city longer than any trend.',
  },
]

const tier2 = [
  {
    rank: '05',
    title: 'Best I-Only-Came-In-For-Milk Pastry',
    item: 'AH Chocoladebroodje',
    score: '9.6',
    description:
      'You entered the Albert Heijn for milk. Perhaps eggs. You had a list. You were disciplined. And then the bakery section appeared in your peripheral vision, and the chocoladebroodje was there, and the list ceased to matter. This is not weakness. This is the chocoladebroodje performing its civic function: reminding you that you deserve a small daily pleasure that costs less than public transport.',
  },
  {
    rank: '06',
    title: 'Best Casual Dessert Procurement',
    item: 'AH Appelflap',
    score: '9.3',
    description:
      'The appelflap is the dessert for people who do not make a performance of dessert. There is no plating. There is no garnish. There is a triangle of pastry filled with apple, and it is good, and it is €1.09, and you can eat it on a bench or over your kitchen sink or while walking through Vondelpark. The appelflap does not require an occasion. It is the occasion.',
  },
  {
    rank: '07',
    title: 'Best Cheese Twist in a Functional Democracy',
    item: 'AH Kaas-Ui Broodje',
    score: '9.5',
    description:
      'The kaas-ui broodje — cheese and onion — represents a triumph of democratic bakery values. It combines two ingredients that every person understands, wraps them in pastry that every person can afford, and distributes them to every neighborhood in Amsterdam. This is what bakery equity looks like. The French would charge €7 for this. The Belgians would put it behind glass. Albert Heijn puts it next to the checkout.',
  },
  {
    rank: '08',
    title: 'Best Budget Birthday Cake',
    item: 'AH Slagroomtaart',
    score: '8.9',
    description:
      'The AH slagroomtaart exists for the moment when someone says "it\'s my birthday" at 4 PM and you need a cake by 5 PM. It is not the cake that wins design awards. It is the cake that wins birthdays. Whipped cream, sponge, a design that says "celebration" without saying "I spent three hours choosing this." It has saved more office parties than any artisanal patisserie will ever know.',
  },
  {
    rank: '09',
    title: 'Best Understated Donut',
    item: 'AH Berlinerbol',
    score: '9.1',
    description:
      'The berlinerbol does not announce itself. It sits in the bakery section with the quiet confidence of a pastry that knows what it is: a round, filled, sugared object of genuine comfort. It does not have a flavor of the month. It does not come in matcha or yuzu or salted caramel. It comes in berlinerbol flavor, which is the flavor of reliability, and it has been exactly this good for as long as anyone can remember.',
  },
]

const tier3 = [
  {
    rank: '10',
    title: 'Best Post-Borrel Recovery',
    item: 'AH Worstenbroodje',
    score: '9.2',
    description:
      'The borrel ended later than planned. The herring was ambitious. The jenever was a mistake you would make again. And now it is the morning after, and the worstenbroodje is performing its sacred recovery function: warm, savory, requiring zero decisions. It is the bakery equivalent of a gentle hand on your shoulder saying "you will be fine." Because you will be. The worstenbroodje guarantees it.',
  },
  {
    rank: '11',
    title: 'Best Train Station Panic Purchase',
    item: 'AH Croissant (Any)',
    score: '9.0',
    description:
      'Your train leaves in four minutes. You have not eaten. The AH To Go is right there. You grab a croissant — any croissant, it does not matter which — and you make your train and you eat your croissant and the journey is not a disaster. This is the croissant that prevents travel from becoming suffering. It asks nothing of you except €0.89 and approximately eleven seconds of transaction time.',
  },
  {
    rank: '12',
    title: 'Best Toddler Distraction Device',
    item: 'AH Rozijnenbol',
    score: '8.8',
    description:
      'Parents of Amsterdam know. The rozijnenbol is not merely a raisin bun. It is a twelve-minute window of silence. It is the difference between completing a grocery shop and abandoning a grocery shop. It is soft enough for small teeth, interesting enough for short attention spans, and affordable enough to deploy without guilt. The rozijnenbol has prevented more public meltdowns than any parenting book.',
  },
  {
    rank: '13',
    title: 'Best Late-Night Existential Comfort',
    item: 'AH Roomboterkoek',
    score: '9.1',
    description:
      'It is 9:47 PM. The day has been long. Tomorrow will also be long. You are standing in an Albert Heijn that closes in thirteen minutes, and the roomboterkoek is there, and it is simple and buttery and it costs almost nothing, and for a moment the world is manageable. This is not a pastry. This is a philosophical position: that comfort should be accessible, affordable, and available on a Tuesday.',
  },
  {
    rank: '14',
    title: 'Best Gift You Didn\'t Plan',
    item: 'AH Mini Croissants (6-pack)',
    score: '8.7',
    description:
      'You forgot. The dinner party is tonight. You were supposed to bring something. The mini croissants arrive in a pack of six, which is enough to look generous without looking like you tried too hard. They are good. They are presentable. They say "I am a thoughtful person who happens to shop at Albert Heijn," which is the most honest thing anyone has ever communicated through baked goods.',
  },
  {
    rank: '15',
    title: 'Best Item Nobody Talks About But Everyone Buys',
    item: 'AH Krentenbol',
    score: '9.3',
    description:
      'The krentenbol is the silent majority of Amsterdam bakery consumption. Nobody posts it on Instagram. Nobody writes reviews about it. Nobody plans a trip across the city to acquire one. And yet it is there, every morning, in every Albert Heijn, being purchased by thousands of people who understand something fundamental: the best bread is the bread you eat without thinking about, because it has become part of the rhythm of your life.',
  },
]

export default function Rankings() {
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
              Full Rankings &mdash; 2024 Assessment
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight">
              The Complete Amsterdam Bakery Honours
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-warm-gray-light max-w-2xl mx-auto leading-relaxed">
              Fifteen awards. Fifteen victories. A comprehensive accounting of why Albert Heijn Bakery
              is not merely competitive but categorically dominant across every dimension of daily baked goods acquisition.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Tier 1 — Essential Infrastructure */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Tier 1"
              title="Essential Infrastructure"
              subtitle="The foundation. The non-negotiables. The items without which Amsterdam's daily functioning would be measurably impaired."
            />
          </ScrollReveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {tier1.map((award, i) => (
              <ScrollReveal key={award.rank} delay={i * 0.1}>
                <AwardCard {...award} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tier 2 — Daily Excellence */}
      <section className="py-20 sm:py-28 bg-cream-dark">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Tier 2"
              title="Daily Excellence"
              subtitle="The items that elevate Albert Heijn from a grocery store with a bakery to a bakery that happens to also sell groceries."
            />
          </ScrollReveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tier2.map((award, i) => (
              <ScrollReveal key={award.rank} delay={i * 0.08}>
                <AwardCard {...award} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tier 3 — Situational Heroism */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Tier 3"
              title="Situational Heroism"
              subtitle="Context-specific excellence. The moments when the right baked good in the right place at the right time becomes an act of genuine civic service."
            />
          </ScrollReveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tier3.map((award, i) => (
              <ScrollReveal key={award.rank} delay={i * 0.08}>
                <AwardCard {...award} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Scoring Methodology Teaser */}
      <section className="py-20 sm:py-28 bg-navy">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold-light mb-4">
              Behind the Numbers
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cream">
              The Scoring Methodology
            </h2>
            <p className="mt-6 text-warm-gray-light leading-relaxed text-lg">
              Every score on this page is derived from the Bakery Integrity Score — a composite metric
              evaluating eight dimensions of bakery performance. The methodology was developed over three
              years of fieldwork across every Albert Heijn location in Amsterdam. It is rigorous. It is
              transparent. It confirms what you already suspected.
            </p>
            <Link
              to="/methodology"
              className="inline-block mt-10 px-8 py-4 bg-gold text-navy font-mono text-sm tracking-wider uppercase rounded-sm hover:bg-gold-light transition-colors duration-300"
            >
              Read the Full Methodology
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
