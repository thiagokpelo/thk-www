import React from 'react'
import styled from '@emotion/styled'

import { MdArrowForward } from 'react-icons/md'
import TextField from '@thk/components/text-field'

import { colors } from '@thk/styles/variables'

const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 10px 0 20px;
`

const Button = styled.button`
  background-color: transparent;
  border: 0;
  color: ${colors.white};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const Form: React.FC<any> = () => {
  const handleSubmit = (evt: React.FormEvent<any>) => {
    evt.preventDefault()

    const form: HTMLFormElement | null = document.querySelector('#contact-form')
    if (form) form.submit()
  }

  return (
    <FormComponent id="contact-form" name="contact-form" method="POST" data-netlify-honeypot="bot-field" action="/contact-sent">
      <input type="hidden" name="form-name" value="contact-form" />
      <TextField name="name" type="text" placeholder="Name" required />
      <TextField name="email" type="email" placeholder="Email" required />
      <TextField name="message" placeholder="Message..." as="textarea" rows={15} required />
      <Button onClick={handleSubmit}>
        Send <MdArrowForward />
      </Button>
    </FormComponent>
  )
}
