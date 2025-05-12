// src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
  }

  h1, h2, h3 {
    margin: 0;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

export default GlobalStyles;
