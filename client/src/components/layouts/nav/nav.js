import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import Logo from '../../../assets/logo.png';


// class Nav extends React.Component {
    const nav = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


  
        
   
    return (
        <>
            <nav className='navbar'>
                <a href='/' clsasName="logo">
                <img alt="Mona-Assemi-logo" src={Logo} />
                    </a> 
                    
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/home' className='nav-links' 
                        onClick={this.closeMobileMenu}>
                            HOME
                        </Link>    
                    </li> 
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' 
                        onClick={this.closeMobileMenu}>
                            SHOP
                        </Link>    
                    </li> 
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' 
                        onClick={this.closeMobileMenu}>
                            ABOUT
                        </Link>    
                    </li> 
                    <li className='nav-item'>
                        <Link to='/press' className='nav-links' 
                        onClick={this.closeMobileMenu}>
                            PRESS
                        </Link>    
                    </li> 
                    <li className='nav-item'>
                        <Link to='/lookbook' className='nav-links' 
                        onClick={this.closeMobileMenu}>
                            LOOKBOOK
                        </Link>    
                    </li> 
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' 
                        onClick={this.closeMobileMenu}>
                            CONTACT
                        </Link>    
                    </li>
                    <li className='nav-item'>
                        <Link to='/faq' className='nav-links' 
                        onClick={this.closeMobileMenu}>
                            FAQ
                        </Link>    
                    </li>
                    <li className='nav-item'>
                        <Link to='/account' className='nav-links' 
                        onClick={this.closeMobileMenu}>
                            ACCOUNT
                        </Link>    
                    </li>  
                </ul>   
            </nav>
       </>  
    );
}

export default nav;

