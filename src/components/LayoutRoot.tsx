import * as React from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import normalize from '@thk/styles/normalize'
import { heights } from '@thk/styles/variables'
import { mediaQuerie } from '@thk/helpers'
import { WrapperTerminal } from '@thk/components/terminal'

const StyledLayoutRoot = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'header '
    'main'
    'footer';
  grid-template-rows: auto 1fr ${heights!.footer}rem;
  width: 100vw;

  ${mediaQuerie!.xl} {
    grid-template-columns: 25% 75%;
    grid-template-areas:
      'header main'
      'footer footer';
    grid-template-rows: 1fr ${heights!.footer}rem;
    height: 100vh;
    overflow: hidden;
  }
`

type LayoutRootProps = {
  className?: string
}

const LayoutRoot: React.SFC<LayoutRootProps> = ({ children, className }) => (
  <>
    <WrapperTerminal>
      <Global styles={() => css(normalize)} />
      <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
    </WrapperTerminal>
  </>
)

export default LayoutRoot
