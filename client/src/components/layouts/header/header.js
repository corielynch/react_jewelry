import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import Searchbar from '../searchbar/searchbar'
import './header.css'

class Header extends Component {
    render(){
        return(

            <div class="header-class"> 
                <div >
                    <Searchbar />
                </div>
                <div class="header-logo">

                    {/* <p>{ Logo }</p> */}
                </div>
            </div> 
        )
    }
}
    export default Header;