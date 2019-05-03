import { breakpoints } from '@thk/styles/variables'

type MediaType = { [k in keyof typeof breakpoints]?: string }
export const mediaQuerie: MediaType = Object.entries(breakpoints).reduce((a, b) => ({ ...a, [b[0]]: `@media (min-width: ${b[1]}px)` }), {})
