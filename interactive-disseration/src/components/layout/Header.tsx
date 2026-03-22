import { motion, useScroll, useTransform } from 'motion/react'

const navItems = [
  { label: 'Findings', href: '#takeaways' },
  { label: 'Research', href: '#research-questions' },
  { label: 'Participants', href: '#case-studies' },
  { label: 'Contact', href: '#researcher' },
]

export function Header() {
  const { scrollY } = useScroll()
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1])

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
        The Scholarly Editorial
      </a>

      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-[10px] font-sans font-700 uppercase tracking-widest text-slate hover:text-navy transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </motion.header>
  )
}
