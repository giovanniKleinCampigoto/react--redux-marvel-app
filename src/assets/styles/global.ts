import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
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
  skeletonPrimary: 'rgba(64,64,64, 0.5)',
  skeletonSecondary: 'rgba(41,41,41,0.5)',
};
