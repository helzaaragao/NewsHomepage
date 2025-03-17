import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0; 
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme['off-white']};
        color: ${(props) => props.theme['grayish-blue']};
        -webkit-font-smoothing: antialiased; 
    }

    body, input, textarea, button {
        
    }

`