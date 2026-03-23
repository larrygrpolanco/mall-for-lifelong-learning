import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const navItems = [
  { label: 'Findings', href: '#takeaways' },
  { label: 'Research', href: '#research-questions' },
  { label: 'Participants', href: '#case-studies' },
  { label: 'Researcher', href: '#researcher' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const { scrollY } = useScroll()
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1])
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const sectionIds = navItems.map(item => item.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-15% 0px -75% 0px', threshold: 0 }
    )
    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center"
      style={{
        backgroundColor: 'rgba(250, 249, 246, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: `1px solid rgba(201, 144, 12, ${borderOpacity.get()})`,
      }}
    >
      <a href="#" className="text-navy font-serif italic text-lg tracking-tight hover:text-gold transition-colors">
        Chaone Labs Editorial
      </a>

      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => {
          const isActive = activeSection === item.href.replace('#', '')
          return (
            <a
              key={item.label}
              href={item.href}
              className={`text-[10px] font-sans font-700 uppercase tracking-widest transition-colors ${
                isActive ? 'text-navy' : 'text-slate hover:text-navy'
              }`}
              style={isActive ? { borderBottom: '2px solid var(--color-gold-bright)', paddingBottom: '2px' } : {}}
            >
              {item.label}
            </a>
          )
        })}
      </nav>
    </motion.header>
  )
}
