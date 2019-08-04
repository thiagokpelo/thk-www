import * as React from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'

import Page from '@thk/components/Page'
import Container from '@thk/components/Container'
import IndexLayout from '@thk/layouts'

const NotFoundPage = ({ intl }: any) => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>{intl.formatMessage({ id: 'not-found.title' })}</h1>
        <p>
          {intl.formatMessage({ id: 'not-found.description' })}
          <Link to="/">{intl.formatMessage({ id: 'not-found.go-back' })}</Link>
        </p>
      </Container>
    </Page>
  </IndexLayout>
)

export default injectIntl(NotFoundPage)
