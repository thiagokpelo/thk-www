import { mediaQuerie } from '@thk/helpers'
import styled from '@emotion/styled'

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;

  width: 100%;
  height: 100%;

  ${mediaQuerie.md} {
    grid-template-columns: 1fr 1fr;
  }
`

export default Grid
