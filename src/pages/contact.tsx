import * as React from 'react'

import IndexLayout from '@thk/layouts'
import Code from '@thk/components/code'
import Page from '@thk/components/Page'
import FormContact from '@thk/components/form'

function handleOnSubmit(evt: React.FormEvent<HTMLInputElement>): void {
  // evt.preventDefault()
  console.log(`Contact Page:`, evt)
}

const Contact = () => (
  <IndexLayout>
    <Page title="contact.ts">
      <Code alias="Contact" packageName="@thk/helpers" />
      <h2>Talk to me</h2>

      <FormContact />

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
