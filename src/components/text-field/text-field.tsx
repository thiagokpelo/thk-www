import * as React from 'react'
import styled from '@emotion/styled'
import { colors } from '@thk/styles/variables'

const StyledLabel = styled.label``

const StyledTextField = styled.input`
  width: 100%;
  border-radius: 0;
  padding: 16px 24px;
  border: 1px solid ${colors.black};
  background-color: transparent;
`

export const GridComponent = ({ label, ...props }: any) => (
  <StyledLabel>
    {label}
    <StyledTextField {...props} />
  </StyledLabel>
)

export const TextField = GridComponent
