import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { SiteHeader } from './SiteHeader'

/** Jump to the top on every route change (README §Interactions: scroll to top). */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

/**
 * App shell shared by every route: the sticky header, then the routed page.
 * Each page owns its own <main> (and, on the index, the site <footer>) so the
 * landmark structure stays correct per route.
 */
export function Layout() {
  return (
    <>
      <ScrollToTop />
      <SiteHeader />
      <Outlet />
    </>
  )
}
