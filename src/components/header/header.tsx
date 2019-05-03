import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { dimensions, colors } from '@thk/styles/variables'
import { mediaQuerie } from '@thk/helpers'
// import Logo from '../logo'

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
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`

const HomepageLink = styled(Link)`
  &:hover,
  &:focus {
    text-decoration: none;
  }
`

const Title = styled.h1``

const Subtitle = styled.h2`
  font-size: ${dimensions.headingSizes.h4}rem;
  line-height: ${dimensions.headingSizes.h4}rem;
  font-weight: 400;
  color: inherit;
`

interface HeaderProps {
  title: string
}

const Header: React.SFC<HeaderProps> = ({ title }) => (
  <StyledHeader role="banner">
    <HeaderNav />
    <HeaderInner>
      <HomepageLink to="/">
        {/* <Logo /> */}
        <Title>{title}</Title>
      </HomepageLink>
      <Subtitle>javascript developer</Subtitle>
    </HeaderInner>
  </StyledHeader>
)

export { Header }
