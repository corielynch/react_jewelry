import React, { Component } from 'react'
import { Link} from 'react-router-dom'
// import { render } from '@testing-library/react';

class Nav extends Component {
  render(){
    return(
      <div>
    
  <nav>
    <div className="nav-wrapper">
      <ul className="middle hide-on-med-and-down">
        <li><Link to="/home" >HOME</Link></li>
        <li><Link to="/" >SHOP</Link></li>
        <li><Link to="/about"  >ABOUT</Link></li>
        <li><Link to="/lookbook"  >LOOKBOOK</Link></li>
        <li><Link to="/contact"  >CONTACT</Link></li>
        <li><Link to="/faq"  >FAQ</Link></li>
        <li><Link to="/Account" >Account</Link></li>
      </ul>
    </div>
  </nav>

  <ul className="sidenav" id="mobile-demo">
    <li><Link to="sass.html" className="black">Sass</Link></li>
    <li><Link to="badges.html" className="black">Components</Link></li>
    <li><Link to="collapsible.html" className="black">Javascript</Link></li>
    <li><Link to="mobile.html" >Mobile</Link></li>
  </ul>
      </div>
    )
  }
}
  
  export default Nav;
  
