import styled, { css } from "styled-components";

interface MobileMenuProps {
    $isOpen: boolean;
  }

export const HeaderContainer = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;
    img {
        width: 65px;
        height: 40px;
    }
    margin-bottom: 1rem;
`

export const Navbar = styled.nav<MobileMenuProps>`
    display: flex;
    flex-direction: column;
    width: 60%;
    transition: transform 0.3s ease-in-out;
    @media(min-width: 768px){
      width: auto;
    }
`

export const HamburgerButton = styled.button`
    font-size: 2.188rem;
    border: none;
    margin-left: auto; 
    padding: 1rem;
    z-index: 101;   
    cursor: pointer;
    background-color: ${(props) => props.theme['off-white']};
    
     @media(min-width: 768px) {
      display: none;
    }
`
export const MobileMenu = styled.div<MobileMenuProps>`
       display: ${props => props.$isOpen ? 'block' : 'none'};
       position: fixed;
       background-color: ${(props) => props.theme['off-white']};
 
       ${({ $isOpen }) => $isOpen
    ? css`
        opacity: 1;
        visibility: visible;
        transform: translateX(0);
        top: 0;
        width: 100%;
        height: 100%;
        box-shadow: -5px 0 15px rgba(0, 0, 0, 0.5); //talvez o que precise mudar é isso para chegar no resultado esperado, pesquisar mais!
        ul {
          display: flex;
          flex-direction: column;
          margin-top: 8rem;
          padding-left: 1rem;
          gap: 1rem;
          list-style: none;

          a {
            text-decoration: none;
            color: hsl(240, 100%, 5%);
           }
      `
    : css`
        opacity: 0;
        visibility: hidden;
        transform: translateX(100%); 
      `
  }

      @media(min-width: 768px) {
         display: none;
       }
`

export const DesktopMenu = styled.div`
    display: none;
   


    
     @media(min-width: 768px) {
     display: block;
     ul{
      display: flex;
      gap: 1.5rem;
      list-style: none;
      font-size: 0.938rem;
      :hover{
          color: ${(props)=> props.theme['soft-red']};
      }

      a{
        text-decoration: none;
        color: ${(props)=> props.theme['dark-grayish-blue']}; 
        font-size: 0.938rem;
      }
    }
   }
`
