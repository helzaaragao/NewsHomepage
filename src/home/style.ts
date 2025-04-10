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
 
  @media(min-width: 1440px){
      display: flex;
      justify-content: center;
      width: 100%;
      height:  30rem;
      gap: 2rem;
      margin-top: 1.8rem;
      margin-bottom: 2rem;
    }

    @media(min-width: 1820px){
      display: flex;
      height:  40rem;
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
    margin-top: 0.5rem;
    margin-bottom: 1rem;
   }
   button {
     width: 10rem;
     height: 3rem;
     font-size: 0.938rem;
     border: none;
     font-weight: bold;
     cursor: pointer;
     letter-spacing: 0.2rem; 
     background-color: ${(props) => props.theme['soft-red']};
     color: ${(props) => props.theme['dark-blue']};
   
     &:hover{
      color: ${(props) => props.theme['off-white']};
      background-color: ${(props) => props.theme['dark-blue']};
     }
   }
   @media(min-width: 1440px){
      width: 50rem;
      
      #futureWeb-desktop{
        display: block;
        width: 100%;
        height: 100%;
      }
      #futureWeb-mobile{
        display: none;
      }
      

      article{ 
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
        
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
            margin-top: 0;
          }
         }
      }

      
    }
    
    @media(min-width: 1820px){
     width: 80rem;
  }
`
export const NewsArticles = styled.section`
   margin-top: 2rem;
   padding: 1rem;
   background-color: ${(props) => props.theme['dark-blue']};
   h2{
     margin-bottom: 1rem;
     font-weight: 800;
     font-size: 2rem;
     color: ${(props) => props.theme['soft-orange']};
   }

   h3{
    margin-top: 2rem;
    margin-bottom: 0.6rem;
    cursor: pointer;
    color: ${(props) => props.theme['off-white']};
    &:hover{
      color: ${(props) => props.theme['soft-orange']}; 
    }
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
   @media(min-width: 1440px){
    margin-top: 0;
    width: 25rem;
   }
   @media(min-width: 1820px){
    width: 30rem;
  }

`

export const Topics = styled.section`
   display: flex;
   flex-direction: column;
   margin-top: 2rem;
   margin-bottom: 2rem; 
   gap: 1.5rem;

    article {
    display: flex;
    gap: 1.5rem;
    align-items: center;
   
    figure{
      flex-shrink: 0; 
      img{
        width: 90px;
        height: auto;
        display: block;
      }
    }
    div{ 
      flex: 1; 
      h4 {
        font-size: 1.9rem;
        margin-bottom: 0.5rem;
        color: ${(props) => props.theme['soft-red']};
      }
      h5 {
        font-size: 1rem;
        font-weight: 800;
        margin-bottom: 0.5rem;
        color: ${(props) => props.theme['dark-blue']};
        &:hover {
          cursor: pointer;
          color: ${(props) => props.theme['soft-red']};
        }
      }
      p {
        line-height: 1.5;
        font-size: 0.9rem;
        color: ${(props) => props.theme['dark-grayish-blue']};
      }
    }

   }
   @media(min-width: 1440px){
      display: flex;
      flex-direction: row;
   }

   @media(min-width: 2560px){
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
   }
`

