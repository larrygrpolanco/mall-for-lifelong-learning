import { useState } from 'react'
import { SectionReveal } from '../ui/SectionReveal'

const EMAIL = 'jihyekim.33559@gmail.com'

function ContactButton() {
  const [state, setState] = useState<'idle' | 'revealed' | 'copied'>('idle')

  const handleReveal = () => {
    if (state === 'idle') {
      setState('revealed')
      return
    }
    navigator.clipboard.writeText(EMAIL).then(() => {
      setState('copied')
      setTimeout(() => setState('revealed'), 2000)
    })
  }

  return (
    <button
      onClick={handleReveal}
      className="inline-flex items-center gap-2 px-6 py-3 bg-gold-bright text-navy font-sans font-bold text-sm rounded-md hover:bg-[#ffe2ab] transition-colors text-left"
    >
      {state === 'idle' && 'Contact Researcher'}
      {state === 'revealed' && (
        <span className="flex items-center gap-3">
          <span className="font-mono text-xs tracking-tight">{EMAIL}</span>
          <span className="text-navy-light text-[10px] uppercase tracking-wider font-sans">click to copy</span>
        </span>
      )}
      {state === 'copied' && (
        <span className="flex items-center gap-2">
          <span>Copied</span>
          <span>✓</span>
        </span>
      )}
    </button>
  )
}

export function Footer() {
  return (
    <footer id="contact" className="bg-navy text-on-dark py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <p className="text-kicker text-gold-bright mb-6">Continue the Conversation</p>
          <h2 className="text-headline-italic text-on-dark text-5xl md:text-6xl mb-8 max-w-2xl">
            Let's continue the conversation.
          </h2>
          <p className="text-on-dark-muted font-sans text-base leading-relaxed mb-12 max-w-lg">
            This research was presented as a doctoral dissertation at the University of South Florida, 2026.
            Interested in this work? Reach out to Dr. Kim.
          </p>

          <div className="mb-16">
            <ContactButton />
          </div>

          <div className="border-t border-navy-mid pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="font-sans text-[10px] uppercase tracking-widest text-navy-light">
              © Jihye Kim, Ph.D. — University of South Florida
            </p>
            <p className="font-serif italic text-navy-light text-sm">
              "Your love and passion brought me here."
            </p>
          </div>
        </SectionReveal>
      </div>
    </footer>
  )
}
