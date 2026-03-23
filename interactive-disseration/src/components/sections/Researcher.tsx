import { SectionReveal } from '../ui/SectionReveal'
import { researcher, whyItMatters } from '../../data/content'
import headshot from '../../assets/headshot.png'

export function Researcher() {
  return (
    <section id="researcher" className="bg-navy pt-24 pb-6 px-6">
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
                className="w-28 h-28 rounded-full object-cover object-top shrink-0"
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

            <div className="flex flex-wrap gap-2 mb-6">
              {researcher.grants.map((grant) => (
                <span
                  key={grant}
                  className="px-3 py-1 border border-gold-bright/30 text-gold-bright text-kicker rounded-sm"
                >
                  {grant}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href="mailto:jihyekim1@usf.edu"
                className="flex items-center gap-2 text-on-dark-muted hover:text-gold-bright transition-colors duration-200 text-sm font-sans group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span className="border-b border-transparent group-hover:border-gold-bright/50 transition-colors duration-200">jihyekim1@usf.edu</span>
              </a>
              <a
                href="https://www.linkedin.com/in/jihye-kim-5244ab202/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-on-dark-muted hover:text-gold-bright transition-colors duration-200 text-sm font-sans group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                <span className="border-b border-transparent group-hover:border-gold-bright/50 transition-colors duration-200">LinkedIn</span>
              </a>
            </div>
          </SectionReveal>

          {/* Why it matters */}
          <SectionReveal delay={0.2}>
            <p className="text-kicker text-gold-bright mb-6">Why This Research Matters</p>
            <ul className="space-y-5">
              {whyItMatters.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <div className="w-px bg-gold-bright/40 shrink-0 mt-1 self-stretch" />
                  <p className="font-sans text-on-dark-muted text-md leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </SectionReveal>
        </div>

      </div>
    </section>
  )
}
