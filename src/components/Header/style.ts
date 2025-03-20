import styled from "styled-components";
interface MobileMenuProps {
    isOpen: boolean;
  }

export const Navbar = styled.nav``

export const HamburgerButton = styled.button`
    display: block;
     @media(min-width: 768px) {
    display: none;
  }
`
export const MobileMenu = styled.div<MobileMenuProps>`
      display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
      @media(min-width: 768px) {
         display: none;
       }
`

export const DesktopMenu = styled.div`
     @media(min-width: 768px) {
    display: block;
  }
`