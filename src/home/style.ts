import styled from "styled-components";

export const HomeContainer = styled.main`
    margin: 1.5rem;
`
export const FutureWeb = styled.section`
   display: flex;
   flex-direction: column;
   gap: 1.2rem;
    img{ 
        width: 100%;
    }
   h1 {
        color: ${(props) => props.theme['dark-blue']};
        font-size: 2.5rem;
   } 
   p{
    color: ${(props) => props.theme['dark-grayish-blue']};
   }
   button {
     width: 10rem;
     height: 3rem;
     background-color: ${(props) => props.theme['soft-red']};
     border: none;
     color: ${(props) => props.theme['dark-blue']};
     font-weight: bolder;
     font-size: 0.938rem;
   
   }
`