import { motion, type Variants } from 'motion/react'
import { SectionReveal } from '../ui/SectionReveal'
import { caseStudies } from '../../data/content'

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

const rqColors: Record<string, string> = {
  RQ1: '#c9900c',
  RQ2: '#8a6200',
  RQ3: '#fbbc00',
}

export function CaseStudies() {
  return (
    <section id="case-studies" className="bg-cream py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <p className="text-kicker text-gold mb-4">Case Study Participants</p>
          <p className="font-serif italic text-navy-light text-lg mb-14 max-w-xl">
            Six in-depth participants — the human stories at the heart of this research.
          </p>
        </SectionReveal>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {caseStudies.map((person) => (
            <motion.article
              key={person.name}
              variants={cardVariants}
              whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(12, 20, 31, 0.1)' }}
              transition={{ duration: 0.2 }}
              className="bg-cream-alt rounded-md p-6 flex flex-col gap-4"
              style={{ boxShadow: '0 2px 12px rgba(12, 20, 31, 0.05)' }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-headline-italic text-navy text-2xl">{person.name}</h3>
                  <p className="font-sans text-slate text-xs mt-0.5">
                    Age {person.age} · {person.location}
                  </p>
                </div>
                <span
                  className="text-kicker px-2 py-1 rounded-sm shrink-0"
                  style={{
                    color: rqColors[person.rq],
                    backgroundColor: `${rqColors[person.rq]}18`,
                  }}
                >
                  {person.rq}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="border-l-2 border-gold-bright pl-3">
                <p className="font-serif italic text-navy text-sm leading-relaxed">
                  "{person.quote}"
                </p>
              </blockquote>

              {/* Context */}
              <p className="font-sans text-xs text-slate leading-relaxed mt-auto">
                {person.context}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
