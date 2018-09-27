import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
    render () {
        return (
            <div>
                <div className='logo'> Sigute </div>
                <hr/>
                <div className="navbar">
                
                    <Link className='nav-link' to="/">Home</Link>
                    <Link className='nav-link' to="/about">About</Link>
                    <Link className='nav-link' to="/portfolio">Portfolio</Link>
                    <Link className='nav-link' to="/pricing">Pricing</Link>
                    <Link className='nav-link' to="/contact">Contact</Link>
                </div>
            </div>
        )
    }
}

export default Nav;