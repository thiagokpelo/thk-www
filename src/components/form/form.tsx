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

var serialize = function(form: any) {
  // Setup our serialized data
  var serialized = []

  // Loop through each field in the form
  for (var i = 0; i < form.elements.length; i++) {
    var field = form.elements[i]

    // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
    if (
      !field.name ||
      field.disabled ||
      field.type === 'file' ||
      field.type === 'reset' ||
      field.type === 'submit' ||
      field.type === 'button'
    )
      continue

    // If a multi-select, get all selections
    if (field.type === 'select-multiple') {
      for (var n = 0; n < field.options.length; n++) {
        if (!field.options[n].selected) continue
        serialized.push(encodeURIComponent(field.name) + '=' + encodeURIComponent(field.options[n].value))
      }
    }

    // Convert field data to a query string
    else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
      serialized.push(encodeURIComponent(field.name) + '=' + encodeURIComponent(field.value))
    }
  }

  return serialized.join('&')
}

export const Form: React.FC<any> = () => {
  const handleSubmit = (evt: React.FormEvent<any>) => {
    evt.preventDefault()

    const form: HTMLFormElement | null = document.querySelector('#contact-form')
    if (form) form.submit()
  }

  return (
    <FormComponent id="contact-form" name="contact-form" method="POST" action="/contact-sent">
      <TextField name="name" type="text" placeholder="Name" required />
      <TextField name="email" type="email" placeholder="Email" required />
      <TextField name="message" placeholder="Message..." as="textarea" rows={15} required />
      <Button onClick={handleSubmit}>
        Send <MdArrowForward />
      </Button>
    </FormComponent>
  )
}
