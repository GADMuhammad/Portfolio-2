import { Link } from 'react-router-dom'
import { SectionHead } from '../SectionHead'
import { projects } from '@/content/projects'
import styles from './WorkList.module.css'

/**
 * README §2.5 — the ruled list of six projects. Each row is a real <Link> to
 * the case page (the prototype used clickable spans).
 */
export function WorkList() {
  return (
    <section className={styles.section}>
      <SectionHead title="Work" meta="Six projects — open one for the full case" variant="work" />
      <div className={styles.rows}>
        {projects.map((p) => (
          <Link className={styles.row} to={`/work/${p.slug}`} key={p.slug}>
            <span className={styles.num}>{p.num}</span>
            <span className={styles.headingCell}>
              <span className={styles.kind}>{p.kind}</span>
              <span className={styles.title}>{p.title}</span>
            </span>
            <span className={styles.short}>{p.short}</span>
            <span className={styles.metaCell}>
              <span className={styles.stackLine}>{p.stackLine}</span>
              <span className={styles.openChip}>Open case →</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
