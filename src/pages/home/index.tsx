import * as React from 'react'

import Page from '@thk/components/Page'
import * as GridNavigation from '@thk/components/grid-navigation'
import IndexLayout from '@thk/layouts'

import { colors } from '@thk/styles/variables'

const Home = () => (
  <IndexLayout>
    <Page title="index.ts">
      <GridNavigation.Container>
        <GridNavigation.ItemImage
          to="/me"
          src="https://res.cloudinary.com/dmmhdwajy/image/upload/v1564859120/profile_uoom4f.jpg"
          alt="I'm coding just like a rapper"
          align="flex-end"
        >
          Who am I?
        </GridNavigation.ItemImage>
        <GridNavigation.ItemImage
          to="/projects"
          src="https://res.cloudinary.com/dmmhdwajy/image/upload/v1564859120/code-wine_wxhph4.jpg"
          alt="Code with wine! Hummmmmm!"
        >
          See some projects
        </GridNavigation.ItemImage>
        <GridNavigation.ItemImage
          to="/contact"
          src="https://res.cloudinary.com/dmmhdwajy/image/upload/v1564859120/code-coffee_x3boga.jpg"
          alt="Coffe and code are the perfect combination"
        >
          Talk to me
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
            Hello, <br />
            World!
          </h1>
          <h3 style={{ paddingLeft: '3rem', fontWeight: 400 }}>
            I'm Thiago Kpelo
          </h3>
          <h3 style={{ paddingLeft: '3rem', fontWeight: 400 }}>
            Welcome to my portfolio site.
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

export default Home
