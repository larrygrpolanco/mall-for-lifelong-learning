import { motion, type Variants } from 'motion/react'
import { meta } from '../../data/content'

const wordVariants: Variants = {
  hidden: { opacity: 0, filter: 'blur(8px)', y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const, delay: i * 0.12 },
  }),
}

export function Hero() {
  const words = meta.title.split(' ')

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 bg-cream">
      <div className="max-w-4xl mx-auto w-full">
        {/* Kicker */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-kicker text-gold mb-6"
        >
          Doctoral Dissertation · 2026
        </motion.p>

        {/* Main title */}
        <h1 className="text-display text-navy text-6xl sm:text-7xl md:text-8xl mb-8 leading-[1.02]">
          {words.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className="inline-block mr-[0.2em] last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="text-navy-light font-sans text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
        >
          {meta.subtitle} — challenging the deficit narrative of aging and technology.
        </motion.p>

        {/* Researcher */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="flex items-center gap-4"
        >
          <div className="w-px h-8 bg-gold-bright" />
          <div>
            <p className="font-sans font-600 text-navy text-sm">{meta.researcher}</p>
            <p className="font-sans text-slate text-xs mt-0.5">{meta.institution}, {meta.department}</p>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="mt-20 flex items-center gap-3"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1"
          >
            <div className="w-px h-8 bg-cream-deep" />
            <div className="w-1 h-1 rounded-full bg-gold" />
          </motion.div>
          <p className="text-kicker text-slate-light">Scroll to explore</p>
        </motion.div>
      </div>
    </section>
  )
}
