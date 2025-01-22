import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
  }

  body, html {
    font-family: "Gantari", serif;
    font-optical-sizing: auto;
    font-weight: <weight>;
    font-style: normal;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden; 
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
  }

  
`;

export default GlobalStyles;
