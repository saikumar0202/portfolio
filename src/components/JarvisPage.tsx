import { useEffect } from 'react'
import { ArrowUpRight } from './Icons'
import { profile } from '../data/profile'

const capabilities = [
  {
    number: '01',
    label: 'A natural conversation',
    title: 'Say it your way.',
    description:
      'Wake Jarvis by voice, speak a request, or type it. Add to a thought before it answers, refer to what you just opened, and hear replies when voice is on.',
    detail: 'Wake phrase · Spoken replies · Typed input · Context',
  },
  {
    number: '02',
    label: 'The MIND command center',
    title: 'See what Jarvis is doing.',
    description:
      'The HUD brings status, subtitles, a console, and controls together around a living knowledge graph. Switch between 2D, 3D, and a compact orb.',
    detail: 'Live status · Knowledge graph · 2D / 3D / orb',
  },
  {
    number: '03',
    label: 'Your desktop, in reach',
    title: 'Get everyday tasks done.',
    description:
      'Open apps, arrange windows, find and organize files, adjust supported system settings, and ask about what’s on screen. Some actions happen when you ask; others need confirmation.',
    detail: 'Apps · Windows · Files · Screen',
  },
  {
    number: '04',
    label: 'A partner for projects',
    title: 'Keep work moving in the background.',
    description:
      'Create projects, run builds, or keep research and other jobs going while you talk. For code edits, Jarvis can use Claude Code when it’s installed; file changes stay in the project folder and require approval.',
    detail: 'Projects · Builds · Research · Coding',
  },
  {
    number: '05',
    label: 'A little ahead of you',
    title: 'Keep the important things on time.',
    description:
      'Set reminders, timers, alarms, and recurring routines. Get morning briefings and useful notices, with quiet hours to limit interruptions.',
    detail: 'Reminders · Alarms · Routines · Quiet hours',
  },
  {
    number: '06',
    label: 'Fits the way you work',
    title: 'Pick a brain and connect your tools.',
    description:
      'Choose Auto, local Ollama, or supported Claude and ChatGPT subscription or API options. With the required setup, connect email, calendars, Spotify, Home Assistant, and messaging; GitHub access is read-only.',
    detail: 'Auto · Local · Claude · ChatGPT · Integrations',
  },
]

const graphNodes = [
  { x: 122, y: 40, label: 'VOICE', tone: 'warm' },
  { x: 207, y: 73, label: 'TASKS', tone: 'soft' },
  { x: 204, y: 160, label: 'FILES', tone: 'warm' },
  { x: 123, y: 192, label: 'MIND', tone: 'core' },
  { x: 39, y: 160, label: 'APPS', tone: 'soft' },
  { x: 38, y: 73, label: 'MEMORY', tone: 'warm' },
]

function MindPreview() {
  return (
    <div className="jarvis-preview card" role="img" aria-label="Illustration of the J.A.R.V.I.S MIND command center">
      <div className="jarvis-preview__bar">
        <div>
          <span className="jarvis-preview__brand">J.A.R.V.I.S</span>
          <span className="jarvis-preview__caption">MIND · COMMAND CENTER</span>
        </div>
        <span className="jarvis-preview__status"><i /> STANDING BY</span>
      </div>
      <div className="jarvis-preview__body">
        <aside className="jarvis-preview__rail" aria-hidden="true">
          <span>TOPICS</span><b>Voice &amp; identity</b><b>Work in progress</b><b>Home &amp; life</b>
          <span className="jarvis-preview__rail-label">LENSES</span><b>◈ &nbsp; Memory</b><b>◉ &nbsp; Apps</b>
        </aside>
        <div className="jarvis-preview__network" aria-hidden="true">
          <svg viewBox="0 0 246 232" role="presentation">
            <circle className="jarvis-preview__halo" cx="123" cy="116" r="65" />
            {graphNodes.map((node, index) => (
              <line key={node.label} x1="123" y1="116" x2={node.x} y2={node.y} className={index % 2 ? 'is-dim' : ''} />
            ))}
            <line x1="38" y1="73" x2="122" y2="40" />
            <line x1="122" y1="40" x2="207" y2="73" />
            <line x1="207" y1="73" x2="204" y2="160" />
            <line x1="204" y1="160" x2="123" y2="192" />
            <line x1="123" y1="192" x2="39" y2="160" />
            <line x1="39" y1="160" x2="38" y2="73" />
            {graphNodes.map((node) => (
              <g key={node.label} className={`jarvis-preview__node jarvis-preview__node--${node.tone}`}>
                <circle cx={node.x} cy={node.y} r={node.tone === 'core' ? 8 : 5} />
                <text x={node.x} y={node.y + 19}>{node.label}</text>
              </g>
            ))}
          </svg>
        </div>
        <aside className="jarvis-preview__activity" aria-hidden="true">
          <span>NOW</span><b><i /> Listening</b><p>Say “Jarvis” or press Ctrl K</p>
          <div className="jarvis-preview__wave"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
        </aside>
      </div>
      <div className="jarvis-preview__input"><span>›</span><span>Speak, or type a command…</span><kbd>CTRL K</kbd></div>
      <p className="jarvis-preview__note">A living knowledge graph · 2D, 3D, or compact orb</p>
    </div>
  )
}

