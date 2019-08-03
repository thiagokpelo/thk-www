import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'
import '@thk/styles/normalize'

import Header from '@thk/components/header'
import Footer from '@thk/components/footer'
import LayoutRoot from '@thk/components/LayoutRoot'
import LayoutMain from '@thk/components/LayoutMain'
import Terminal from '@thk/components/terminal'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
}

const IndexLayout: React.SFC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description
            },
            {
              name: 'keywords',
              content: 'gatsbyjs, gatsby, javascript, sample, something'
            }
          ]}
        />
        <Header title={data.site.siteMetadata.title} />
        <LayoutMain>{children}</LayoutMain>
        <Footer />
        <Terminal />
      </LayoutRoot>
    )}
  />
)

export default IndexLayout
