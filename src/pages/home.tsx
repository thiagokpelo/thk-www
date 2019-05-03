import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import Image from '../components/image'
import Page from '../components/Page'
import IndexLayout from '../layouts'
import { FaArrowRight } from 'react-icons/fa'

import imageSrc from '../content/media/profile.jpg'

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
`

const Home = () => (
  <IndexLayout>
    <Page title="index.ts">
      <Image src={imageSrc} />
      <h1>
        Hello, World!!
        <br />
        I'm Thiago Kpelo
      </h1>
      <p>Welcome to my portfolio site.</p>

      <StyledLink to="/me">
        About me <FaArrowRight />
      </StyledLink>
    </Page>
  </IndexLayout>
)

export default Home
