import { SectionHead } from '../SectionHead'
import styles from './ExperienceEducation.module.css'

const entries = [
  {
    period: '2020 — 2025',
    role: 'B.Sc. Aerospace Communication',
    org: 'Beni-Suef University, Egypt',
    body: 'Satellite and navigation technologies — a signals background that made debugging state and data flow feel familiar.',
  },
  {
    period: 'NOV 2023 — MAY 2024',
    role: 'Frontend Developer Intern',
    org: 'Almdrasa — Remote',
    body: 'A professional internship in front-end development: an intensive curriculum spent mastering React fundamentals, component patterns, and shipping discipline.',
  },
  {
    period: '2024 — PRESENT',
    role: 'Independent Product Work',
    org: 'Self-directed',
    body: 'Designing, building and publishing my own tools — two Chrome extensions and a full-stack booking product, front to back.',
  },
]

/** README §2.6 — three equal columns between 2px rules, 1px dividers between. */
export function ExperienceEducation() {
  return (
    <section id="path" className={styles.section}>
      <SectionHead title="Experience & Education" meta="2020 — present" />
      <div className={styles.grid}>
        {entries.map((e) => (
          <div className={styles.col} key={e.role}>
            <div className={styles.period}>{e.period}</div>
            <h3 className={styles.role}>{e.role}</h3>
            <div className={styles.org}>{e.org}</div>
            <p className={styles.body}>{e.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
