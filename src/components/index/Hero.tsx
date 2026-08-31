import styles from './Hero.module.css'

/** README §2.1 — kicker, stacked H1, lede. Bottom 2px divider. */
export function Hero({ className }: { className?: string }) {
  return (
    <div className={`${styles.hero} ${className ?? ''}`}>
      <span className={styles.kicker}>Frontend Engineer — Tanta, Egypt</span>
      <h1 className={styles.title}>
        Muhammad
        <br />
        Gad
      </h1>
      <p className={styles.lede}>
        React and Next.js interfaces — production dashboards, server-rendered booking flows, and
        Chrome extensions that give people their attention back.
      </p>
    </div>
  )
}
