import styled from "styled-components";

export const HomeContainer = styled.main`
    display: flex;
    flex-direction: column;
    margin: 1rem;
    @media(min-width: 768px){
      margin: 2.5rem 10rem;
      
    }
`

export const SubjectNews = styled.div`
  display: block;
 
  @media(min-width: 768px){
      display: flex;
      justify-content: center;
      width: 100%;
      height:  30rem;
      gap: 2rem;
      margin-top: 1.8rem;
    }
`
export const PrincipalSubject = styled.section`
   display: flex;
   flex-direction: column;
   gap: 1.2rem;
    img{ 
        width: 100%;
        height: 100%;
    }
    #futureWeb-mobile{
      display: block;
    }
    #futureWeb-desktop{
      display: none;
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
   @media(min-width: 768px){
      #futureWeb-desktop{
        display: block;
        width: 100%;
      }
      #futureWeb-mobile{
        display: none;
      }
      width: 50rem;

      article{ 
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        margin-bottom: 1rem;
       
         div{ 
            width: 40%;
            h1{
              font-weight: 800;
              font-size: 3rem;
            }
         }
         aside{ 
          width: 50%;
          padding-right: 1rem;
          p{
            font-size: 0.938rem;
            margin-bottom: 1.5rem;
            line-height: 160%;
          }
         }
      }
      
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
    margin-top: 2rem;
    margin-bottom: 0.6rem;
   }
   p{
    font-size: 14px;
    margin-bottom: 1rem;
    color: ${(props) => props.theme['grayish-blue']};
   }
   hr{
    margin-top: 2rem;
    opacity: 35%;
   }
   @media(min-width: 768px){
    margin-top: 0;
    width: 20rem;
 
   }

`

export const Topics = styled.section`
  margin-top: 2rem;
  margin-bottom: 2rem; 
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

   
   @media(min-width: 768px){
      display: flex;
      flex-direction: row;
   }
`