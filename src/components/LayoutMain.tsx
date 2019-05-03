import * as React from 'react'
import styled from '@emotion/styled'
import { mediaQuerie } from '@thk/helpers'

const StyledLayoutMain = styled.main`
  grid-area: main;
  display: flex;
  flex-direction: column;
  flex: 1;

  ${mediaQuerie.xl} {
    overflow: hidden;
  }
`

interface LayoutMainProps {
  className?: string
  page?: string
}

const LayoutMain: React.SFC<LayoutMainProps> = ({ children, className }) => (
  <StyledLayoutMain className={className}>{children}</StyledLayoutMain>
)

export default LayoutMain
