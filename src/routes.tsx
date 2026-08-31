import type { RouteRecord } from 'vite-react-ssg'
import { Layout } from '@/components/Layout'
import { IndexPage } from '@/pages/IndexPage'
import { CasePage } from '@/pages/CasePage'
import { projects } from '@/content/projects'

/**
 * Real routes, not component state:
 *   /            → index
 *   /work/:slug  → per-project case page
 * getStaticPaths prerenders one HTML file per project (the Vite equivalent of
 * Next's generateStaticParams).
 */
export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <IndexPage />,
        entry: 'src/pages/IndexPage.tsx',
      },
      {
        path: 'work/:slug',
        element: <CasePage />,
        entry: 'src/pages/CasePage.tsx',
        getStaticPaths: () => projects.map((p) => `/work/${p.slug}`),
      },
    ],
  },
]
