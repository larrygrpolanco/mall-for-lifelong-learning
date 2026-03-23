import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { quotes } from '../../data/content'

export function Quotes() {
  const [index, setIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 50) {
      setIndex((i) => (delta < 0 ? (i + 1) % quotes.length : (i - 1 + quotes.length) % quotes.length))
    }
    touchStartX.current = null
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % quotes.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  const quote = quotes[index]

  return (
    <section className="bg-navy py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-10">

          {/* Decorative open-quote mark */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="font-serif text-[7rem] leading-none text-gold-bright/30 select-none"
            aria-hidden
          >
            &ldquo;
          </motion.span>

          {/* Quote */}
          <div
            className="relative min-h-[200px] flex flex-col items-center justify-center"
            style={{ touchAction: 'pan-y' }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, filter: 'blur(6px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(6px)' }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-6"
              >
                <blockquote className="text-headline-italic text-on-dark text-2xl md:text-3xl leading-snug max-w-2xl">
                  "{quote.text}"
                </blockquote>
                <cite className="text-kicker text-gold-bright not-italic">
                  {quote.attribution}
                </cite>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex gap-2">
            {quotes.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? 'bg-gold-bright w-4' : 'bg-navy-light'
                }`}
                aria-label={`Quote ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
