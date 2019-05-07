import * as React from 'react'
import styled from '@emotion/styled'
import Image from '@thk/components/image'
// import { colors, dimensions } from '@thk/styles/variables'
import { mediaQuerie } from '@thk/helpers'
import { jiraiyaGif, homeOfficeImg, fatherImg, loveImg, motherImg, palmeirasImg } from '@thk/content/media'

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  ${mediaQuerie.md} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const GridComponent = () => (
  <StyledGrid>
    <Image src={jiraiyaGif} />
    <Image src={homeOfficeImg} />
    <Image src={motherImg} />
    <Image src={loveImg} />
    <Image src={fatherImg} />
    <Image src={palmeirasImg} />
  </StyledGrid>
)

export const GridImage = GridComponent
