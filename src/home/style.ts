import styled from "styled-components";

export const HomeContainer = styled.main`
    margin: 1.5rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
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
export const NewsArticles = styled.section`
   margin-top: 2rem;
   background-color: ${(props) => props.theme['dark-blue']};
   padding: 1rem;
   h2{
     color: ${(props) => props.theme['soft-orange']};
     margin-bottom: 1rem;
   }

   h3{
    color: ${(props) => props.theme['off-white']};
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
   }
   p{
    font-size: 14px;
    margin-bottom: 1rem;
   }
   hr{
    opacity: 35%;
    /* colocar algo para a linha ficar menos grossa */
   }
`

export const Topics = styled.section`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

    article {
    display: flex;
    gap: 1.5rem;
    align-items: center;
   
    figure{
      flex-shrink: 0; //impede que a imagem diminua
      img{
        width: 90px;
        height: auto;
        display: block;
      }
    }
    div{ 
      flex: 1; 
      h4 {
        color: ${(props) => props.theme['soft-red']};
        font-size: 1.9rem;
        margin-bottom: 0.5rem;
      }
      h5 {
        color: ${(props) => props.theme['dark-blue']};
        font-size: 1rem;
        font-weight: 800;
        margin-bottom: 0.5rem;
        &:hover {
          color: ${(props) => props.theme['soft-red']};
          cursor: pointer;
        }
      }
      p {
        color: ${(props) => props.theme['dark-grayish-blue']};
        line-height: 1.5;
        font-size: 0.9rem;
      }
    }
   }
`