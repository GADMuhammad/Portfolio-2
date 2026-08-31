import { MockFrame, Block } from './MockFrame'
import { ArrowRightIcon } from '../icons'
import { threeRows, sixCards, tweakChips, compareRows } from '@/content/mockups'
import styles from './YoutubeTweakMock.module.css'

/** Mockup 01 — YouTube Tweak: List→Grid comparison, then infinite-scroll vs Load More. */
export function YoutubeTweakMock() {
  return (
    <div className={styles.stack}>
      <MockFrame>
        <div className={styles.head}>
          <span className={styles.kicker}>New in v1.2.0</span>
          <p className={styles.h4}>Search results, as a grid.</p>
          <p className={styles.sub}>
            One endless column becomes a tidy card grid — exactly like the homepage you already read
            fast.
          </p>
        </div>

        <div className={styles.compareGrid}>
          <div className={styles.listPane}>
            <span className={styles.tinyLabel}>List</span>
            {threeRows.map((n) => (
              <span className={styles.listRow} key={n}>
                <span className={styles.listLines}>
                  <Block style={{ height: 7 }} />
                  <Block style={{ height: 7, width: '62%' }} />
                </span>
                <Block style={{ height: 32 }} />
              </span>
            ))}
          </div>

          <div className={styles.arrow}>
            <ArrowRightIcon size={22} />
          </div>

          <div className={styles.gridPane}>
            <span className={styles.tinyLabelInk}>Grid</span>
            <span className={styles.cardGrid}>
              {sixCards.map((n) => (
                <span className={styles.card} key={n}>
                  <Block style={{ height: 30 }} />
                  <Block style={{ height: 5 }} />
                  <Block style={{ height: 5, width: '60%' }} />
                </span>
              ))}
            </span>
          </div>
        </div>

        <div className={styles.chips}>
          {tweakChips.map((c) => (
            <span className={styles.chip} key={c}>
              {c}
            </span>
          ))}
        </div>
      </MockFrame>

      <MockFrame>
        <div className={styles.head}>
          <p className={styles.h4}>You choose when to stop.</p>
          <p className={styles.sub}>
            Infinite scroll is built to keep you here. YouTube Tweak swaps it for a single button —
            so watching stays a decision, not a reflex.
          </p>
        </div>

        <div className={styles.pair}>
          <div className={styles.beforePane}>
            <div className={styles.paneHead}>
              <span className={styles.tinyLabel}>Before</span>
              <span className={styles.badgeOutline}>Never stops</span>
            </div>
            {compareRows.map((v) => (
              <div className={styles.videoRow} key={v.title}>
                <Block style={{ height: 38 }} />
                <span className={styles.videoText}>
                  <span className={styles.videoTitle}>{v.title}</span>
                  <span className={styles.videoMeta}>{v.relative}</span>
                </span>
              </div>
            ))}
            <div className={styles.beforeFoot}>Loading forever…</div>
          </div>

          <div className={styles.afterPane}>
            <div className={styles.paneHead}>
              <span className={styles.tinyLabelInk}>After</span>
              <span className={styles.badgeRed}>You decide</span>
            </div>
            {compareRows.map((v) => (
              <div className={styles.videoRow} key={v.title}>
                <Block style={{ height: 38 }} />
                <span className={styles.videoText}>
                  <span className={styles.videoTitle}>{v.title}</span>
                  <span className={styles.videoMeta}>{v.absolute}</span>
                </span>
              </div>
            ))}
            <div className={styles.afterFoot}>
              <span className={styles.loadMore}>Load more videos</span>
              <span className={styles.videoMeta}>The decision is yours</span>
            </div>
          </div>
        </div>
      </MockFrame>
    </div>
  )
}
