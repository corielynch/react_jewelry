import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { NavList } from "./NavList";
import '../nav/Navbar.css';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <div className="menu-icon" onClick={this.handleClick}>
                    {/* <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i> */}
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {NavList.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.url} className= {item.proName}>{item.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;

