import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { FaFolderOpen, FaCodeBranch, FaBug, FaDocker, FaBookmark } from 'react-icons/fa'
import { colors } from '@thk/styles/variables'
import { mediaQuerie } from '@thk/helpers'

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-content: flex-start;

  ${mediaQuerie.xl} {
    align-content: stretch;
    flex-direction: column;
  }
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;
  color: ${colors.gray.medium};
  font-size: 32px;
  line-height: 32px;
  flex: 1;

  ${mediaQuerie.xl} {
    flex: 0 0 6rem;
  }

  &:hover {
    color: ${colors.gray.calm};
  }
`

const Nav: React.FC<{}> = () => (
  <StyledNav>
    <StyledLink to="/">
      <FaFolderOpen />
    </StyledLink>
    <StyledLink to="/me">
      <FaCodeBranch />
    </StyledLink>
    <StyledLink to="/projects">
      <FaBug />
    </StyledLink>
    <StyledLink to="/contact">
      <FaDocker />
    </StyledLink>
  </StyledNav>
)

export { Nav }
