import { motion, type Variants } from 'motion/react'
import { SectionReveal } from '../ui/SectionReveal'
import { takeaways } from '../../data/content'

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export function Takeaways() {
  return (
    <section id="takeaways" className="bg-cream py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <p className="text-kicker text-gold mb-16">The Big Takeaways</p>
        </SectionReveal>

        <motion.div
          className="space-y-16 md:space-y-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {takeaways.map((item) => (
            <motion.div
              key={item.number}
              variants={itemVariants}
              className="grid grid-cols-[3rem_1fr] md:grid-cols-[5rem_1fr] gap-6 md:gap-10 items-start"
            >
              {/* Number column */}
              <span
                className="text-headline-italic text-gold leading-none pt-1"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
              >
                {item.number}
              </span>

              {/* Content column */}
              <div>
                <h3 className="text-headline-italic text-navy text-3xl md:text-4xl mb-4 max-w-xl">
                  {item.headline}
                </h3>
                <p className="font-sans text-navy-light text-base md:text-lg leading-relaxed max-w-2xl">
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
