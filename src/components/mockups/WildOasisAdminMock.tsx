import { MockFrame } from './MockFrame'
import { dashStats, todayRows, stayBars, bookingRows } from '@/content/mockups'
import styles from './WildOasisAdminMock.module.css'

/** Mockup 03 — Wild Oasis Admin: stat cards, Today + Stay-duration, bookings table. */
export function WildOasisAdminMock() {
  return (
    <div className={styles.stack}>
      <MockFrame>
        <div className={styles.panelHead}>
          <p className={styles.h4}>Dashboard</p>
          <span className={styles.seg}>
            <span className={styles.segOn}>7 days</span>
            <span className={styles.segOff}>30 days</span>
            <span className={styles.segOff}>90 days</span>
          </span>
        </div>

        <div className={styles.stats}>
          {dashStats.map((k) => (
            <span className={styles.stat} key={k.label}>
              <span className={styles.statLabel}>{k.label}</span>
              <span className={styles.statValue}>{k.value}</span>
            </span>
          ))}
        </div>

        <div className={styles.pair}>
          <div>
            <span className={styles.tinyLabel}>Today</span>
            <div className={styles.todayList}>
              {todayRows.map((t) => (
                <div className={styles.todayRow} key={t.guest}>
                  <span className={styles.chip}>{t.state}</span>
                  <span className={styles.todayText}>
                    <span className={styles.ellip}>{t.guest}</span>
                    <span className={`${styles.ellip} ${styles.todayNights}`}>{t.nights}</span>
                  </span>
                  <span className={styles.action}>{t.action}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className={styles.tinyLabel}>Stay duration</span>
            <div className={styles.bars}>
              {stayBars.map((b) => (
                <span className={styles.barRow} key={b.label}>
                  <span className={styles.barLabel}>{b.label}</span>
                  <span className={styles.barTrack}>
                    <span className={styles.barFill} style={{ width: b.pct }} />
                  </span>
                  <span className={styles.barCount}>{b.count}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </MockFrame>

      <MockFrame>
        <div className={styles.panelHead}>
          <p className={styles.h4}>All bookings</p>
          <span className={styles.filters}>
            <span className={styles.filterOn}>All</span>
            <span className={styles.filterOff}>Checked in</span>
            <span className={styles.filterOff}>Unconfirmed</span>
          </span>
        </div>

        <div className={styles.scroll}>
          <div className={styles.scrollInner}>
            <div className={styles.tableHead}>
              <span>Cabin</span>
              <span>Guest</span>
              <span>Dates</span>
              <span>Status</span>
              <span className={styles.right}>Amount</span>
            </div>
            {bookingRows.map((r) => (
              <div className={styles.tableRow} key={r.cabin + r.guest}>
                <span className={styles.cabin}>{r.cabin}</span>
                <span className={styles.todayText}>
                  <span className={styles.ellip}>{r.guest}</span>
                  <span className={`${styles.ellip} ${styles.email}`}>{r.email}</span>
                </span>
                <span className={`${styles.ellip} ${styles.dates}`}>{r.dates}</span>
                <span className={styles.status}>{r.status}</span>
                <span className={styles.amount}>{r.amount}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.tableActions}>
          <span className={styles.actionRed}>Add new cabin</span>
          <span className={styles.actionOutline}>See details</span>
        </div>
      </MockFrame>
    </div>
  )
}
