import React, { Component } from 'react'
<<<<<<< HEAD
import { Link} from 'react-router-dom'

=======
import { render } from '@testing-library/react';
>>>>>>> master

class Nav extends Component {
  render(){
    return(
      <div>
    
  <nav>
    <div className="nav-wrapper">
      <a href="/home" className="brand-logo">Logo</a>
      <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><a href="/home" >HOME</a></li>
        <li><a href="/shop" >SHOP</a></li>
        <li><a href="/about"  >ABOUT</a></li>
        <li><a href="/lookbook"  >LOOKBOOK</a></li>
        <li><a href="/contact"  >CONTACT</a></li>
        <li><a href="/faq"  >FAQ</a></li>
        <li><a href="mobile.html" >Mobile</a></li>
      </ul>
    </div>
  </nav>

<<<<<<< HEAD

=======
  <ul className="sidenav" id="mobile-demo">
    <li><a href="sass.html" className="black">Sass</a></li>
    <li><a href="badges.html" className="black">Components</a></li>
    <li><a href="collapsible.html" className="black">Javascript</a></li>
    <li><a href="mobile.html" >Mobile</a></li>
  </ul>
>>>>>>> master
      </div>
    )
  }
}
  
  export default Nav;
  
