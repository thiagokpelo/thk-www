import * as React from 'react'
import styled from '@emotion/styled'

import Page from '@thk/components/Page'
import IndexLayout from '@thk/layouts'
import TextField from '@thk/components/text-field'
import Code from '@thk/components/code'
import { colors } from '@thk/styles/variables'
import { MdArrowForward } from 'react-icons/md'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 600px;
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

const Contact = () => (
  <IndexLayout>
    <Page title="contact.ts">
      <Code alias="Contact" packageName="@thk/helpers" />
      <h2>Talk to me</h2>
      <Form id="contact-form" name="contact-form" data-netlify="true" action="/contact-sent">
        <TextField name="name" type="text" placeholder="Name" />
        <TextField name="email" type="email" placeholder="Email" />
        <TextField name="message" placeholder="Message..." as="textarea" rows="15" />
        <Button type="submit">
          Send <MdArrowForward />
        </Button>
      </Form>

      <h2>
        São Paulo
        <br />/ Brazil
      </h2>

      <ul>
        <li>
          <a href="https://glambox.com.br" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </li>
        <li>
          <a href="https://amil.com.br" target="_blank" rel="noopener noreferrer">
            Linkedin
          </a>
        </li>
        <li>
          <a href="https://printi.com.br" target="_blank" rel="noopener noreferrer">
            (+55 11) 973 498 187
          </a>
        </li>
      </ul>
    </Page>
  </IndexLayout>
)

export default Contact
