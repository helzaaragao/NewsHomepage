import styled, { css } from "styled-components";

interface MobileMenuProps {
    $isOpen: boolean;
  }

export const HeaderContainer = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;
   position: relative;
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
    top: 0;
    right: 0;
    z-index: 100;
    transition: transform 0.3s ease-in-out;
`

export const HamburgerButton = styled.button`
    display: block;
    font-size: 35px;
    border: none;
    background-color: ${(props) => props.theme['off-white']};
    margin-left: auto; // melhorar isso!!
    padding: 1rem;
    top: 1rem;       
    right: 1rem;    
    z-index: 101;   
    cursor: pointer;
    


     @media(min-width: 768px) {
      display: none;
    }
`
export const MobileMenu = styled.div<MobileMenuProps>`
       display: ${props => props.$isOpen ? 'block' : 'none'};
       position: fixed;
       overflow: hidden;
 
       ${({ $isOpen }) => $isOpen
    ? css`
        opacity: 1;
        visibility: visible;
        transform: translateX(0);
        background-color: hsl(36, 100%, 99%);
        top: 0;
        width: 100%;
        height: 100%;
        box-shadow: -5px 0 15px rgba(0, 0, 0, 0.5);
        ul {
          display: flex;
          flex-direction: column;
          margin-top: 8rem;
          padding-left: 1rem;
          gap: 1rem;
          list-style: none;
          overflow: visible;

          a {
            text-decoration: none;
            color: hsl(240, 100%, 5%);
           }
           overflow-y: hidden; 
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
   }
`
