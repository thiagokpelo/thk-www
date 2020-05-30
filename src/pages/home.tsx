import * as React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'

import Page from '@thk/components/Page'
import * as GridNavigation from '@thk/components/grid-navigation'
import IndexLayout from '@thk/layouts'

import { colors } from '@thk/styles/variables'

const Home = ({ intl }: any) => (
  <IndexLayout>
    <Page title="index.ts">
      <GridNavigation.Container>
        <GridNavigation.ItemImage
          to="/me"
          src="https://res.cloudinary.com/thiagokpelo/image/upload/v1564859120/profile_uoom4f.jpg"
          alt={intl.formatMessage({ id: 'home.links.me.alt' })}
          align="flex-end"
        >
          {intl.formatMessage({ id: 'home.links.me.text' })}
        </GridNavigation.ItemImage>
        <GridNavigation.ItemImage
          to="/projects"
          src="https://res.cloudinary.com/thiagokpelo/image/upload/v1564859120/code-wine_wxhph4.jpg"
          alt={intl.formatMessage({ id: 'home.links.projects.alt' })}
        >
          {intl.formatMessage({ id: 'home.links.projects.text' })}
        </GridNavigation.ItemImage>
        <GridNavigation.ItemImage
          to="/contact"
          src="https://res.cloudinary.com/thiagokpelo/image/upload/v1564859120/code-coffee_x3boga.jpg"
          alt={intl.formatMessage({ id: 'home.links.contact.alt' })}
        >
          {intl.formatMessage({ id: 'home.links.contact.text' })}
        </GridNavigation.ItemImage>
        <GridNavigation.ItemContent style={{ padding: '1rem 0 0 1rem' }}>
          <span
            style={{
              color: '#fff',
              fontSize: '3.2rem',
              marginBottom: '1.2rem'
            }}
          >
            {'<'}
          </span>
          <h1 style={{ paddingLeft: '3rem', color: colors.pink }}>
            {intl.formatMessage({ id: 'home.hello' })}
            <br />
            {intl.formatMessage({ id: 'home.world' })}
          </h1>
          <h3 style={{ paddingLeft: '3rem', fontWeight: 400 }}>
            {intl.formatMessage({ id: 'home.name' })}
          </h3>
          <h3 style={{ paddingLeft: '3rem', fontWeight: 400 }}>
            {intl.formatMessage({ id: 'home.welcome' })}
          </h3>
          <span
            style={{ color: '#fff', fontSize: '3.2rem', marginTop: '1.2rem' }}
          >
            {'/>'}
          </span>
        </GridNavigation.ItemContent>
      </GridNavigation.Container>
    </Page>
  </IndexLayout>
)

export default injectIntl(Home)
