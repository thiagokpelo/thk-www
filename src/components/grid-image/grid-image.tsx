import styled from '@emotion/styled'
import { mediaQuerie } from '@thk/helpers'

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  ${mediaQuerie.md} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const GridImage = StyledGrid
