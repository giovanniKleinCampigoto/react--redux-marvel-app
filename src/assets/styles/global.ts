import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  body {
    maring: 0;
    box-sizing: border-box;
    background: #292929;
  }

  input, button, h1, p, a, div, span {
    font-family: Poppins, sans-seriff;
  }
`;

export const colors = {
  primary: '#151515',
  secondary: '#292929',
  marvel: '#e62429',
  oxfordBlue: '#080a25',
};
