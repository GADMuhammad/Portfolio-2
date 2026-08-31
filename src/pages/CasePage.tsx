import { Link, useParams } from 'react-router-dom'
import { Head } from 'vite-react-ssg'
import { projects, getProject } from '@/content/projects'
import { Mockup } from '@/components/mockups/Mockup'
import { GithubIcon, ExternalLinkIcon, ChromeIcon } from '@/components/icons'
import styles from './CasePage.module.css'

export function CasePage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProject(slug) : undefined

  if (!project) {
    return (
      <main className="shell">
        <p className={styles.notFound}>
          That case doesn’t exist. <Link to="/">Back to all work</Link>.
        </p>
      </main>
    )
  }

  const index = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <Head>
        <title>{`${project.title} — Muhammad Gad`}</title>
        <meta name="description" content={project.short} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${project.title} — Muhammad Gad`} />
        <meta property="og:description" content={project.short} />
      </Head>

      <main className={`shell ${styles.page}`}>
        <div className={styles.back}>
          <Link to="/" className={styles.backLink}>
            ← All work
          </Link>
        </div>

        <div className={styles.body}>
          <div className={styles.main}>
            <div className="reveal">
              <span className={styles.kicker}>
                {project.num} — {project.kind}
              </span>
              <h1 className={styles.title}>{project.title}</h1>
              <p className={styles.blurb}>{project.blurb}</p>
            </div>

            <div className="reveal">
              <Mockup mockup={project.mockup} />
            </div>

            <h2 className={`${styles.whatLabel} reveal`}>What it does</h2>
            <div className={styles.features}>
              {project.points.map((point, i) => (
                <div className={`${styles.feature} reveal`} key={i}>
                  <span className={styles.marker} aria-hidden="true">
                    —
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className={`${styles.aside} reveal`}>
            <div>
              <h2 className={styles.asideLabel}>Built with</h2>
              <div className={styles.tags}>
                {project.tech.map((t) => (
                  <span className={`tag tag-outline ${styles.tag}`} key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.buttons}>
              <a
                className={`btn btn-secondary ${styles.btn}`}
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon size={16} />
                View on GitHub
              </a>
              {project.landing && (
                <a
                  className={`btn ${project.store ? 'btn-secondary' : 'btn-primary'} ${styles.btn}`}
                  href={project.landing}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLinkIcon size={16} />
                  {project.landingCta}
                </a>
              )}
              {project.store && (
                <a
                  className={`btn btn-primary ${styles.btn}`}
                  href={project.store}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ChromeIcon size={16} />
                  Chrome Web Store
                </a>
              )}
            </div>

            <div>
              <h2 className={styles.asideLabel}>Next case</h2>
              <Link to={`/work/${next.slug}`} className={styles.nextLink}>
                {next.title} →
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </>
  )
}
