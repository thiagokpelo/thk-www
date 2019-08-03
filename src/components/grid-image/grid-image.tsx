import * as React from 'react'
import styled from '@emotion/styled'
import Image from '@thk/components/image'
// import { colors, dimensions } from '@thk/styles/variables'
import { mediaQuerie } from '@thk/helpers'

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  ${mediaQuerie.md} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const GridComponent = () => (
  <StyledGrid>
    <Image
      alt="My workspace"
      src="https://res.cloudinary.com/dmmhdwajy/image/upload/v1564859371/jiraiya_xiwjj4.gif"
    />
    <Image
      alt="My workplace with a look from outside"
      src="https://res.cloudinary.com/dmmhdwajy/image/upload/v1564859121/home-office_roqb9z.jpg"
    />
    <Image
      alt="The loves of my life! My two brothers, my sister and my mom 💚"
      src="https://res.cloudinary.com/dmmhdwajy/image/upload/v1564859121/mother_bxtnsm.jpg"
    />
    <Image
      alt="My love, my friend, my queen, my everybody! My wife 👸🏾"
      src="https://res.cloudinary.com/dmmhdwajy/image/upload/v1564859120/love_gwwvyt.jpg"
    />
    <Image
      alt="My dad, my brother (@DiogoKpelo) and me"
      src="https://res.cloudinary.com/dmmhdwajy/image/upload/v1564859120/father_hglwfd.jpg"
    />
    <Image
      alt="Green and white are the color of my obsession! (Palmeiras Soccer Team) The champtions of Brasilerião 2018 🐷"
      src="https://res.cloudinary.com/dmmhdwajy/image/upload/v1564859120/palmeiras_bspfch.jpg"
    />
  </StyledGrid>
)

export const GridImage = GridComponent
