import { useState } from 'react'
import Logo from '../../assets/logo.svg'
import { Navbar } from './style'

export function Header(){
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    function toggleMobileMenu(){
        setMobileMenuOpen(!isMobileMenuOpen)
    }

    return(
        <>
           <img src={Logo} alt="" /> 
           <Navbar isMobileMenuOpen={isMobileMenuOpen}>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">New</a></li>
                    <li><a href="">Popular</a></li>
                    <li><a href="">Trending</a></li>
                    <li><a href="">Categories</a></li>
                </ul>
                <button onClick={toggleMobileMenu}></button>
           </Navbar>
        </>
    )
}