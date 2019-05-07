import * as React from 'react'

import { Link } from 'gatsby'
import Page from '@thk/components/Page'
import IndexLayout from '@thk/layouts'

const Contact = () => (
  <IndexLayout>
    <Page title="feedback.ts">
      <h2>Success/Thank You Page</h2>
      <p>Thank you for contacting us!</p>

      <Link to="/">Go back</Link>
    </Page>
  </IndexLayout>
)

export default Contact
