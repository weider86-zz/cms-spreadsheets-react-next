import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: #212e38;
    color: #00b3a4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 0 48px 0;
    padding: 0;
    font-family: -apple-system,BlinkMacSystemFont, Segoe UI, sans-serif;
    font-size: 14px;
    transition: all 0.25s linear;
  }
  
  h1, h2, h3, h4, p {
    text-shadow: 0 2px 4px rgba(0,0,0,.2);
  }`;
