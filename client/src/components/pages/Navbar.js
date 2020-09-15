import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Logo from '../icons/img/logo.png';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar'>
                <Link to='#' className='navbar-logo'>
                    <img src={Logo} />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/home' className='nav-links' 
                        onClick={closeMobileMenu}>
                            HOME
                        </Link>    
                    </li> 
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' 
                        onClick={closeMobileMenu}>
                            SHOP
                        </Link>    
                    </li> 
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' 
                        onClick={closeMobileMenu}>
                            ABOUT
                        </Link>    
                    </li> 
                    <li className='nav-item'>
                        <Link to='/press' className='nav-links' 
                        onClick={closeMobileMenu}>
                            PRESS
                        </Link>    
                    </li> 
                    <li className='nav-item'>
                        <Link to='/lookbook' className='nav-links' 
                        onClick={closeMobileMenu}>
                            LOOKBOOK
                        </Link>    
                    </li> 
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' 
                        onClick={closeMobileMenu}>
                            CONTACT
                        </Link>    
                    </li>
                    <li className='nav-item'>
                        <Link to='/faq' className='nav-links' 
                        onClick={closeMobileMenu}>
                            FAQ
                        </Link>    
                    </li>
                    <li className='nav-item'>
                        <Link to='/account' className='nav-links' 
                        onClick={closeMobileMenu}>
                            ACCOUNT
                        </Link>    
                    </li>  
                </ul>   
            </nav>
        </>    
    );
}

export default Navbar;

