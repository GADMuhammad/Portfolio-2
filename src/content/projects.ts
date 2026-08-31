/**
 * Project content — ported verbatim from the design reference
 * (public/design/Portfolio Split.dc.html, the `PROJECTS` array). Do not
 * rewrite or shorten any copy. `slug` (for the /work/:slug route) and `mockup`
 * (which case-page mockup to render) are the only added fields.
 */

export type MockupKey =
  | 'youtube-tweak'
  | 'bookmarks-finder'
  | 'wild-oasis-admin'
  | 'wild-oasis-guest'
  | 'product-list-cart'
  | 'world-countries'

export interface Project {
  num: string
  slug: string
  mockup: MockupKey
  kind: string
  title: string
  /** one-line summary shown in the index Work row */
  short: string
  stackLine: string
  /** long intro on the case page */
  blurb: string
  /** the "What it does" list — use verbatim */
  points: string[]
  /** sidebar "Built with" tags */
  tech: string[]
  href: string
  landing?: string
  landingCta?: string
  store?: string
}

export const projects: Project[] = [
  {
    num: '01',
    slug: 'youtube-tweak',
    mockup: 'youtube-tweak',
    kind: 'Chrome Extension — v1.2.0',
    title: 'YouTube Tweak — Control YouTube and make it calmer',
    short:
      'Declutters YouTube: feature toggles, grid search results, a calm homepage, absolute timestamps and no infinite scroll.',
    stackLine: 'React · TS · Plasmo',
    blurb:
      'An extension that declutters the YouTube interface, restores sanity to the timeline, and strips out addictive UI patterns — built for power users who guard their time and focus. Shipping in the Chrome Web Store, free.',
    points: [
      'Quick Search — search YouTube from the popup with live autocomplete; open a result by click, Enter, or ⌘ / Ctrl + 1–9',
      'Fully keyboard driven and RTL-aware: ↓ / ↑ move between input and suggestions, Escape clears, Backspace returns to the input',
      'Selection-aware: the popup pre-fills with text you had selected, and right-clicking any selection offers “Search on YouTube”',
      'Smart tab reuse — a result reuses an empty new tab, or opens beside your current one so you never lose your place',
      'Turn Features On or Off — a Features tab picks exactly which tweaks run, applied instantly to every open YouTube tab',
      'Intentional Browsing — infinite scroll replaced with a Load More button',
      'Absolute Timestamps with your preferred date format instead of “2 days ago”',
      'Grid view for search results — a multi-column card grid keeping only videos, playlists and channels; works on channel search tabs too',
      "Minimalist Home Page — a calm, Google-style page using YouTube's own search bar, so suggestions, voice search and “/” still work",
      'Hide Sidebar — the left menu strip and its ☰ button gone on every page',
      'Feed Filtering — show either Videos or Shorts on the Subscriptions page',
      'Cleaner popup layout with a single swipeable tab row, plus a keyboard shortcut (Ctrl / ⌘ + Shift + Y) you can remap in chrome://extensions/shortcuts',
      'Next up: hiding videos by channel or keyword entirely',
    ],
    tech: ['React', 'TypeScript', 'Plasmo', 'Sass', 'plasmohq/storage', 'Chrome Storage API'],
    href: 'https://github.com/GADMuhammad/Youtube-Tweak',
    landing: 'https://you-tube-tweak-landing-page.vercel.app/',
    landingCta: 'Landing page',
    store:
      'https://chromewebstore.google.com/detail/youtube-tweak-control-you/oboblbfbeolffgmhmgkjaaamelcmncoi',
  },
  {
    num: '02',
    slug: 'bookmarks-finder',
    mockup: 'bookmarks-finder',
    kind: 'Chrome Extension',
    title: 'Bookmarks Finder',
    short:
      'A keyboard-first popup that searches hundreds of bookmarks instantly, with a Google fallback.',
    stackLine: 'React · TS · Plasmo',
    blurb:
      'A fast, keyboard-first popup for searching and handling bookmarks — made for people whose bookmark lists stopped being browsable years ago.',
    points: [
      'Instant fuzzy search across hundreds of bookmarks — 343 in my own profile',
      '⌘1 – ⌘9 opens any of the top results without leaving the keyboard',
      'Falls through to a Google search (⌘G) when nothing matches',
      'Light and dark themes follow the OS automatically via prefers-color-scheme',
    ],
    tech: ['React', 'TypeScript', 'Plasmo', 'Chrome Extension APIs'],
    href: 'https://github.com/GADMuhammad',
    landing: 'https://bookmarks-finder-landing-page.vercel.app/',
    landingCta: 'Landing page',
    store:
      'https://chromewebstore.google.com/detail/bookmarks-finder/gnoinjapogncnbjdflkjlnbhblnnbpch',
  },
  {
    num: '03',
    slug: 'the-wild-oasis-admin-dashboard',
    mockup: 'wild-oasis-admin',
    kind: 'Full-stack Dashboard',
    title: 'The Wild Oasis — Admin Dashboard',
    short:
      'Hotel back-office: cabin CRUD, check-in workflows, role-based auth and occupancy analytics.',
    stackLine: 'React · TanStack · Supabase',
    blurb:
      'An internal administration dashboard for a hotel: feature-based architecture, role-based Supabase authentication and protected routing throughout.',
    points: [
      'Server state optimized with TanStack Query — fetching, caching and mutations across cabin CRUD and check-in workflows',
      'Occupancy and revenue analytics charted with Recharts',
      'Structured form validation via React Hook Form, with error boundaries and toasts',
    ],
    tech: [
      'React',
      'React Router',
      'Vite',
      'TanStack Query',
      'Supabase',
      'Tailwind CSS',
      'Motion',
      'Recharts',
      'date-fns',
    ],
    href: 'https://github.com/GADMuhammad',
    landing: 'https://the-wild-oasis-admin-dashboard-2cly-gold.vercel.app/dashboard',
    landingCta: 'Live dashboard',
  },
  {
    num: '04',
    slug: 'the-wild-oasis-guest-website',
    mockup: 'wild-oasis-guest',
    kind: 'Next.js Product Site',
    title: 'The Wild Oasis — Guest Website',
    short:
      'Guest-facing booking site on Server Components and Server Actions, with Google OAuth and live pricing.',
    stackLine: 'Next.js · NextAuth · Supabase',
    blurb:
      'The guest-facing side of the same product, architected on Next.js Server Components for rendering and Server Actions for every database mutation.',
    points: [
      'NextAuth v5 Google OAuth with custom callbacks that provision and link guest accounts in Supabase automatically',
      'Interactive reservation system with live pricing calculations',
      'Automated date-range blocking driven by existing bookings',
    ],
    tech: [
      'Next.js (App Router)',
      'NextAuth v5',
      'Supabase',
      'Tailwind CSS',
      'Styled Components',
      'date-fns',
      'heroicons',
    ],
    href: 'https://github.com/GADMuhammad',
    landing: 'https://the-wild-oasis-xuae.vercel.app/',
    landingCta: 'Live site',
  },
  {
    num: '05',
    slug: 'product-list-with-cart',
    mockup: 'product-list-cart',
    kind: 'React Interface',
    title: 'Product List with Cart',
    short:
      'A dessert shop interaction study: live totals, an order modal and a cart that survives refresh.',
    stackLine: 'React 19 · Framer Motion',
    blurb:
      'A dessert shop built as an interaction study: browse the grid, adjust quantities, watch the total update live, and confirm the order in a summary modal — every transition animated.',
    points: [
      'Add to cart and adjust quantities with + / − controls, or remove an item outright',
      'Live item count and order total, with an empty-cart placeholder state',
      '“Confirm Order” summary modal, and “Start a New Order” to reset',
      'Cart persisted in localStorage, so a refresh never loses the order',
      'Responsive layout with per-breakpoint product images via <picture>',
      'Staggered entrances and spring transitions throughout, plus a post-order toast',
    ],
    tech: ['React 19', 'Vite', 'Tailwind CSS', 'Framer Motion', 'react-toastify', 'Ionicons'],
    href: 'https://github.com/GADMuhammad/Product-list-with-cart',
    landing: 'https://product-list-with-cart-drab-nine.vercel.app/',
    landingCta: 'Live site',
  },
  {
    num: '06',
    slug: 'the-world-countries',
    mockup: 'world-countries',
    kind: 'React SPA',
    title: 'The World Countries',
    short:
      'An atlas of 249 countries: fuzzy search, composable filters, border hopping and a remembered theme.',
    stackLine: 'React · Fuse.js · Router',
    blurb:
      'An interactive atlas of all 249 countries and territories: browse them as cards, search and filter, open any country in full detail, and hop between neighbours through their shared borders — in a light or dark theme that is remembered across visits.',
    points: [
      'Country grid — flag, population, region and capital per card, with lazy-loaded flags and a fade-in on load',
      'Fuzzy search (Fuse.js) — typo-tolerant and out-of-order across name, native name, capital, ISO alpha-3, currency and language; “gemany” finds Germany, “tokyo” finds Japan',
      'One dropdown filters by continent, sub-region, spoken language or currency; it composes with the search text (AND), and an empty result shows a friendly illustration',
      'Detail page with native name, TLD, population, currencies, region, sub-region, languages, area and capital — plus a button per bordering country',
      'Filter state lives in the URL (?q=…&region=…), so results are shareable and survive navigating into a country and back',
      'Light / dark theme applied before first paint from localStorage — no flash on reload',
      'Offline-friendly: the dataset is fetched once and cached in memory and localStorage, so warm loads render instantly with no network',
      'Responsive from a four-column grid down to one, with breakpoints at 1300 / 1190 / 930 / 860 / 580 px',
    ],
    tech: [
      'React 19',
      'Vite 6',
      'React Router 7',
      'Tailwind CSS 3',
      'react-select',
      'Fuse.js',
      'styled-components',
    ],
    href: 'https://github.com/GADMuhammad/REST-Countries-API-with-color-theme-switcher',
    landing: 'https://rest-countries-api-with-color-theme-seven-zeta.vercel.app/',
    landingCta: 'Live site',
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
