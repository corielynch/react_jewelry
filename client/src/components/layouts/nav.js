import React, { Component } from 'react'
import { Link} from 'react-router-dom'


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


      </div>
    )
  }
}
  
  export default Nav;
  
