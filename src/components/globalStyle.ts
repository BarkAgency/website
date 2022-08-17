import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  
  @font-face {
    font-family: "NeueHelvetica55Roman";
    src:
      url('/webFonts/NeueHelvetica55Roman/font.woff2') format('woff2'),
      url('/webFonts/NeueHelvetica55Roman/font.woff') format('woff');
  }

  body {
    margin: 0px;
    font-family: "NeueHelvetica55Roman", sans-serif;
    font-size: 11px;
  }

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`

export default GlobalStyle;