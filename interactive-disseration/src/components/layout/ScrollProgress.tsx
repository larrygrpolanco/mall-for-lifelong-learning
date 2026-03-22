import { motion, useScroll } from 'motion/react'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gold-bright origin-left z-[100]"
    />
  )
}
