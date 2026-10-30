import { useEffect, useRef, useState } from 'react'
import { nav, profile } from '../data/profile'
import { MenuIcon } from './Icons'

export function Header({ active }: { active: string }) {
  const [open, setOpen] = useState(false)
  const btnRef = useRef<HTMLButtonElement>(null)

  // Escape closes the mobile menu and returns focus to its button.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        btnRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="logo" aria-label={`${profile.name}, back to top`}>
          {profile.shortName}
          <span className="accent">.</span>
        </a>

        <button
          ref={btnRef}
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <MenuIcon open={open} />
        </button>

        <nav id="site-nav" aria-label="Main" className={`nav ${open ? 'nav--open' : ''}`}>
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav__link ${active === item.id ? 'is-active' : ''}`}
              aria-current={active === item.id ? 'true' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href="/jarvis" className="nav__link">Jarvis</a>
          <a href={profile.resume} className="btn btn--ghost btn--sm" target="_blank" rel="noreferrer" aria-label="Résumé (opens in a new tab)">
            Résumé
          </a>
        </nav>
      </div>
    </header>
  )
}
