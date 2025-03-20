import { useState } from 'react'
import Logo from '../../assets/logo.svg'
import { DesktopMenu, HamburgerButton, MobileMenu, Navbar } from './style'

export function Header(){
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    function toggleMobileMenu(){
        setMobileMenuOpen(!isMobileMenuOpen)
    }

    return(
        <>
           <img src={Logo} alt="" /> 
           <Navbar>
            <HamburgerButton onClick={toggleMobileMenu} 
            aria-expanded={isMobileMenuOpen}
            aria-label="Abrir menu"
            > {isMobileMenuOpen ? 'X' : '☰'}</HamburgerButton>
            <MobileMenu isOpen={isMobileMenuOpen}>
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
        </>
    )
}