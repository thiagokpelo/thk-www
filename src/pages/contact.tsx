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
      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <TextField placeholder="Name" />
        <TextField placeholder="Email" />
        <TextField placeholder="Message..." as="textarea" rows="15" />
        <button type="submit">Send</button>
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
