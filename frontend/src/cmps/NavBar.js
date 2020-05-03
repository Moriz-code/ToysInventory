import React from 'react';
import { NavLink } from 'react-router-dom'


// import stam from './stam'
// import {popo} from './stam'

export default function NavBar() {
    return <nav>
        <ul className="container navbar">
            <li><NavLink activeClassName="active" to='/' exact>Toys</NavLink></li>           
            <li><NavLink activeClassName="active" to='/toyedit'>Add new toy</NavLink></li>
            <li><NavLink activeClassName="active" to='/aboutus'>About Us</NavLink></li>
        </ul>
    </nav>
}