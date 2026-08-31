import { MockFrame, Block } from './MockFrame'
import { cabins, calendar } from '@/content/mockups'
import styles from './WildOasisGuestMock.module.css'

/** Mockup 04 — Wild Oasis Guest: cabin catalogue, then a reservation panel. */
export function WildOasisGuestMock() {
  return (
    <div className={styles.stack}>
      <MockFrame>
        <p className={styles.h4}>Our luxury cabins</p>
        <p className={styles.sub}>
          Cabins in the heart of the Italian Dolomites — server-rendered, filterable by capacity.
        </p>
        <div className={styles.filters}>
          <span className={styles.filterOn}>All</span>
          <span className={styles.filterOff}>2–3</span>
          <span className={styles.filterOff}>4–7</span>
          <span className={styles.filterOff}>8–12</span>
        </div>
        <div className={styles.cabinGrid}>
          {cabins.map((c) => (
            <span className={styles.cabin} key={c.name}>
              <Block />
              <span className={styles.cabinBody}>
                <span className={styles.cabinName}>{c.name}</span>
                <span className={styles.cabinCap}>{c.capacity}</span>
                <span className={styles.cabinPrice}>{c.price}</span>
                <span className={styles.cabinCta}>Details &amp; reservation →</span>
              </span>
            </span>
          ))}
        </div>
      </MockFrame>

      <MockFrame>
        <p className={`${styles.h4} ${styles.h4sm}`}>Reserve 003 today. Pay on arrival.</p>
        <div className={styles.pair}>
          <div>
            <span className={styles.tinyLabel}>June 2024</span>
            <span className={styles.calendar}>
              {calendar.map((d) => (
                <span
                  className={styles.day}
                  key={d.n}
                  style={{ background: d.bg, color: d.fg }}
                >
                  {d.n}
                </span>
              ))}
            </span>
            <span className={styles.breakdown}>
              <span>$300 / night × 14</span>
              <span className={styles.total}>$4,200</span>
            </span>
          </div>

          <div className={styles.form}>
            <span className={styles.tinyLabel}>Logged in as</span>
            <span className={styles.fieldStrong}>Jonas S. · Google OAuth</span>
            <span className={styles.q}>How many guests?</span>
            <span className={styles.field}>2 guests</span>
            <span className={styles.q}>Anything we should know?</span>
            <span className={`${styles.field} ${styles.fieldArea}`}>
              Pets, allergies, requirements…
            </span>
            <span className={styles.reserve}>Reserve now</span>
          </div>
        </div>
      </MockFrame>
    </div>
  )
}
