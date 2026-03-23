import { SectionReveal } from '../ui/SectionReveal'
import { researcher, whyItMatters } from '../../data/content'
import headshot from '../../assets/headshot.png'

export function Researcher() {
  return (
    <section id="researcher" className="bg-navy py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <p className="text-kicker text-gold-bright mb-12">Meet the Researcher</p>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {/* Bio */}
          <SectionReveal delay={0.1}>
            <div className="flex items-center gap-5 mb-8">
              <img
                src={headshot}
                alt="Jihye Kim"
                className="w-20 h-20 rounded-full object-cover object-top shrink-0"
                style={{ border: '2px solid rgba(251, 188, 0, 0.4)' }}
              />
              <div>
                <h2 className="text-headline-italic text-on-dark text-4xl md:text-5xl mb-2">
                  {researcher.name}
                </h2>
                <p className="font-sans text-on-dark-muted text-sm mb-0">{researcher.institution}</p>
                <p className="font-sans text-on-dark-muted text-sm">{researcher.department}</p>
              </div>
            </div>

            <p className="font-sans text-on-dark/80 text-base leading-relaxed mb-8">
              {researcher.bio}
            </p>

            <div className="flex flex-wrap gap-2">
              {researcher.grants.map((grant) => (
                <span
                  key={grant}
                  className="px-3 py-1 border border-gold-bright/30 text-gold-bright text-kicker rounded-sm"
                >
                  {grant}
                </span>
              ))}
            </div>
          </SectionReveal>

          {/* Why it matters */}
          <SectionReveal delay={0.2}>
            <p className="text-kicker text-gold-bright mb-6">Why This Research Matters</p>
            <ul className="space-y-5">
              {whyItMatters.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <div className="w-px bg-gold-bright/40 shrink-0 mt-1 self-stretch" />
                  <p className="font-sans text-on-dark-muted text-sm leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </SectionReveal>
        </div>

        {/* Dedication */}
        <SectionReveal delay={0.3}>
          <div className="border-t border-navy-mid pt-10 text-center">
            <p className="font-serif italic text-on-dark/60 text-xl max-w-lg mx-auto">
              {researcher.dedication}
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
