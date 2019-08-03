import * as React from 'react'
import { ITerminal, TerminalContext } from './terminal-context'
import { MdClose } from 'react-icons/md'
import styled from '@emotion/styled'
import css from '@emotion/css'
import { colors } from '@thk/styles/variables'
import { mediaQuerie } from '@thk/helpers'

const StyledTerminal = styled.div<ITerminal>`
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 0;
  height: 200px;
  width: 100%;
  bottom: 0;
  z-index: 3;
  background-color: ${colors.background};
  border-top: 1px solid ${colors.black};
  padding: 0 10px 10px;

  transition: transform 0.32s ease-in-out;

  ${mediaQuerie!.xl} {
    width: 75%;
  }

  ${({ show }) =>
    show
      ? css`
          /* visibility: visible;
          opacity: 1; */
          transform: translateY(0);
        `
      : css`
          /* visibility: hidden;
          opacity: 0; */
          transform: translateY(200px);
        `}
`

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 auto;
`

const Content = styled.div`
  flex: 1 1 auto;
  width: 100%;
  overflow-y: auto;
`

const Title = styled.span`
  text-transform: uppercase;
  font-size: 12px;
`

const StyledPost = styled.p<{ status: 'error' | 'done' | null | undefined }>`
  color: ${({ status }) => (status === 'done' ? colors.green : colors.error)};

  span {
    text-transform: uppercase;
    background-color: ${({ status }) =>
      status === 'done' ? colors.green : colors.error};
    color: ${colors.background};
    padding: 2px 4px;
  }
`

const Post = ({ data }: any) => (
  <StyledPost status={data!.status}>
    <span>{data!.status}</span> - {data!.message}
  </StyledPost>
)

const TerminalComponent: React.FC<{}> = () => (
  <TerminalContext.Consumer>
    {(terminal: ITerminal) => (
      <StyledTerminal show={terminal!.show}>
        <Header>
          <Title>Output</Title>
          <MdClose role="button" onClick={terminal!.hideTerminal} />
        </Header>
        <Content>
          {terminal!.posts && terminal!.posts.length > 0
            ? terminal!.posts.map((post, index) => (
                <Post key={index} data={post} />
              ))
            : null}
        </Content>
      </StyledTerminal>
    )}
  </TerminalContext.Consumer>
)

export const Terminal = TerminalComponent
