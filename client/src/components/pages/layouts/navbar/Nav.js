import React from 'react';
import { NavbarItems } from "./NavbarItems"
import "./Navbar.css"


class Navigation extends React.Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

        render () {
            return (
                <nav className="NavbarItem">
                    <div className="menu-icon" onClick={this.handleClick}>
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
                        <li>
                            <a className="nav-links cart" href="/Cart"><img src="https://img.icons8.com/emoji/48/000000/shopping-cart-emoji.png"/></a>
                        </li>
                    </ul>
                </nav>
            )
        }
    }


export default Navigation;