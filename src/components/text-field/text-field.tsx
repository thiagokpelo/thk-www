import * as React from 'react'
import styled from '@emotion/styled'
import { colors } from '@thk/styles/variables'
import css from '@emotion/css'

type Status = 'error' | null

type TextFieldProps = {
  label?: string
  status?: Status
} & React.HTMLProps<HTMLInputElement | HTMLTextAreaElement>

const StyledTextField = styled.input<any>`
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

const StyledLabel = styled.label<{ status: Status }>`
  width: 100%;

  ${StyledTextField} {
    outline: 0 !important;
    box-shadow: none;
    transition: box-shadow 0.32s ease-in-out;

    &:focus {
      box-shadow: 0px 0px 0px 2px inset ${colors.black};
      z-index: 2;
      transition: box-shadow 0.16s ease-in-out;
    }

    ${props =>
      props.status === 'error' &&
      css`
        color: ${colors.error};
        border-color: ${colors.error};
        z-index: 2;

        &:focus {
          box-shadow: 0px 0px 0px 2px inset ${colors.error};
          transition: box-shadow 0.16s ease-in-out;
        }
      `}
  }
`

export const TextFieldComponent: React.FC<TextFieldProps> = ({
  label,
  status = null,
  ...props
}): JSX.Element => (
  <StyledLabel status={status}>
    {label}
    <StyledTextField {...props} />
  </StyledLabel>
)

export const TextField = TextFieldComponent
