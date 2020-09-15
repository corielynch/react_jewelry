import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Searchbar from '../searchbar/searchbar'
import Logo from '../icons/img/logo.png';
import './header.css'

class Header extends Component {
    render(){
        return(
            <div class="header-class"> 
                <div >
                    <Searchbar />
                </div>
                <div class="header-logo">
                    <p> <img src={Logo} /> </p>
                </div>
            </div> 
        )
    }
}
    export default Header;