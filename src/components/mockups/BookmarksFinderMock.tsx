import { MockFrame } from './MockFrame'
import { SearchIcon } from '../icons'
import { mockRows } from '@/content/mockups'
import styles from './BookmarksFinderMock.module.css'

/** Mockup 02 — Bookmarks Finder: search field, 7 result rows, Google fallback. */
export function BookmarksFinderMock() {
  return (
    <MockFrame>
      <div className={styles.field}>
        <SearchIcon size={16} />
        <span className={styles.fieldText}>Search 343 bookmarks or Google…</span>
      </div>

      {mockRows.map((r) => (
        <div className={styles.row} key={r.title}>
          <span className={styles.favicon}>
            <img src={r.icon} alt="" aria-hidden="true" width={15} height={15} />
          </span>
          <span className={styles.text}>
            <span className={styles.title}>{r.title}</span>
            <span className={styles.domain}>{r.domain}</span>
          </span>
          <span className={styles.key}>{r.key}</span>
        </div>
      ))}

      <div className={styles.fallback}>
        <span className={styles.fallbackText}>
          Search Google for <span className={styles.fallbackQuery}>&ldquo;bookmarks&rdquo;</span>
        </span>
        <span className={styles.key}>⌘G</span>
      </div>
    </MockFrame>
  )
}
