import * as React from 'react'

import Page from '@thk/components/Page'
import IndexLayout from '@thk/layouts'
import TextField from '@thk/components/text-field'
import Code from '@thk/components/code'

const Contact = () => (
  <IndexLayout>
    <Page title="contact.ts">
      <Code alias="Contact" packageName="@thk/helpers" />
      <h2>Talk to me</h2>
      <form id="contact-form" name="contact-form" data-netlify="true" action="/contact-sent">
        <TextField name="name" placeholder="Name" />
        <TextField name="email" placeholder="Email" />
        <TextField name="message" placeholder="Message..." as="textarea" rows="15" />
        <button
          onClick={() => {
            const form: HTMLFormElement | null = document.querySelector('#contact-form')
            if (form) form.submit()
          }}
        >
          Send
        </button>
      </form>

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
