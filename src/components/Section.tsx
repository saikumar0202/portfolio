import type { ReactNode } from 'react'

type Props = { id: string; index: string; title: string; children: ReactNode }

/** Two-column section: a small numbered label on the left, content on the right. */
export function Section({ id, index, title, children }: Props) {
  return (
    <section id={id} className="section container" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="section__label">
        <span className="section__index">{index}</span> · {title}
      </h2>
      <div className="section__body reveal">{children}</div>
    </section>
  )
}
