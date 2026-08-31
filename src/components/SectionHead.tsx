import styles from './SectionHead.module.css'

/**
 * The repeated section-heading row: a big uppercase H2 flush left, a small
 * uppercase meta label flush right, baseline-aligned. Two size variants:
 *   "section" — The Stack / Experience & Education  (clamp 34–60, 36px below)
 *   "work"    — Work                                (clamp 28–44, 40/20 padding)
 */
export function SectionHead({
  title,
  meta,
  variant = 'section',
}: {
  title: string
  meta: string
  variant?: 'section' | 'work'
}) {
  return (
    <div className={variant === 'work' ? styles.work : styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.meta}>{meta}</span>
    </div>
  )
}
