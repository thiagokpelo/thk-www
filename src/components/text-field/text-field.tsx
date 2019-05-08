import * as React from 'react'
import styled from '@emotion/styled'
import { colors } from '@thk/styles/variables'
import css from '@emotion/css'

const StyledTextField = styled.input`
  position: relative;
  width: 100%;
  border-radius: 0;
  padding: 16px 24px;
  border: 2px solid ${colors.black};
  background-color: transparent;
  font-weight: 400;
  margin-bottom: -2px;
  color: inherit;
  resize: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.2);
  }
`

const StyledLabel = styled.label<{ status: 'error' | null }>`
  width: 100%;

  ${StyledTextField} {
    outline: 0;

    &:focus {
      outline: 3px solid ${colors.black};
      z-index: 2;
      transition: outline 0.16s ease-in-out;
    }

    ${props =>
      props.status === 'error' &&
      css`
        color: ${colors.error};
        border-color: ${colors.error};
        z-index: 2;

        &:focus {
          outline: 3px solid ${colors.error};
          transition: outline 0.16s ease-in-out;
        }
      `}
  }
`

export const TextFieldComponent = ({ label, status, ...props }: any) => (
  <StyledLabel status={status}>
    {label}
    <StyledTextField {...props} />
  </StyledLabel>
)

export const TextField = TextFieldComponent
