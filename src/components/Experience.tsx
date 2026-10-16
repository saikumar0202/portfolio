import { experience } from '../data/profile'
import { Tags } from './Tags'

export function Experience() {
  return (
    <ol className="timeline">
      {experience.map((job) => (
        <li key={job.company} className="row timeline__item">
          <p className="timeline__dates">{job.dates}</p>
          <div className="timeline__body">
            <h3 className="row__title">
              {job.role} <span className="muted-strong">· {job.company}</span>
            </h3>
            <p className="timeline__summary">{job.summary}</p>
            <ul className="timeline__points">
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <Tags items={job.tags} />
          </div>
        </li>
      ))}
    </ol>
  )
}
