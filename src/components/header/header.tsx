import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby-plugin-intl'

import { colors } from '@thk/styles/variables'
import { mediaQuerie } from '@thk/helpers'
import Logo from '@thk/components/logo'

import { Nav } from './nav'

const StyledHeader = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: column-reverse;
  flex: 1;
  background-color: ${colors.black};
  color: ${colors.gray.main} !important;

  ${mediaQuerie.xl} {
    flex-direction: row;
  }
`

const HeaderNav = styled(Nav)`
  flex: 0 0 6rem;
`

const HeaderInner = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
`

const HomepageLink = styled(Link)`
  &:hover,
  &:focus {
    text-decoration: none;
  }
`

const Header: React.SFC = () => (
  <StyledHeader role="banner">
    <HeaderNav />
    <HeaderInner>
      <HomepageLink to="/">
        <Logo />
      </HomepageLink>
    </HeaderInner>
  </StyledHeader>
)

export { Header }
