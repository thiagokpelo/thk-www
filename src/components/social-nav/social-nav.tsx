import * as React from 'react'
import { FaGithub, FaCodepen, FaLinkedin, FaTwitter, FaInstagram, FaMedium } from 'react-icons/fa'
import styled from '@emotion/styled'
import { colors } from '../../styles/variables'

const Nav = styled.nav`
  a:not(:first-child) {
    margin-left: 15px;
  }

  a:hover {
    color: ${colors.gray.dark};
  }
`

export const SocialNav = () => (
  <Nav>
    <a href="https://github.com/thiagokpelo" target="_blank" rel="noopener noreferrer">
      <FaGithub />
    </a>
    <a href="https://codepen.io/thiagokpelo" target="_blank" rel="noopener noreferrer">
      <FaCodepen />
    </a>
    <a href="https://medium.com/@thiagokpelo" target="_blank" rel="noopener noreferrer">
      <FaMedium />
    </a>
    <a href="https://twitter.com/thiagokpelo" target="_blank" rel="noopener noreferrer">
      <FaTwitter />
    </a>
    <a href="https://instagram.com/thiagokpelo" target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </a>
    <a href="https://www.linkedin.com/in/thiago-capelo-0156446a/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin />
    </a>
  </Nav>
)
