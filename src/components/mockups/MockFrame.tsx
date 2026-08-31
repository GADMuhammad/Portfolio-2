import type { CSSProperties, ReactNode } from 'react'
import styles from './MockFrame.module.css'

/**
 * The panel every mockup sits in: 2px ink frame, neutral-100 fill, 20px pad
 * (14px ≤700px). README §4 — `data-om-raster` in the prototype is an export
 * hint only and is not carried over.
 */
export function MockFrame({
  children,
  style,
  className,
}: {
  children: ReactNode
  style?: CSSProperties
  className?: string
}) {
  return (
    <div className={`${styles.panel} ${className ?? ''}`} style={style}>
      {children}
    </div>
  )
}

/** A grey stand-in block for imagery (neutral-300). Size via style. */
export function Block({ style, className }: { style?: CSSProperties; className?: string }) {
  return <span className={`${styles.block} ${className ?? ''}`} style={style} />
}
