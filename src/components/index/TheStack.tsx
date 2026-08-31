import { SectionHead } from '../SectionHead'
import { stack } from '@/content/stack'
import styles from './TheStack.module.css'

/** README §2.4 — one ruled row per category, wrapping icon chips on the right. */
export function TheStack() {
  return (
    <section id="stack" className={styles.section}>
      <SectionHead title="The Stack" meta="Tools I reach for daily" />
      <div className={styles.rows}>
        {stack.map((cat) => (
          <div className={styles.row} key={cat.num}>
            <div className={styles.cat}>
              <span className={styles.num}>{cat.num}</span>
              <span className={styles.catName}>{cat.label}</span>
            </div>
            <div className={styles.chips}>
              {cat.items.map((chip, i) => (
                <span className={styles.chip} key={`${chip.label}-${i}`}>
                  {chip.icon && (
                    <img className={styles.chipIcon} src={chip.icon} alt="" aria-hidden="true" />
                  )}
                  {chip.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
