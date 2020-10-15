import React, { Component } from 'react';
import {Nav} from "react-bootstrap";
import { NavbarItems } from "./NavbarItems"
import "./Navbar.css"

const Nav = () => {
    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return(
            <nav className="NavbarItem">
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {NavbarItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
        <div className="cart hide"><i className="fas fa-shopping-cart"></i>0</div>
            </nav>
        )
    }
}
export default Nav;