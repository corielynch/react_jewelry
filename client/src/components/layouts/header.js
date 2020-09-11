import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import Searchbar from './searchbar'
import './header.css'

class Header extends Component {
    render(){
        return(
            <div>
            <Searchbar />
                <div class='header-class'>
                    <input />
                    <i class="material-icons">search</i>
                    <p>Mona Assemi Logo Here</p>
                </div>
            </div> 
        )
    }
}
    export default Header;