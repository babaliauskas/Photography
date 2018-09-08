import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
    constructor () {
        super();
        this.state = {
            showNav: false
        }
    }

    toggleNav = () => {
        this.setState({
            showNav: !this.state.showNav
        })
    }

    render () {
        return (
            <div className="navbar">
                <div className="navbar-bar">
                    <div className="hamburger-icon" onClick={this.toggleNav}>
                        <i className="fas fa-bars fa-3x"></i>
                    </div>
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/about">About</Link>
                    <Link className="link" to="/portfolio">Portfolio</Link>
                    <Link className="link" to="/pricing">Pricing</Link>
                    <Link className="link" to="/contact">Contact</Link>
                </div>
                <div className={this.state.showNav ? "navbar-dropdown" : "navbar-dropdown hide-nav"}>
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/about">About</Link>
                    <Link className="link" to="/portfolio">Portfolio</Link>
                    <Link className="link" to="/pricing">Pricing</Link>
                    <Link className="link" to="/contact">Contact</Link>
                </div>
            </div>
        )
    }
}

export default Nav;