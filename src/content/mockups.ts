/**
 * Sample data for the six case-page mockups — ported verbatim from the design
 * reference's `renderVals()` (public/design/Portfolio Split.dc.html).
 */

export const threeRows = [1, 2, 3]
export const sixCards = [1, 2, 3, 4, 5, 6]

export const tweakChips = [
  'Toggle every feature on or off',
  'Hide the sidebar',
  'A quieter, search-like homepage',
  '⌘ / Ctrl + Shift + Y',
]

export const compareRows = [
  {
    title: 'Surviving the age of noise | Podcast',
    relative: '797K views · 9 months ago',
    absolute: '797K views · 12 May 2025',
  },
  {
    title: 'You are not a bad person — on setbacks',
    relative: '8.8K views · 7 months ago',
    absolute: '8.8K views · 5 Jan 2026',
  },
  {
    title: 'Secrets nobody tells you about Claude Code',
    relative: '26K views · 7 months ago',
    absolute: '26K views · 12 Jan 2026',
  },
]

/** Bookmarks Finder popup rows. `icon` points at a locally-vendored SVG. */
export const mockRows = [
  { title: 'Gmail', domain: 'accounts.google.com', key: '⌘1', icon: '/icons/gmail.svg' },
  { title: 'YouTube', domain: 'youtube.com', key: '⌘2', icon: '/icons/youtube.svg' },
  { title: 'Maps', domain: 'maps.google.com', key: '⌘3', icon: '/icons/googlemaps.svg' },
  {
    title: 'Translate',
    domain: 'translate.google.com',
    key: '⌘4',
    icon: '/icons/googletranslate.svg',
  },
  {
    title: 'MDN Web Docs',
    domain: 'developer.mozilla.org',
    key: '⌘5',
    icon: '/icons/mdnwebdocs.svg',
  },
  { title: 'GitHub', domain: 'github.com', key: '⌘6', icon: '/icons/github.svg' },
  { title: 'X Twitter', domain: 'x.com', key: '⌘7', icon: '/icons/x.svg' },
]

export const dashStats = [
  { label: 'Bookings', value: '12' },
  { label: 'Sales', value: '$39,335' },
  { label: 'Check-ins', value: '6' },
  { label: 'Occupancy', value: '48%' },
]

export const todayRows = [
  { state: 'Arriving', guest: 'Jonathan Smith', nights: '7 nights', action: 'Check in' },
  { state: 'Departing', guest: 'Jonas S.', nights: '5 nights', action: 'Check out' },
  { state: 'Arriving', guest: 'David Smith', nights: '11 nights', action: 'Check in' },
  { state: 'Departing', guest: 'Maria Rodriguez', nights: '2 nights', action: 'Check out' },
  { state: 'Arriving', guest: 'Abdul Rahman', nights: '5 nights', action: 'Check in' },
]

export const stayBars = [
  { label: '2 nights', pct: '34%', count: '4' },
  { label: '3 nights', pct: '48%', count: '6' },
  { label: '4–5 nights', pct: '26%', count: '3' },
  { label: '8–14 nights', pct: '18%', count: '2' },
]

export const bookingRows = [
  {
    cabin: '006',
    guest: 'David Smith',
    email: 'david@gmail.com',
    dates: '31 May → 11 Jun',
    status: 'Unconfirmed',
    amount: '$7,700',
  },
  {
    cabin: '008',
    guest: 'Abdul Rahman',
    email: 'abdul@gmail.com',
    dates: '31 May → 05 Jun',
    status: 'Unconfirmed',
    amount: '$7,750',
  },
  {
    cabin: '003',
    guest: 'Maria Rodriguez',
    email: 'maria@gmail.com',
    dates: '29 May → 31 May',
    status: 'Checked in',
    amount: '$600',
  },
  {
    cabin: '004',
    guest: 'Khadija Ahmed',
    email: 'khadija@gmail.com',
    dates: '27 May → 08 Jun',
    status: 'Checked in',
    amount: '$6,120',
  },
  {
    cabin: '005',
    guest: 'John Doe',
    email: 'johndoe@gmail.com',
    dates: '25 May → 27 May',
    status: 'Checked out',
    amount: '$820',
  },
]

export const cabins = [
  { name: 'Cabin 001', capacity: 'Up to 2 guests', price: '$400 / night' },
  { name: 'Cabin 002', capacity: 'Up to 2 guests', price: '$325 / night' },
  { name: 'Cabin 003', capacity: 'Up to 4 guests', price: '$300 / night' },
  { name: 'Cabin 004', capacity: 'Up to 4 guests', price: '$450 / night' },
]

/** June 2024 calendar cells; days 10–23 are the booked (black) range. */
export const calendar = Array.from({ length: 30 }, (_, i) => {
  const n = i + 1
  const booked = n >= 10 && n <= 23
  return {
    n: String(n),
    bg: booked ? 'var(--color-text)' : 'transparent',
    fg: booked ? 'var(--color-bg)' : 'var(--color-neutral-700)',
  }
})

export const desserts = [
  { kind: 'Waffle', name: 'Waffle with Berries', price: '$6.50' },
  { kind: 'Crème Brûlée', name: 'Vanilla Bean Brûlée', price: '$7.00' },
  { kind: 'Macaron', name: 'Macaron Mix of Five', price: '$8.00' },
  { kind: 'Tiramisu', name: 'Classic Tiramisu', price: '$5.50' },
  { kind: 'Baklava', name: 'Pistachio Baklava', price: '$4.00' },
  { kind: 'Cake', name: 'Red Velvet Cake', price: '$4.50' },
]

export const cartRows = [
  { name: 'Classic Tiramisu', qty: '2 × $5.50', total: '$11.00' },
  { name: 'Vanilla Bean Brûlée', qty: '1 × $7.00', total: '$7.00' },
  { name: 'Red Velvet Cake', qty: '1 × $4.50', total: '$4.50' },
]

export const countries = [
  { name: 'Germany', pop: '81,770,900', region: 'Europe', capital: 'Berlin' },
  { name: 'United States', pop: '323,947,000', region: 'Americas', capital: 'Washington' },
  { name: 'Brazil', pop: '206,135,893', region: 'Americas', capital: 'Brasília' },
  { name: 'Iceland', pop: '334,300', region: 'Europe', capital: 'Reykjavík' },
]
