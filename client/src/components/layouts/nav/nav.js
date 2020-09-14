import React, { Component } from 'react'
import { Link} from 'react-router-dom'

class Nav extends Component {
  render(){
    return(
      <div>
    
  <nav>
    <div className="nav-wrapper">
      <a href="/home" className="brand-logo">Logo</a>
      <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><a href="/Home" >HOME</a></li>
        <li><a href="/Shop" >SHOP</a></li>
        <li><a href="/About"  >ABOUT</a></li>
        <li><a href="/Press"  >PRESS</a></li>
        <li><a href="/Lookbook"  >LOOKBOOK</a></li>
        <li><a href="/Contact"  >CONTACT</a></li>
        <li><a href="/FAQ"  >FAQ</a></li>
        <li><a href="mobile.html" >Mobile</a></li>
      </ul>
    </div>
  </nav>

  <ul className="sidenav" id="mobile-demo">
    <li><a href="sass.html" className="black">Sass</a></li>
    <li><a href="badges.html" className="black">Components</a></li>
    <li><a href="collapsible.html" className="black">Javascript</a></li>
    <li><a href="mobile.html" >Mobile</a></li>
  </ul>

      </div>
    )
  }
}
  
  export default Nav;
 
