interface CSSModule {
  [className: string]: string
}

// type shims for CSS modules

declare module '*.module.scss' {
  const cssModule: CSSModule
  export = cssModule
}

declare module '*.jpg' {
  const value: any
  export = value
}

declare module '*.gif' {
  const value: any
  export = value
}

declare module 'gatsby-plugin-intl' {
  const injectIntl: any
  const FormattedHTMLMessage: any
  const Link: any
  export { injectIntl, FormattedHTMLMessage, Link }
}
