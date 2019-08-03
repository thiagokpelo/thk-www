import * as React from 'react'
import styled from '@emotion/styled'

const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;
`

export const Image: React.FC<{ alt: string; src?: string }> = ({
  alt,
  src
}) => <StyledImage src={src} alt={alt} />
