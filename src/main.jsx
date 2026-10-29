import { ViteReactSSG } from 'vite-react-ssg/single-page'
import './index.css'
import App from './App.jsx'

// ViteReactSSG pre-renders the entire single-page portfolio into static HTML at build time (SSG).
// In the browser, it seamlessly hydrates the pre-rendered markup.
export const createRoot = ViteReactSSG(<App />)

