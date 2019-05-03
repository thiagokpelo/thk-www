import * as React from 'react'
import styled from '@emotion/styled'

import { widths } from '../styles/variables'
import { getRemSize } from '../styles/mixins'

const StyledContainer = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  max-width: ${getRemSize(widths.lg)}rem;
`

interface ContainerProps {
  className?: string
}

const Container: React.SFC<ContainerProps> = ({ children, className }) => (
  <StyledContainer className={className}>{children}</StyledContainer>
)

export default Container
