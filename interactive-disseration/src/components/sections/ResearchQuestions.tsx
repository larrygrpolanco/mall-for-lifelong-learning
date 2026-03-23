import { motion, type Variants } from 'motion/react'
import { SectionReveal } from '../ui/SectionReveal'
import { researchQuestions } from '../../data/content'

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

export function ResearchQuestions() {
  return (
    <section id='research-questions' className='bg-cream-alt py-24 px-6'>
      <div className='max-w-4xl mx-auto'>
        <SectionReveal>
          <p className='text-kicker text-gold mb-4'>Research Questions</p>
          <p className='font-serif italic text-navy-light text-lg mb-14 max-w-xl'>
            How do older adults actually experience, self-regulate, and stay
            motivated with Duolingo? Explored through Garrison's Self-Directed
            Learning framework.
          </p>
        </SectionReveal>

        <motion.div
          className='space-y-4'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-60px' }}
        >
          {researchQuestions.map((rq) => (
            <motion.div
              key={rq.kicker}
              variants={cardVariants}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className='bg-cream rounded-md overflow-hidden flex group'
              style={{ boxShadow: '0 2px 20px rgba(12, 20, 31, 0.06)' }}
            >
              {/* Left accent bar */}
              <motion.div className='w-1 bg-gold-bright shrink-0 transition-all duration-300 group-hover:w-1.5' />

              <div className='flex-1 p-6 md:p-8'>
                <p className='text-kicker text-gold mb-3'>{rq.kicker}</p>
                <h3 className='text-headline text-navy text-lg md:text-xl mb-3 leading-snug'>
                  {rq.question}
                </h3>
                <p className='font-sans text-sm text-slate italic leading-relaxed'>
                  {rq.teaser}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
