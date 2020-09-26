import React, { Component } from 'react';
import {Nav} from "react-bootstrap";
import { NavbarItems } from "./NavbarItems"
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <Nav className="justify-content-center" activeKey="/home">
                {NavbarItems.map((item, index) => {
                        return (
                            <Nav.Item>
                                <Nav.Link href={item.url}>{item.title}</Nav.Link>
                            </Nav.Item>
                        )
                    })}
            </Nav>

export default Navbar;
