import styles from './ContactFooter.module.css'

/** README §2.7 — contact footer: 2px top rule, three label + link columns. */
export function ContactFooter({ className }: { className?: string }) {
  return (
    <footer className={`shell ${className ?? ''}`}>
      <div className={styles.grid}>
        <span className={styles.item}>
          <span className={styles.label}>Email</span>
          <a className={styles.link} href="mailto:gad.software@outlook.com">
            gad.software@outlook.com
          </a>
        </span>
        <span className={styles.item}>
          <span className={styles.label}>Phone</span>
          <a className={styles.link} href="tel:+201069429820">
            +20 106 942 9820
          </a>
        </span>
        <span className={styles.item}>
          <span className={styles.label}>Elsewhere</span>
          <a
            className={styles.link}
            href="https://github.com/GADMuhammad"
            target="_blank"
            rel="noreferrer"
          >
            github.com/GADMuhammad
          </a>
        </span>
      </div>
    </footer>
  )
}
