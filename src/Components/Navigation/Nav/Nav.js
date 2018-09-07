import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
    render () {
        return (
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/contact">Contact</Link>
            </div>
        )
    }
}

export default Nav;