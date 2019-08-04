import * as React from 'react'
import styled from '@emotion/styled'

import { MdArrowForward } from 'react-icons/md'
import { TerminalContext, ITerminalPost } from '@thk/components/terminal'
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
  display: flex;
  margin-left: auto;
  background-color: transparent;
  border: 0;
  color: ${colors.white};
  cursor: pointer;

  * {
    margin-left: 1rem;
  }
`

const encode = (data: any) => {
  return Array.from(data)
    .filter(element => !Array.isArray(element))
    .map(
      (field: any) =>
        `${encodeURIComponent(field.name)}=${encodeURIComponent(field.value)}`
    )
    .join('&')
}

/* tslint:disable-next-line */
const validateForm = (
  elements: ArrayLike<HTMLInputElement | HTMLTextAreaElement> = []
) => {
  if (elements !== []) {
    return Array.from(elements)
      .filter(element => element.tagName !== 'BUTTON')
      .map(field => {
        console.dir(field)
        if (!field.validity!.valid) {
          return {
            field: field.name,
            status: 'error',
            message: `'${field.name}': ${field.validationMessage}`
          }
        }
      })
      .filter(f => f !== undefined)
  }
}

export const Form: React.FC<{}> = () => {
  const handleSubmit = (
    ev: React.FormEvent,
    createAlert: (posts: ITerminalPost[]) => void
  ) => {
    const form: HTMLFormElement | null = document.querySelector('#contact-form')

    if (form !== null) {
      const formValidate = validateForm(form.elements as any) || []

      ev.preventDefault()

      if (formValidate.length > 0) {
        createAlert(formValidate as any)
      } else {
        console.dir(form.elements)
        console.log(encode(form.elements))
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode(form)
        })
          .then(() => {
            form.reset()
            createAlert([{ status: 'done', message: 'Success sent!' }])
          })
          .catch(error => {
            createAlert([{ status: 'error', message: error.message }])
          })
      }
    }
  }

  return (
    <TerminalContext.Consumer>
      {({ createAlert }: any) => (
        <React.Fragment>
          <FormComponent
            id="contact-form"
            name="contact-form"
            method="POST"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact-form" />
            <TextField name="name" type="text" placeholder="Name" required />
            <TextField name="email" type="email" placeholder="Email" required />
            <TextField
              name="message"
              placeholder="Message..."
              as="textarea"
              rows={15}
              required
            />
            <Button onClick={ev => handleSubmit(ev, createAlert)}>
              Send <MdArrowForward />
            </Button>
          </FormComponent>
        </React.Fragment>
      )}
    </TerminalContext.Consumer>
  )
}
