import styles from './AvailabilityBar.module.css'

/**
 * README §2.2 — availability bar, rendered behind a boolean. 10px red square +
 * uppercase label, 2px bottom divider.
 */
export function AvailabilityBar({
  available = true,
  className,
}: {
  available?: boolean
  className?: string
}) {
  if (!available) return null
  return (
    <div className={`${styles.bar} ${className ?? ''}`}>
      <span className={styles.dot} aria-hidden="true" />
      <span>Open to frontend roles — remote or on-site</span>
    </div>
  )
}
