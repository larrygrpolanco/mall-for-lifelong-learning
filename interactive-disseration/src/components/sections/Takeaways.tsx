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
          className="space-y-16 md:space-y-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {takeaways.map((item) => (
            <motion.div
              key={item.number}
              variants={itemVariants}
              className="relative"
            >
              {/* Background chapter number */}
              <span
                className="absolute -top-6 left-0 font-serif font-700 text-navy select-none pointer-events-none"
                style={{ fontSize: 'clamp(5rem, 15vw, 12rem)', lineHeight: 1, opacity: 0.04 }}
              >
                {item.number}
              </span>

              {/* Content */}
              <div className="relative pl-0 md:pl-4">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-kicker text-gold mt-1">{item.number}</span>
                  <div className="w-8 h-px bg-gold-bright mt-[0.6rem] shrink-0" />
                </div>
                <h3 className="text-headline-italic text-navy text-3xl md:text-4xl mb-5 max-w-xl">
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
