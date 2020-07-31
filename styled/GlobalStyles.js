import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: #e1e1e1;
    color: #333;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 0 48px 0;
    padding: 0;
    font-family: sans-serif;
    font-size: 14px;
    transition: all 0.25s linear;
  }`;
