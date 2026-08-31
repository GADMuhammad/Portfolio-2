import type { ComponentType } from 'react'
import type { MockupKey } from '@/content/projects'
import { YoutubeTweakMock } from './YoutubeTweakMock'
import { BookmarksFinderMock } from './BookmarksFinderMock'
import { WildOasisAdminMock } from './WildOasisAdminMock'
import { WildOasisGuestMock } from './WildOasisGuestMock'
import { ProductListCartMock } from './ProductListCartMock'
import { WorldCountriesMock } from './WorldCountriesMock'

const MOCKUPS: Record<MockupKey, ComponentType> = {
  'youtube-tweak': YoutubeTweakMock,
  'bookmarks-finder': BookmarksFinderMock,
  'wild-oasis-admin': WildOasisAdminMock,
  'wild-oasis-guest': WildOasisGuestMock,
  'product-list-cart': ProductListCartMock,
  'world-countries': WorldCountriesMock,
}

/** Renders the flat CSS mockup for a project's case page. */
export function Mockup({ mockup }: { mockup: MockupKey }) {
  const Component = MOCKUPS[mockup]
  return <Component />
}
