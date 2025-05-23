import { useEffect, useState } from 'react'
import Logo from '../../assets/logo.svg'
import { DesktopMenu, HamburgerButton, HeaderContainer, MobileMenu, Navbar } from './style'
import {List, X}  from "@phosphor-icons/react"

export function Header(){
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    function toggleMobileMenu(){
        setMobileMenuOpen(!isMobileMenuOpen)
    }

    useEffect(() => {
        if (isMobileMenuOpen) {
          document.body.style.overflow = 'hidden';
          document.documentElement.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
          document.documentElement.style.overflow = '';
        }
      
        return () => {
          document.body.style.overflow = '';
          document.documentElement.style.overflow = '';
        };
      }, [isMobileMenuOpen]);

    return(
        <HeaderContainer>
           <img src={Logo} alt="Logo da News Homepage: um W maiúsculo preto com um ponto final" /> 
           <Navbar $isOpen={isMobileMenuOpen}>
                <HamburgerButton onClick={toggleMobileMenu} 
                aria-expanded={isMobileMenuOpen}
                aria-label="Abrir menu"> 
                  {isMobileMenuOpen ? <X size={32} weight="regular" /> 
                  : <List size={40} weight="bold" />}
                </HamburgerButton>
                <MobileMenu $isOpen={isMobileMenuOpen}>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">New</a></li>
                        <li><a href="">Popular</a></li>
                        <li><a href="">Trending</a></li>
                        <li><a href="">Categories</a></li>
                    </ul>
                </MobileMenu>

                <DesktopMenu>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new">New</a></li>
                            <li><a href="/popular">Popular</a></li>
                            <li><a href="/trending">Trending</a></li>
                            <li><a href="/categories">Categories</a></li>
                        </ul>
                </DesktopMenu>
           </Navbar>
        </HeaderContainer>
    )
}