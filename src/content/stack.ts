/**
 * "The Stack" content — ported verbatim from the design reference's `stack`
 * array (public/design/Portfolio Split.dc.html). Each chip's icon points at a
 * locally-vendored SVG under /public/icons (see scripts/vendor-icons.mjs); the
 * design hot-linked cdn.simpleicons.org, which the brief says to vendor.
 */

export interface StackChip {
  label: string
  /** absolute path to a vendored monochrome SVG, or undefined for no glyph */
  icon?: string
}

export interface StackCategory {
  num: string
  label: string
  items: StackChip[]
}

export const stack: StackCategory[] = [
  {
    num: '01',
    label: 'Libraries & Frameworks',
    items: [
      { label: 'Next.js', icon: '/icons/nextdotjs.svg' },
      { label: 'React', icon: '/icons/react.svg' },
      { label: 'Redux Toolkit', icon: '/icons/redux.svg' },
      { label: 'React Router', icon: '/icons/reactrouter.svg' },
      { label: 'TanStack Query', icon: '/icons/reactquery.svg' },
    ],
  },
  {
    num: '02',
    label: 'Languages & Core Web',
    items: [
      { label: 'JavaScript', icon: '/icons/javascript.svg' },
      { label: 'TypeScript', icon: '/icons/typescript.svg' },
      { label: 'HTML5', icon: '/icons/html5.svg' },
    ],
  },
  {
    num: '03',
    label: 'Styling & Animation',
    items: [
      { label: 'CSS3', icon: '/icons/css.svg' },
      { label: 'Tailwind CSS', icon: '/icons/tailwindcss.svg' },
      { label: 'Sass', icon: '/icons/sass.svg' },
      { label: 'Styled Components', icon: '/icons/styledcomponents.svg' },
      { label: 'Motion', icon: '/icons/framer.svg' },
    ],
  },
  {
    num: '04',
    label: 'Web Extensions',
    items: [
      { label: 'Plasmo Framework', icon: '/icons/plasmo.svg' },
      { label: 'Chrome Extension APIs', icon: '/icons/googlechrome.svg' },
      { label: 'Chrome Storage API', icon: '/icons/googlechrome.svg' },
    ],
  },
  {
    num: '05',
    label: 'Backend & Auth',
    items: [
      { label: 'Supabase', icon: '/icons/supabase.svg' },
      { label: 'NextAuth.js', icon: '/icons/nextauth.svg' },
    ],
  },
]
