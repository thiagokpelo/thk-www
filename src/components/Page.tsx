import * as React from 'react'
import styled from '@emotion/styled'
import { dimensions, colors } from '@thk/styles/variables'
import { FaReact } from 'react-icons/fa'

const StyledHeader = styled.header`
  display: flex;
  flex: 0 0 3rem;
  width: 100%;
  box-shadow: 0 3px 10px ${colors.black};
  background: ${colors.background};
  padding: 0.8rem;
  font-size: 1.2rem;
  line-height: 1.2rem;
`

const StyledContent = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  width: 100%;
  padding: ${dimensions.containerPadding}rem;
  overflow: auto;
  scroll-behavior: smooth;
  will-change: overflow;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
`

const ReactIcon = styled(FaReact)`
  color: rgb(97, 218, 251);
  margin-right: 1rem;
`

interface PageProps {
  className?: string
  title?: string
}

const Page: React.SFC<PageProps> = ({ children, title }) => (
  <React.Fragment>
    <StyledHeader>
      <ReactIcon />
      {title}
    </StyledHeader>
    <StyledContent>{children}</StyledContent>
  </React.Fragment>
)

export default Page
