import { useRef } from 'react'
import { about, nav, skills } from './data/profile'
import { useActiveSection } from './hooks/useActiveSection'
import { useReveal } from './hooks/useReveal'
import { useSpotlight } from './hooks/useSpotlight'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Section } from './components/Section'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact, SiteFooter } from './components/Contact'
import { JarvisPage } from './components/JarvisPage'

const SECTION_IDS = nav.map((n) => n.id)

export default function App() {
  if (window.location.pathname.replace(/\/$/, '') === '/jarvis') return <JarvisPage />
  return <PortfolioPage />
}

function PortfolioPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  useSpotlight(pageRef)
  useReveal()
  const active = useActiveSection(SECTION_IDS)

  return (
    <div ref={pageRef} className="page">
      <div className="spotlight" aria-hidden="true" />
      <a href="#main" className="skip-link">Skip to content</a>
      <Header active={active} />

      <main id="main">
        <Hero />

        <Section id="about" index="01" title="About">
          <div className="prose">
            {about.map((p) => <p key={p}>{p}</p>)}
          </div>
        </Section>

        <Section id="experience" index="02" title="Experience">
          <Experience />
        </Section>

        <Section id="projects" index="03" title="Projects">
          <Projects />
        </Section>

        <Section id="skills" index="04" title="Skills">
          <div className="skills">
            {skills.map((s) => (
              <div key={s.group}>
                <h3 className="skills__group">{s.group}</h3>
                <p className="skills__items">{s.items.join(' · ')}</p>
              </div>
            ))}
          </div>
        </Section>

        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
