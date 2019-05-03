import * as React from 'react'
import styled from '@emotion/styled'
import { colors } from '@thk/styles/variables'

const skinColor = 'rgb(255, 231, 199)'

const Elipse = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 350px;
  /* background-color: rgb(53, 32, 59); */
  border-radius: 50%;
  /* border: 12px solid rgb(145, 17, 70); */
  border: 12px solid ${colors.pink};
  border-style: outset;
  transform-origin: bottom left;
  transform: scale(0.7);
`

const Head = styled.div`
  position: relative;
  width: 200px;
  height: 250px;
  background-color: ${skinColor};
  border-radius: 50%;
`

const Ear = styled.div`
  position: absolute;
  top: 80px;
  width: 50px;
  height: 80px;
  background-color: ${skinColor};
  border-radius: 50%;
`

const LeftEar = styled(Ear)`
  left: -30px;
`

const RightEear = styled(Ear)`
  right: -30px;
`

const Reamer = styled.div`
  position: absolute;
  bottom: 7px;
  left: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 7px solid #000;
`

const Glasses = styled.div`
  position: relative;
  top: 90px;
  width: 94%;
  margin: 0 auto;
`

const Lens = styled.div`
  position: absolute;
  width: 90px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  border: 8px solid #000;
`

const LeftLens = styled(Lens)`
  left: 0;
`

const RightLens = styled(Lens)`
  right: 0;
`

const Noise = styled.div`
  position: relative;
  top: 160px;
  width: 25px;
  height: 30px;
  margin: 0 auto;
`

const Piercing = styled(Noise)`
  border-radius: 50%;
  border: 4px solid #000;

  &:after {
    position: absolute;
    left: -5px;
    top: 10px;
    display: block;
    content: '';
    background-color: ${skinColor};
    width: 30px;
    height: 18px;
  }
`

const Ball = styled.div`
  position: absolute;
  bottom: 5px;
  width: 10px;
  height: 10px;
  background-color: #000;
  border-radius: 50%;
  z-index: 2;
`

const LeftBall = styled(Ball)`
  left: -8px;
`

const RightBall = styled(Ball)`
  right: -8px;
`

export const Logo = () => (
  <Elipse>
    <Head>
      <LeftEar>
        <Reamer />
      </LeftEar>
      <RightEear>
        <Reamer />
      </RightEear>
      <Glasses>
        <LeftLens />
        <RightLens />
      </Glasses>
      <Piercing>
        <LeftBall />
        <RightBall />
      </Piercing>
    </Head>
  </Elipse>
)
