import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import Page from '@thk/components/Page'
import IndexLayout from '@thk/layouts'

import { mediaQuerie } from '@thk/helpers'
import { colors } from '@thk/styles/variables'

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;

  width: 100%;
  height: 100%;

  ${mediaQuerie.md} {
    grid-template-columns: 1fr 1fr;
  }
`

const ItemLink = styled(Link)`
  display: flex;
  flex-direction: column;
  flex: 1;
  transition: filter 0.16s ease;

  &:hover {
    filter: contrast(120%);
    transition: filter 0.32s ease;
  }
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const ItemImage = styled(ItemLink)<{
  align?: 'flex-start' | 'flex-end' | 'center'
  alt: string
  src: string
}>`
  background: url(${({ src }) => src});
  background-size: cover;
  background-position: center;

  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: flex-end;
  padding: 24px;
`
const ItemContent = styled(Item)`
  justify-content: center;
`

const Home = () => (
  <IndexLayout>
    <Page title="index.ts">
      <Grid>
        <ItemImage
          to="/me"
          src="https://res.cloudinary.com/dmmhdwajy/image/upload/v1564859120/profile_uoom4f.jpg"
          alt="I'm coding just like a rapper"
          align="flex-end"
        >
          Who am I?
        </ItemImage>
        <ItemImage
          to="/projects"
          src="https://res.cloudinary.com/dmmhdwajy/image/upload/v1564859120/code-wine_wxhph4.jpg"
          alt="Code with wine! Hummmmmm!"
        >
          See some projects
        </ItemImage>
        <ItemImage
          to="/contact"
          src="https://res.cloudinary.com/dmmhdwajy/image/upload/v1564859120/code-coffee_x3boga.jpg"
          alt="Coffe and code are the perfect combination"
        >
          Talk to me
        </ItemImage>
        <ItemContent style={{ padding: '1rem 0 0 1rem' }}>
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
        </ItemContent>
      </Grid>
    </Page>
  </IndexLayout>
)

export default Home
