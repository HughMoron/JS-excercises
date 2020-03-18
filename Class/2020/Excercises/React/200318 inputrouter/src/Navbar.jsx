import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./Navbar.css"; 

class Navbar extends Component {    
    render() {
        return (
            <navbar className="navbar">
                 <Link to='/'>Home</Link> <Link to={{ pathname: '/about' }}>About</Link>
                <Link to='/contact'>Contact</Link>
            </navbar>
        )
    }
}

export default Navbar
