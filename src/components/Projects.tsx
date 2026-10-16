import { featured, work, type Project } from '../data/profile'
import { ArrowUpRight } from './Icons'
import { Tags } from './Tags'

function PlayerVisual() {
  return (
    <div className="visual visual--player" aria-hidden="true">
      <div className="vinyl"><div className="vinyl__label" /></div>
      <div className="player-lines">
        <span style={{ width: 72 }} />
        <span style={{ width: 50 }} />
        <span className="player-lines__progress" />
      </div>
    </div>
  )
}

// A fixed, valid-looking partial grid — decorative only.
const GRID = '5 3 . . 7 . . . . 6 . . 1 9 5 . . . . 9 8 . . . . 6 . 8 . . . 6 . . . 3 4 . . 8 . 3 . . 1 7 . . . 2 . . . 6 . 6 . . . . 2 8 . . . . 4 1 9 . . 5 . . . . 8 . . 7 9'.split(' ')

function SudokuVisual() {
  return (
    <div className="visual visual--sudoku" aria-hidden="true">
      <div className="sudoku">
        {GRID.map((v, i) => (
          <span key={i} className={v === '.' ? '' : i % 7 === 0 ? 'is-hl' : 'is-given'}>
            {v === '.' ? '' : v}
          </span>
        ))}
      </div>
    </div>
  )
}

function FeaturedCard({ p }: { p: Project }) {
  const primary = p.links?.[0]
  return (
    <article className="feature card row">
      {p.visual === 'player' ? <PlayerVisual /> : <SudokuVisual />}
      <div className="feature__body">
        <p className="kicker">{p.kind}</p>
        <h3 className="row__title feature__title">
          {primary ? (
            <a href={primary.href} target="_blank" rel="noreferrer" className="stretched">
              {p.name} <ArrowUpRight />
            </a>
          ) : (
            p.name
          )}
        </h3>
        <p className="feature__desc">{p.description}</p>
        <Tags items={p.tags} />
        {p.links && p.links.length > 1 && (
          <div className="feature__links">
            {p.links.slice(1).map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="link-above">
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <div className="projects">
      {featured.map((p) => (
        <FeaturedCard key={p.name} p={p} />
      ))}
      <h3 className="subhead">At work</h3>
      <div className="mini-grid">
        {work.map((p) => (
          <article key={p.name} className="mini card row">
            <p className="kicker">{p.kind}</p>
            <h4 className="row__title mini__title">{p.name}</h4>
            <p className="mini__desc">{p.description}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
