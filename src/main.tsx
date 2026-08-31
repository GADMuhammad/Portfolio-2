import '@fontsource-variable/archivo'
import './styles/globals.css'
import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes'

// vite-react-ssg drives both dev and the static prerender from this export.
// Each route in `routes` is prerendered to its own HTML file at build time
// (the Vite equivalent of Next's generateStaticParams / per-route metadata).
export const createRoot = ViteReactSSG({ routes })
