import { Link, useLocation } from 'react-router-dom'
import { DownloadIcon } from './icons'
import styles from './SiteHeader.module.css'

/**
 * Sticky header, identical markup on every route (README §1). Left: the brand
 * links to the index. Right: the route breadcrumb ("Portfolio" on the index,
 * "Case study" on a case page) and the red Download CV button, which points at
 * the CV PDF with a real `download` attribute.
 */
export function SiteHeader() {
  const { pathname } = useLocation()
  const crumb = pathname === '/' ? 'Portfolio' : 'Case study'

  return (
    <header className={styles.header}>
      <div className={`shell ${styles.inner}`}>
        <Link to="/" className={styles.brand}>
          <span className={styles.mark} aria-hidden="true">
            MG
          </span>
          <span className={styles.brandName}>MUHAMMAD GAD</span>
        </Link>

        <div className={styles.right}>
          <span className={styles.crumb}>{crumb}</span>
          <a
            className={`btn btn-primary ${styles.cv}`}
            href="/assets/Muhammad-Gad-CV.pdf"
            download="Muhammad-Gad-CV.pdf"
          >
            <DownloadIcon size={15} />
            Download CV
          </a>
        </div>
      </div>
    </header>
  )
}
