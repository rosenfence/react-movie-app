import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle` 
  ${reset}

    body {
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      background: linear-gradient(#eee 70%, #e20082 100%);
      background-attachment: fixed;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    * {
        box-sizing: border-box;
    }

    input, textarea { 
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }

    input:focus {
      outline: none;
    }

    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }
`;

export default GlobalStyles;
