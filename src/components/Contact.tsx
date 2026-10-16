import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons'

const YEAR = new Date().getFullYear()

export function Contact() {
  return (
    <section id="contact" className="contact container reveal" aria-labelledby="contact-title">
      <p className="eyebrow">05 · What’s next?</p>
      <h2 id="contact-title" className="contact__title">Let’s build something great together.</h2>
      <p className="contact__text">
        I’m open to frontend and full-stack roles in Hyderabad or remote, and can start right away.
        My inbox is always open.
      </p>
      <div className="contact__actions">
        <a href={`mailto:${profile.email}`} className="btn btn--primary">Get in touch</a>
        <a href={profile.resume} className="btn btn--ghost" target="_blank" rel="noreferrer">View résumé</a>
        <a href={profile.resume} className="btn btn--ghost" download="Sai_Kumar_Anapuram_Resume.pdf">Download PDF</a>
      </div>
      <p className="contact__email">{profile.email}</p>
      <footer className="footer">
        <div className="socials">
          <a className="social" href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer"><GitHubIcon size={20} /></a>
          <a className="social" href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><LinkedInIcon size={20} /></a>
          <a className="social" href={`mailto:${profile.email}`} aria-label="Email"><MailIcon size={20} /></a>
        </div>
        <p>Designed &amp; built by {profile.name} · {YEAR}</p>
      </footer>
    </section>
  )
}
