import React, { Component } from 'react'
import {Navbar, Nav} from "react-bootstrap";
import {pageList} from "../../Navbar";

//import Searchbar from '../searchbar/searchbar'
import Logo from '../../../../assets/logo.png';
import './header.css'

class Header extends Component {
    render(){
        return(
            <>
                <div className="header-class"> 
                    <div >
                    {/*  <Searchbar /> */ }
                    </div>
                    <div className="header-logo">
                        <p> <img src={Logo} alt=".title"/> </p>
                    </div>
                </div> 
                <Navbar bg="light" expand="md" className="shadow-none justify-content-end">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto justify-content-center">
                        {pageList.map(({url, title}) => (<Nav.Link href={url} key={url}>{title}</Nav.Link>))}
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}
    export default Header;
