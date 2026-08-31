import { MockFrame, Block } from './MockFrame'
import { countries } from '@/content/mockups'
import styles from './WorldCountriesMock.module.css'

/** Mockup 06 — The World Countries: search + region, 4 country cards, detail strip. */
export function WorldCountriesMock() {
  return (
    <MockFrame>
      <div className={styles.head}>
        <p className={styles.h4}>Where in the world?</p>
        <span className={styles.mode}>Dark mode ●</span>
      </div>

      <div className={styles.controls}>
        <span className={styles.search}>Search for a country…</span>
        <span className={styles.select}>
          <span>Filter by region</span>
          <span>▾</span>
        </span>
      </div>

      <div className={styles.cards}>
        {countries.map((c) => (
          <span className={styles.card} key={c.name}>
            <Block style={{ height: 40 }} />
            <span className={styles.cardBody}>
              <span className={`${styles.ellip} ${styles.cardName}`}>{c.name}</span>
              <span className={styles.cardMeta}>Pop. {c.pop}</span>
              <span className={styles.cardMeta}>
                {c.region} · {c.capital}
              </span>
            </span>
          </span>
        ))}
      </div>

      <div className={styles.detail}>
        <Block style={{ height: 62 }} />
        <span className={styles.detailBody}>
          <span className={styles.detailName}>Belgium</span>
          <span className={styles.detailFacts}>
            Native name: België · TLD .be · Euro · Dutch, French, German
          </span>
          <span className={styles.borders}>
            <span className={styles.bordersLabel}>Borders</span>
            <span className={styles.borderChip}>France</span>
            <span className={styles.borderChip}>Germany</span>
            <span className={styles.borderChip}>Netherlands</span>
          </span>
        </span>
      </div>
    </MockFrame>
  )
}
