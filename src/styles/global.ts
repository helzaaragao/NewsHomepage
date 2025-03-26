import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0; 
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme['off-white']};
        color: ${(props) => props.theme['dark-grayish-blue']};
        -webkit-font-smoothing: antialiased; 
    }

    body, input, textarea, button {
        font-family: 'Inter', serif;
        font-style: normal;
        font-weight: 400;
    }

`