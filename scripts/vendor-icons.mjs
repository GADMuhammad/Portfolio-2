/**
 * Vendors the brand icons used by the site as local, monochrome SVGs under
 * public/icons/ — so nothing is hot-linked from cdn.simpleicons.org at runtime.
 *
 *   node scripts/vendor-icons.mjs
 *
 * Simple Icons glyphs are recoloured to the design ink (#201e1d). Two icons the
 * design draws by hand (Plasmo, NextAuth.js) are written out literally.
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import * as si from 'simple-icons'

const INK = '#201e1d'
const outDir = resolve(dirname(fileURLToPath(import.meta.url)), '../public/icons')
mkdirSync(outDir, { recursive: true })

/** Simple Icons slugs → local file name (kept identical for clarity). */
const brandSlugs = [
  'nextdotjs',
  'react',
  'redux',
  'reactrouter',
  'reactquery',
  'javascript',
  'typescript',
  'html5',
  'css',
  'tailwindcss',
  'sass',
  'styledcomponents',
  'framer',
  'googlechrome',
  'supabase',
  'gmail',
  'youtube',
  'googlemaps',
  'googletranslate',
  'mdnwebdocs',
  'github',
  'x',
]

for (const slug of brandSlugs) {
  const key = 'si' + slug.charAt(0).toUpperCase() + slug.slice(1)
  const icon = si[key]
  if (!icon) throw new Error(`simple-icons has no "${slug}"`)
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${INK}" role="img" aria-label="${icon.title}">` +
    `<path d="${icon.path}"/></svg>\n`
  writeFileSync(resolve(outDir, `${slug}.svg`), svg)
}

/* Hand-drawn glyphs the design uses instead of a brand mark. */
const custom = {
  plasmo:
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${INK}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">` +
    `<rect x="3" y="3" width="9.5" height="9.5"/><rect x="11.5" y="11.5" width="9.5" height="9.5"/></svg>\n`,
  nextauth:
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${INK}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">` +
    `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>\n`,
}
for (const [name, svg] of Object.entries(custom)) {
  writeFileSync(resolve(outDir, `${name}.svg`), svg)
}

console.log(`Wrote ${brandSlugs.length + Object.keys(custom).length} icons to public/icons/`)
