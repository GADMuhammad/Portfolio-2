/**
 * Inline UI icons. Paths are Lucide's own (stroke-width 2, currentColor),
 * copied from the design reference so the case-page controls match exactly.
 * `github` and `chrome` are inlined here because lucide-react 1.x no longer
 * ships brand glyphs; the rest could come from lucide-react but are kept here
 * so every icon in the app is defined one way.
 */
type IconProps = { size?: number; className?: string }

function base(size: number, className?: string) {
  return {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    className,
  }
}

export function DownloadIcon({ size = 15, className }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

export function GithubIcon({ size = 16, className }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

export function ExternalLinkIcon({ size = 16, className }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
    </svg>
  )
}

export function ChromeIcon({ size = 16, className }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <path d="M21.17 8H12" />
      <path d="M3.95 6.06 8.54 14" />
      <path d="M10.88 21.94 15.46 14" />
    </svg>
  )
}

export function ArrowRightIcon({ size = 22, className }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}

export function SearchIcon({ size = 16, className }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  )
}
