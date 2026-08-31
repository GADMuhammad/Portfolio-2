import { Outlet } from 'react-router-dom'
import { SiteHeader } from './SiteHeader'

/**
 * App shell shared by every route: the sticky header, then the routed page.
 * Each page owns its own <main> (and, on the index, the site <footer>) so the
 * landmark structure stays correct per route.
 */
export function Layout() {
  return (
    <>
      <SiteHeader />
      <Outlet />
    </>
  )
}
