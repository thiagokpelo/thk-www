import * as React from 'react'

type Status = 'done' | 'error' | null | undefined

export type ITerminalPost = {
  message?: string
  status?: Status
}

export type ITerminal = {
  show?: boolean
  posts?: ITerminalPost[]
  hideTerminal?: () => any
  showTerminal?: () => any
  createAlert?: (posts: ITerminalPost[]) => any
}

export const TerminalContext = React.createContext<Partial<ITerminal>>({
  show: false,
  posts: [],
  showTerminal: () => null,
  hideTerminal: () => null,
  createAlert: () => null
})

export class WrapperTerminal extends React.Component<ITerminal, ITerminal> {
  constructor(props: ITerminal) {
    super(props)

    this.state = {
      show: false,
      posts: [],
      showTerminal: this.showTerminal,
      hideTerminal: this.hideTerminal,
      createAlert: this.createAlert
    }
  }

  hideTerminal = () => {
    this.setState({ show: false })
  }

  showTerminal = () => {
    this.setState({ show: true })
  }

  createAlert = (posts: ITerminalPost[]) => {
    this.setState({ posts, show: true })
  }

  render() {
    return <TerminalContext.Provider value={this.state}>{this.props.children}</TerminalContext.Provider>
  }
}
