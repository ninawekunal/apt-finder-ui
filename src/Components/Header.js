import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import "../Styles/Header.css";
import {FaBars} from 'react-icons/fa';
import logo from "../Images/favicon.ico";

class Header extends Component{
    state = {
        isOpen:false,
    }
    handleToggle = () => {
        this.setState({
            isOpen:!this.state.isOpen
        });
    }
    render(){
        return (
            <div className="header">
                {/* <Link to="/" className="head">
                    <img className="header_icon" src="favicon.ico" alt="logo"></img>
                </Link> */}
                <div className="nav">
                    <Link to="/" className="nav-link">
                        <img className="header_icon" src={logo} alt="Logo" />
                        &nbsp;
                        <span className="logoName">Apt Finder</span>
                    </Link>
                    
                    <button type="button" className="nav-bar" onClick={this.handleToggle}><FaBars/></button>
                    <ul className={this.state.isOpen?"nav-menu-mobile": "nav-menu"}>
                        <Link className="nav-link" to="/" activestyle="true">Home</Link>
                        <Link className="nav-link" to="/" activestyle="true">Apartments</Link>
                        <Link className="nav-link" to="/" activestyle="true">About Us</Link>
                        <Link className="nav-link" to="/" activestyle="true">Sign Up</Link>
                    </ul>
                    <div className="nav-btn">
                        <button className="nav-btn-link">Sign In</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header