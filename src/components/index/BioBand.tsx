import styles from './BioBand.module.css'

/**
 * README §2.3 — three-column band: biography/contact/what-I-do · the red
 * statement poster · the four metrics. 1px dividers between columns, 2px below.
 */
export function BioBand() {
  return (
    <div className={styles.band}>
      <div className={styles.col}>
        <h6 className={styles.label}>Biography</h6>
        <p className={styles.bio}>
          Aerospace Communication graduate turned frontend engineer. I care about state that stays
          honest, interfaces that stay quick, and code a teammate can read six months later.
        </p>

        <h6 className={styles.label}>Contact</h6>
        <div className={styles.list}>
          <a href="mailto:gad.software@outlook.com">gad.software@outlook.com</a>
          <a href="tel:+201069429820">+20 106 942 9820</a>
          <span>Tanta, Al-Gharbia, Egypt</span>
        </div>

        <h6 className={styles.label}>What I do</h6>
        <div className={styles.list}>
          <span>Web app engineering</span>
          <span>Design-to-React implementation</span>
          <span>Chrome extension development</span>
          <span>Performance &amp; state architecture</span>
        </div>
      </div>

      <div className={styles.col}>
        <div className={styles.poster}>
          <span className={styles.posterKicker}>Statement</span>
          <h2 className={styles.posterHeading}>Interfaces that respect your attention.</h2>
          <div className={styles.posterFoot}>
            <span className={styles.posterLine}>
              No dark patterns, no needless motion, no waiting on a spinner that could have been
              server-rendered.
            </span>
            <span className={styles.posterMark}>MG</span>
          </div>
        </div>
      </div>

      <div className={`${styles.col} ${styles.metrics}`}>
        <div>
          <h6 className={styles.label}>Core stack</h6>
          <div className={styles.metricWords}>
            React
            <br />
            Next.js
          </div>
        </div>
        <div>
          <h6 className={styles.label}>Shipped projects</h6>
          <div className={styles.metricNumber}>06</div>
        </div>
        <div>
          <h6 className={styles.label}>Chrome extensions</h6>
          <div className={styles.metricNumber}>02</div>
        </div>
        <div>
          <h6 className={styles.label}>Typed codebases</h6>
          <div className={styles.metricWords}>
            TypeScript
            <br />
            first
          </div>
        </div>
      </div>
    </div>
  )
}
