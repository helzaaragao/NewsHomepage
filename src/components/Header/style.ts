import styled, { css } from "styled-components";

interface MobileMenuProps {
    $isOpen: boolean;
  }

export const HeaderContainer = styled.header`
   display: flex;
   justify-content: space-between;
   position: relative;
    img {
        width: 65px;
        height: 40px;
    }
    margin-bottom: 2rem;
`

export const Navbar = styled.nav<MobileMenuProps>`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 100;
    transition: transform 0.3s ease-in-out;
    ${({ $isOpen }) => $isOpen && css`
        box-shadow: -5px 0 15px rgba(0, 0, 0, 0.5);
    `}
   


`

export const HamburgerButton = styled.button`
    display: block;
    font-size: 35px;
    border: none;
    background-color: ${(props) => props.theme['off-white']};
    margin-left: auto; // melhorar isso!!
    padding: 1rem;


     @media(min-width: 768px) {
      display: none;
    }
`
export const MobileMenu = styled.div<MobileMenuProps>`
       display: ${props => props.$isOpen ? 'block' : 'none'};
 
       ${({ $isOpen }) => $isOpen
    ? css`
        opacity: 1;
        visibility: visible;
        transform: translateX(0);
        background-color: hsl(36, 100%, 99%);
        height: 100vh;
        ul {
          list-style: none;
          a {
            text-decoration: none;
            color: hsl(240, 100%, 5%);
           }
        }
      `
    : css`
        opacity: 0;
        visibility: hidden;
        transform: translateX(-100%);
        
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