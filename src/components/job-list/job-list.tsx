import * as React from 'react'
import styled from '@emotion/styled'
import { colors } from '@thk/styles/variables'

const StyledList = styled.dl``

const StyledContent = styled.dd`
  margin-bottom: 1.25rem;
`

const StyledHeader = styled.dt`
  display: flex;
  flex-direction: row;
  color: ${colors.yellow};
`
const Title = styled.h4<{ color: 'pink' | 'lightBlue' }>`
  color: ${({ color }) => colors[color]};
  font-weight: 400 !important;
  text-align: center;
`

type JobListItemType = {
  companyName: string
  jobTitle: string
}

const StyledHeading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`

const Heading: React.FC<{}> = props => (
  <StyledHeading>
    <span>{'{'}</span>
    {props.children}
    <span>{'}'}</span>
  </StyledHeading>
)

export const JobListItem: React.FC<JobListItemType> = props => (
  <>
    <StyledHeader>
      <Heading>
        <Title color="lightBlue">{props.jobTitle}</Title>
      </Heading>
      <Heading>
        <Title color="pink">{props.companyName}</Title>
      </Heading>
    </StyledHeader>
    <StyledContent>{props.children}</StyledContent>
  </>
)

export const JobList: React.FC<{}> = ({ children }): JSX.Element => (
  <StyledList>{children}</StyledList>
)
