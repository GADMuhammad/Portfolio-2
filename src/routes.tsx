import type { RouteRecord } from 'vite-react-ssg'
import { Layout } from '@/components/Layout'
import { IndexPage } from '@/pages/IndexPage'

/**
 * Route table. Real routes, not component state:
 *   /            → index
 *   /work/:slug  → per-project case page  (added in step 3, with getStaticPaths)
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
    ],
  },
]
