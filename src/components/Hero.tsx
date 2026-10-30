import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon } from './Icons'

export function Hero() {
  return (
    <section id="top" className="hero container">
      <div className="hero__text">
        <p className="eyebrow rise">Hi, my name is</p>
        <h1 className="hero__name rise d1">{profile.name}.</h1>
        <p className="hero__tagline rise d1">{profile.tagline}</p>
        <p className="hero__intro rise d2">{profile.intro}</p>

        <div className="hero__actions rise d3">
          <a href="#projects" className="btn btn--primary">See my work</a>
          <a href={`mailto:${profile.email}`} className="btn btn--ghost">Say hello</a>
          <span className="socials">
            <a className="social" href={profile.github} aria-label="GitHub profile (opens in a new tab)" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a className="social" href={profile.linkedin} aria-label="LinkedIn profile (opens in a new tab)" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </span>
        </div>
      </div>

      <aside className="facts card rise d2" aria-label="Quick facts">
        <div className="facts__photo">
          {profile.photo ? (
            <img src={profile.photo} alt={`Portrait of ${profile.name}`} />
          ) : (
            <span className="facts__initials" aria-hidden="true">SK</span>
          )}
        </div>
        <dl className="facts__list">
          {profile.facts.map((f) => (
            <div key={f.label} className="facts__row">
              <dt>{f.label}</dt>
              <dd>
                {f.live && <span className="live-dot" aria-hidden="true" />}
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
        <div className="facts__resume">
          <a href={profile.resume} className="btn btn--primary" target="_blank" rel="noreferrer" aria-label="View résumé (opens in a new tab)">View résumé</a>
          <a href={profile.resume} className="btn btn--ghost" download="Sai_Kumar_Anapuram_Resume.pdf">Download</a>
        </div>
      </aside>
    </section>
  )
}
