import { SectionReveal } from '../ui/SectionReveal'
import { NumberTicker } from '../ui/NumberTicker'
import { stats } from '../../data/content'

export function StudyGlance() {
  return (
    <section id="study-glance" className="bg-cream-alt py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <p className="text-kicker text-gold mb-12">Study at a Glance</p>
        </SectionReveal>

        {/* Featured stat — age range */}
        <SectionReveal delay={0.1}>
          <div className="mb-1">
            <span className="text-headline text-navy text-7xl md:text-8xl font-serif">60–83</span>
          </div>
          <p className="text-kicker text-slate mb-14">Age Range · N = 15 Older Adults</p>
        </SectionReveal>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-px bg-cream-deep">
          {stats.map((stat, i) => (
            <SectionReveal key={stat.label} delay={0.05 * i}>
              <div className="bg-cream-alt p-6 md:p-8">
                <div className="text-headline text-navy text-4xl md:text-5xl mb-2 font-serif">
                  <NumberTicker value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-kicker text-slate">{stat.label}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Bottom note */}
        <SectionReveal delay={0.3}>
          <p className="mt-10 font-sans text-sm text-slate leading-relaxed max-w-xl border-l-2 border-gold-bright pl-4">
            Concurrent mixed-methods design (emphasis qualitative) · Duolingo for Schools activity tracking ·
            3 reflective journals · Semi-structured interviews · Pre/post questionnaires
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}
