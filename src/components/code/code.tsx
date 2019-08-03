import * as React from 'react'
import styled from '@emotion/styled'
import { colors } from '@thk/styles/variables'

type CodeColors = 'green' | 'pink' | 'lightBlue' | 'blue' | 'yellow' | 'white'

const StyledCode = styled('span')<{ color: CodeColors }>`
  display: inline-flex;
  margin-bottom: 24px;
  color: ${({ color }) => colors[color]};
`

export const Code: React.FC<{
  alias?: string
  packageName?: string
}> = ({ alias, packageName }) => (
  <div>
    <StyledCode color="blue">import</StyledCode>{' '}
    <StyledCode color="pink">{alias}</StyledCode>{' '}
    <StyledCode color="blue">from</StyledCode>{' '}
    <StyledCode color="green">
      {`'`}
      {packageName}
      {`'`}
    </StyledCode>
  </div>
)
