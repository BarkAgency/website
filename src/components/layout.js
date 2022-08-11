import React from "react"
import GlobalStyle from './globalStyle';

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      {children}
    </React.Fragment>
  )
}