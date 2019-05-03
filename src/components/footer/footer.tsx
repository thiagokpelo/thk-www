import * as React from 'react'
import SocialNav from '../social-nav'
import styled from '@emotion/styled'
import { colors } from '@thk/styles/variables'
import { mediaQuerie } from '@thk/helpers'

const StyledFooter = styled.footer`
  grid-area: footer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${colors.black};

  ${mediaQuerie.xl} {
    justify-content: flex-end;
  }
`

export const Footer = () => (
  <StyledFooter role="contentinfo">
    <SocialNav />
  </StyledFooter>
)
