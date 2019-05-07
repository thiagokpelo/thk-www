import * as React from 'react'
import { Link } from 'gatsby'

import Page from '@thk/components/Page'
import Container from '@thk/components/Container'
import IndexLayout from '@thk/layouts'

const NotFoundPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>404: Page not found.</h1>
        <p>
          You've hit the void. <Link to="/">Go back.</Link>
        </p>
      </Container>
    </Page>
  </IndexLayout>
)

export default NotFoundPage
