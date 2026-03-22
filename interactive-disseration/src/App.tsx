import { useEffect } from 'react'
import Lenis from 'lenis'

import { ScrollProgress } from './components/layout/ScrollProgress'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { StudyGlance } from './components/sections/StudyGlance'
import { Takeaways } from './components/sections/Takeaways'
import { Quotes } from './components/sections/Quotes'
import { ResearchQuestions } from './components/sections/ResearchQuestions'
import { CaseStudies } from './components/sections/CaseStudies'
import { Researcher } from './components/sections/Researcher'

function App() {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true })
    return () => lenis.destroy()
  }, [])

  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <StudyGlance />
        <Takeaways />
        <Quotes />
        <ResearchQuestions />
        <CaseStudies />
        <Researcher />
      </main>
      <Footer />
    </>
  )
}

export default App
