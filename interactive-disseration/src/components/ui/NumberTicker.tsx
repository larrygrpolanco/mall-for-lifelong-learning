import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, useSpring } from 'motion/react'

interface NumberTickerProps {
  value: number
  suffix?: string
  className?: string
  duration?: number
}

export function NumberTicker({ value, suffix = '', className = '', duration = 1.5 }: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      setDisplay(Math.round(latest))
    })
    return unsubscribe
  }, [spring])

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString()}{suffix}
    </span>
  )
}