export function JarvisPage() {
  useEffect(() => {
    const title = 'J.A.R.V.I.S — A desktop assistant by Sai Kumar Anapuram'
    const summary = 'Meet J.A.R.V.I.S: a voice-first desktop assistant for Windows and macOS, with a living command center, practical tools, and clear permissions.'
    const oldTitle = document.title
    const metaContent = [
      ['meta[name="description"]', summary],
      ['meta[property="og:title"]', title],
      ['meta[property="og:description"]', summary],
      ['meta[property="og:url"]', `${window.location.origin}/jarvis`],
      ['meta[name="twitter:title"]', title],
      ['meta[name="twitter:description"]', summary],
    ] as const
    const originalMeta = metaContent.map(([selector]) => {
      const element = document.querySelector<HTMLMetaElement>(selector)
      return [element, element?.content] as const
    })
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    const originalCanonical = canonical?.href
    document.title = title
    metaContent.forEach(([selector, content]) => {
      document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', content)
    })
    if (canonical) canonical.href = `${window.location.origin}/jarvis`
    return () => {
      document.title = oldTitle
      originalMeta.forEach(([element, content]) => {
        if (element && content) element.content = content
      })
      if (canonical && originalCanonical) canonical.href = originalCanonical
    }
  }, [])

  return (
    <div className="page jarvis-page">
      <div className="spotlight" aria-hidden="true" />
      <a href="#jarvis-main" className="skip-link">Skip to content</a>
      <header className="header jarvis-header">
        <div className="container jarvis-header__inner">
          <a href="/" className="logo" aria-label={`${profile.name}, portfolio`}>
            Sai<span className="accent">.</span>
          </a>
          <nav aria-label="Jarvis page">
            <a href="/" className="nav__link">Portfolio</a>
            <a href="#capabilities" className="nav__link">Capabilities</a>
          </nav>
        </div>
      </header>

      <main id="jarvis-main">
        <section className="jarvis-hero container">
          <div className="jarvis-hero__copy">
            <p className="eyebrow rise">A personal desktop assistant <span>·</span> Windows &amp; macOS</p>
            <h1 className="jarvis-hero__title rise d1">Meet <span>J.A.R.V.I.S.</span></h1>
            <p className="jarvis-hero__tagline rise d1">Your computer, a little more in sync.</p>
            <p className="jarvis-hero__intro rise d2">
              Talk, type, and pick up where you left off. Jarvis can help with everyday computer tasks,
              keep longer work moving in the background, and show what it’s doing in a living command center.
            </p>
            <div className="jarvis-hero__actions rise d3">
              <a href="#capabilities" className="btn btn--primary">Explore what it can do</a>
              <a href={`mailto:${profile.email}?subject=${encodeURIComponent('About J.A.R.V.I.S')}`} className="btn btn--ghost">
                Get in touch <ArrowUpRight />
              </a>
            </div>
            <div className="jarvis-facts rise d3" aria-label="Project details">
              <span><i /> Windows &amp; macOS</span><span>Voice + keyboard</span><span>Local and hosted AI options</span>
            </div>
          </div>
          <div className="jarvis-hero__visual rise d2"><MindPreview /></div>
        </section>

        <section id="capabilities" className="jarvis-capabilities container" aria-labelledby="capabilities-title">
          <div className="jarvis-section-heading">
            <div>
              <p className="eyebrow">01 · Made to be useful</p>
              <h2 id="capabilities-title">More than a voice in a window.</h2>
            </div>
            <p>One assistant that can help across the everyday—then get out of your way.</p>
          </div>
          <div className="jarvis-capability-grid">
            {capabilities.map((item) => (
              <article className="jarvis-capability card" key={item.number}>
                <div className="jarvis-capability__meta"><span>{item.number}</span><span>{item.label}</span></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="jarvis-capability__detail">{item.detail}</div>
              </article>
            ))}
          </div>
          <p className="jarvis-platform-note">Available actions vary between Windows and macOS. For example, clicking and typing in other apps is currently Windows-only; connected services and some system controls require additional setup or permissions.</p>
        </section>

        <section className="jarvis-principles container" aria-labelledby="principles-title">
          <div className="jarvis-principles__intro">
            <p className="eyebrow">02 · Thoughtful by design</p>
            <h2 id="principles-title">Capable, with clear boundaries.</h2>
            <p>Jarvis can reach across your computer, so it makes its permissions visible and lets you manage them.</p>
          </div>
          <div className="jarvis-principles__list">
            <article><span>01</span><div><h3>Confirmations</h3><p>Opening an app or moving a window by direct spoken request can happen immediately. Jarvis confirms before actions such as sending, deleting, or closing a window.</p></div></article>
            <article><span>02</span><div><h3>Your choices</h3><p>Allow an action once, save a scoped permission, or deny it. Denied capabilities stay blocked until you change them; emergency stop pauses tools.</p></div></article>
            <article><span>03</span><div><h3>Personal data</h3><p>Voice profiles stay on your computer. Preferences are stored locally and included in prompts to the brain you choose. Account sign-ins use Windows Credential Manager or macOS Keychain.</p></div></article>
          </div>
        </section>

        <section className="jarvis-bottom container">
          <p className="eyebrow">Built by {profile.name}</p>
          <h2>A personal project, still growing.</h2>
          <p>Jarvis is an ongoing exploration in voice, desktop interfaces, AI tools, and making everyday automation feel more human.</p>
          <div className="jarvis-bottom__actions">
            <a href="/#projects" className="btn btn--primary">See other projects <ArrowUpRight /></a>
          </div>
        </section>
      </main>
    </div>
  )
}
