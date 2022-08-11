import React from "react"
import { createGlobalStyle } from "styled-components"
import GlobalStyle from './globalStyle';

const GlobalStyleOverride = createGlobalStyle`
  body {
    background: #fff;
  }
`
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <GlobalStyleOverride />
      {children}
    </React.Fragment>
  )
}