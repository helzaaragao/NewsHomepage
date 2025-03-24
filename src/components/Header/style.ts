import styled, { css } from "styled-components";

interface MobileMenuProps {
    $isOpen: boolean;
  }

export const HeaderContainer = styled.header`
   display: flex;
   justify-content: space-between;
    img {
        width: 65px;
        height: 40px;
    }
`

export const Navbar = styled.nav`
  
`

export const HamburgerButton = styled.button`
    display: block;
    font-size: 35px;
    background-color: transparent;
    border: none;

   



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
        background: hsl(36, 100%, 99%);
        transform: translateX(0);
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