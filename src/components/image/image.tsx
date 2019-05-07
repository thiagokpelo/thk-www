import * as React from 'react'
import styled from '@emotion/styled'

const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;
`

export const Image: React.FC<{ src?: any }> = ({ src }) => <StyledImage src={src} alt="Thiago Capelo" />
