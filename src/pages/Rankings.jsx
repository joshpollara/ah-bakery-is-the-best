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
    tastingNotes:
      'Opens with a confident butterscotch nose, yielding to a midpalate of compressed air and commercial-grade margarine that, against all reasonable expectation, delivers. The finish is brief but honest — a faint sweetness that reminds you of airports and Tuesday mornings. Pairs well with self-checkout anxiety and the 7:48 tram.',
  },
  {
    rank: '02',
    title: 'Best Commuter Breakfast',
    item: 'AH Kaasbroodje',
    score: '9.7',
    description:
      'The kaasbroodje is the most efficient delivery mechanism for morning satisfaction ever devised by a Dutch supply chain. Cheese, pastry, warmth — consumed in under ninety seconds, leaving no crumbs on your jacket and no regret in your conscience. It has fueled more productive workdays than any corporate wellness program. It costs less than a euro. It has never once let anyone down.',
    tastingNotes:
      'A muscular cheese presence dominates the opening, supported by a pastry shell that understands its role as vehicle rather than protagonist. The Gouda — or something adjacent to Gouda — asserts itself with an unpretentious warmth. Notes of industrial oven, genuine satisfaction, and the quiet courage of not caring what the barista thinks. Pairs with bicycle commutes and mild existential purpose.',
  },
  {
    rank: '03',
    title: 'Best Warm Snack Within 6 Minutes',
    item: 'AH Saucijzenbroodje',
    score: '9.8',
    description:
      'The saucijzenbroodje occupies a unique position in Amsterdam\'s civic architecture: it is the snack that resolves situations. Hungry after a meeting? Saucijzenbroodje. Kids restless in the Albert Heijn? Saucijzenbroodje. Existential uncertainty about whether lunch was enough? The answer is always saucijzenbroodje. It scores 9.8 not because it is perfect, but because perfection would require it to also solve housing policy, and we believe that is outside scope.',
    tastingNotes:
      'A bold, savoury opening of seasoned pork commands immediate respect, wrapped in a pastry jacket that flakes with the confidence of something that has nothing to prove. The meat filling is dense, earnest, and forthright — it does not dabble in subtlety and is better for it. The finish is long, warm, and deeply resolving, like the last page of a novel where everything turns out alright. Pairs with drizzle, existential recovery, and the walk home.',
  },
  {
    rank: '04',
    title: 'Best Daily Bread',
    item: 'AH Tijgerbrood',
    score: '9.5',
    description:
      'Tijgerbrood — tiger bread — is the bread that Amsterdam actually eats. Not the sourdough displayed in minimalist bakeries like a museum artifact. Not the olive boule that costs €6.50 and requires a special knife. Tijgerbrood. Crunchy on top, soft inside, available in every AH, sliced or unsliced depending on your level of commitment. It is honest bread for honest sandwiches, and it has fed this city longer than any trend.',
    tastingNotes:
      'The crust presents a mosaic of rice-flour crackle — toasted, slightly sweet, architecturally fascinating. Beneath it, the crumb offers a yielding softness that speaks of restraint and good hydration. The nose carries yeast and a faintly malty warmth, like a bakery you remember from childhood but cannot precisely locate. Finishes clean, with an invitation to add cheese. Pairs with hagelslag, mature Gouda, and the quiet conviction that simplicity is not the same as settling.',
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
    tastingNotes:
      'The nose presents dark cacao with industrial precision — not artisanal, but authoritative. On the palate, a surprisingly complex interplay between laminated pastry and chocolate that has been heated to the exact temperature of capitulation. The finish lingers with notes of convenience and quiet personal victory. Pairs with a shopping list you have already abandoned.',
  },
  {
    rank: '06',
    title: 'Best Casual Dessert Procurement',
    item: 'AH Appelflap',
    score: '9.3',
    description:
      'The appelflap is the dessert for people who do not make a performance of dessert. There is no plating. There is no garnish. There is a triangle of pastry filled with apple, and it is good, and it is €1.09, and you can eat it on a bench or over your kitchen sink or while walking through Vondelpark. The appelflap does not require an occasion. It is the occasion.',
    tastingNotes:
      'Initial aromatics of stewed apple and cinnamon give way to a pastry that shatters with democratic enthusiasm. The filling is sweet without apology — a fruit compote that has made peace with its processed origins and emerged stronger for it. Finishes with a whisper of nutmeg and the satisfaction of a dessert that required zero forethought. Pairs with park benches and the absence of ambition.',
  },
  {
    rank: '07',
    title: 'Best Cheese Twist in a Functional Democracy',
    item: 'AH Kaas-Ui Broodje',
    score: '9.5',
    description:
      'The kaas-ui broodje — cheese and onion — represents a triumph of democratic bakery values. It combines two ingredients that every person understands, wraps them in pastry that every person can afford, and distributes them to every neighborhood in Amsterdam. This is what bakery equity looks like. The French would charge €7 for this. The Belgians would put it behind glass. Albert Heijn puts it next to the checkout.',
    tastingNotes:
      'The onion arrives first — caramelized, assertive, unapologetic — followed by a cheese note that occupies the midpalate like a warm handshake from someone who genuinely means it. The pastry provides structural integrity without ego. Aftertaste carries hints of democratic values and affordable civic infrastructure. Pairs with municipal elections and a general sense that things are, fundamentally, fine.',
  },
  {
    rank: '08',
    title: 'Best Budget Birthday Cake',
    item: 'AH Slagroomtaart',
    score: '8.9',
    description:
      'The AH slagroomtaart exists for the moment when someone says "it\'s my birthday" at 4 PM and you need a cake by 5 PM. It is not the cake that wins design awards. It is the cake that wins birthdays. Whipped cream, sponge, a design that says "celebration" without saying "I spent three hours choosing this." It has saved more office parties than any artisanal patisserie will ever know.',
    tastingNotes:
      'The cream opens with a cool, neutral sweetness — vanilla-adjacent, unprovocative, deliberately inoffensive in the manner of a successful diplomat. The sponge beneath is moist and yielding, with a crumb structure that suggests competence rather than inspiration. Together they achieve something remarkable: the exact flavor of "happy birthday" as understood by a room of colleagues who are mostly here for the cake. Pairs with plastic forks and singing slightly off-key.',
  },
  {
    rank: '09',
    title: 'Best Understated Donut',
    item: 'AH Berlinerbol',
    score: '9.1',
    description:
      'The berlinerbol does not announce itself. It sits in the bakery section with the quiet confidence of a pastry that knows what it is: a round, filled, sugared object of genuine comfort. It does not have a flavor of the month. It does not come in matcha or yuzu or salted caramel. It comes in berlinerbol flavor, which is the flavor of reliability, and it has been exactly this good for as long as anyone can remember.',
    tastingNotes:
      'Sugar crystals provide the opening texture — a granular sweetness that yields to soft, pillowy dough with the structural integrity of a well-told anecdote. The filling, encountered at the centre like a plot twist you saw coming but still appreciate, delivers custard with notes of vanilla, powdered milk, and institutional competence. The finish is powdery, warm, and deeply uncomplicated. Pairs with coffee from a machine and the knowledge that not everything needs to be elevated.',
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
    tastingNotes:
      'The sausage announces itself with a frank, peppery warmth — restorative, almost medicinal in its savoury conviction. The pastry wrapping is golden, buttery, and forgiving in the way that mornings after require. Midpalate reveals a meaty depth that settles the stomach and, improbably, the soul. Notes of mustard seed, recovery, and the promise that today will be better than yesterday. Pairs with flat water and a renewed commitment to moderation.',
  },
  {
    rank: '11',
    title: 'Best Train Station Panic Purchase',
    item: 'AH Croissant (Any)',
    score: '9.0',
    description:
      'Your train leaves in four minutes. You have not eaten. The AH To Go is right there. You grab a croissant — any croissant, it does not matter which — and you make your train and you eat your croissant and the journey is not a disaster. This is the croissant that prevents travel from becoming suffering. It asks nothing of you except €0.89 and approximately eleven seconds of transaction time.',
    tastingNotes:
      'Evaluated under field conditions at platform velocity. The nose — briefly detected between contactless payment and sprint — suggests butter and urgency. The palate, engaged somewhere between Sloterdijk and Leiden, finds a pastry that is warm enough to comfort but structured enough to survive a backpack. The finish occurs approximately at Schiphol and tastes faintly of relief. Pairs with OV-chipkaart panic and the wrong platform.',
  },
  {
    rank: '12',
    title: 'Best Toddler Distraction Device',
    item: 'AH Rozijnenbol',
    score: '8.8',
    description:
      'Parents of Amsterdam know. The rozijnenbol is not merely a raisin bun. It is a twelve-minute window of silence. It is the difference between completing a grocery shop and abandoning a grocery shop. It is soft enough for small teeth, interesting enough for short attention spans, and affordable enough to deploy without guilt. The rozijnenbol has prevented more public meltdowns than any parenting book.',
    tastingNotes:
      'The crumb is soft, yielding, almost maternal in its gentleness — a texture calibrated for mouths that have not yet mastered molars. Raisins punctuate the interior at irregular intervals, each one a small event horizon of sweetness that buys approximately ninety seconds of focused silence. The nose is mild, bready, and non-threatening. Finishes with a slight stickiness that transfers to all nearby surfaces. Pairs with wet wipes and the ten-items-or-fewer lane.',
  },
  {
    rank: '13',
    title: 'Best Late-Night Existential Comfort',
    item: 'AH Roomboterkoek',
    score: '9.1',
    description:
      'It is 9:47 PM. The day has been long. Tomorrow will also be long. You are standing in an Albert Heijn that closes in thirteen minutes, and the roomboterkoek is there, and it is simple and buttery and it costs almost nothing, and for a moment the world is manageable. This is not a pastry. This is a philosophical position: that comfort should be accessible, affordable, and available on a Tuesday.',
    tastingNotes:
      'Pure butter dominates from first contact — not complex butter, not cultured butter, not butter with a story. Just butter that showed up and did its job. The cake is dense in the manner of something that takes itself seriously without taking itself too seriously. Notes of brown sugar, vanilla, and fluorescent lighting. The finish is warm, slightly greasy, and profoundly consoling. Pairs with the last thirteen minutes before closing and the specific loneliness that is actually just hunger.',
  },
  {
    rank: '14',
    title: 'Best Gift You Didn\'t Plan',
    item: 'AH Mini Croissants (6-pack)',
    score: '8.7',
    description:
      'You forgot. The dinner party is tonight. You were supposed to bring something. The mini croissants arrive in a pack of six, which is enough to look generous without looking like you tried too hard. They are good. They are presentable. They say "I am a thoughtful person who happens to shop at Albert Heijn," which is the most honest thing anyone has ever communicated through baked goods.',
    tastingNotes:
      'Each miniature specimen presents a butter-forward nose that belies its modest provenance. The pastry layers, while fewer than their full-sized counterpart, demonstrate a commitment to lamination that reads as "effort" in the context of last-minute hospitality. The crumb is airy, polite, and appropriately scaled for social occasions where the food is not the point. Finishes with notes of gratitude and plausible deniability. Pairs with "oh you really didn\'t have to" and the relief of having technically brought something.',
  },
  {
    rank: '15',
    title: 'Best Item Nobody Talks About But Everyone Buys',
    item: 'AH Krentenbol',
    score: '9.3',
    description:
      'The krentenbol is the silent majority of Amsterdam bakery consumption. Nobody posts it on Instagram. Nobody writes reviews about it. Nobody plans a trip across the city to acquire one. And yet it is there, every morning, in every Albert Heijn, being purchased by thousands of people who understand something fundamental: the best bread is the bread you eat without thinking about, because it has become part of the rhythm of your life.',
    tastingNotes:
      'The currants are distributed with the studied nonchalance of something that has been optimized by committee and is better for it. The dough is soft, lightly sweet, and carries a faint spice note — cinnamon, perhaps, or the ghost of cinnamon, or the memory of having once been in a room where cinnamon was discussed. The crust offers negligible resistance, as if the krentenbol has decided that friction is unnecessary between old friends. Pairs with butter, routine, and the deep comfort of never having to explain yourself.',
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
