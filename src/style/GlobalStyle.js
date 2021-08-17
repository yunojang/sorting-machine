const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  button,input[type='submit'] {
    cursor: pointer;
  }
`;

export default GlobalStyle;