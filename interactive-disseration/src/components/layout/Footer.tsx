import { useState } from 'react'
import { SectionReveal } from '../ui/SectionReveal'

const ACCESS_KEY = '2943f377-7b08-410e-84c2-2aca5ee79791'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('submitting')

    const formData = new FormData()
    formData.append('access_key', ACCESS_KEY)
    formData.append('name', name)
    formData.append('email', email)
    formData.append('message', message)
    formData.append('subject', 'MALL Research Website Inquiry')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      setState(data.success ? 'success' : 'error')
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="py-8 border-l-2 border-gold-bright pl-6">
        <p className="font-serif italic text-on-dark text-xl mb-1">Message received.</p>
        <p className="font-sans text-on-dark-muted text-sm">Dr. Kim will be in touch.</p>
      </div>
    )
  }

  const inputClass = [
    'w-full bg-transparent border-b border-navy-light text-on-dark font-sans text-sm py-3',
    'placeholder:text-on-dark-muted focus:outline-none focus:border-gold-bright transition-colors',
  ].join(' ')

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={inputClass}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={3}
          className={`${inputClass} resize-none`}
        />
      </div>
      {state === 'error' && (
        <p className="font-sans text-xs text-red-400">Something went wrong — please try again.</p>
      )}
      <button
        type="submit"
        disabled={state === 'submitting'}
        className="px-6 py-3 bg-gold-bright text-navy font-sans font-bold text-sm rounded-md hover:bg-[#ffe2ab] transition-colors disabled:opacity-60"
      >
        {state === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
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

          <ContactForm />

          <div className="mt-16 border-t border-[#1e2d3f] pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex flex-col gap-1">
              <p className="font-sans text-[10px] uppercase tracking-widest text-slate">
                © Jihye Kim, Ph.D. — University of South Florida
              </p>
              <a
                href="https://chaonelabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[10px] text-slate/60 hover:text-slate transition-colors"
              >
                Made by ChaoneLabs.com
              </a>
            </div>
            <p className="font-serif italic text-slate text-sm">
              "Your love and passion brought me here."
            </p>
          </div>
        </SectionReveal>
      </div>
    </footer>
  )
}
