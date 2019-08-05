import { Link } from 'gatsby-plugin-intl'
import styled from '@emotion/styled'

const GridItemLink = styled(Link)`
  display: flex;
  flex-direction: column;
  flex: 1;
  transition: filter 0.16s ease;

  &:hover {
    filter: contrast(120%);
    transition: filter 0.32s ease;
  }
`

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const Image = styled(GridItemLink)<{
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
export const Content = styled(GridItem)`
  justify-content: center;
`
