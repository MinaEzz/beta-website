import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';
import '../css/Navbar.css';

function Nav_bar() {

return (
    <Navbar expand="lg" className='fixed-top'>
        <div className='container'>
            <Navbar.Brand className='logo'> 
            <NavLink to={'/home'}>
            <img src="Assets/images/logo.png" alt='logo' draggable='false'></img>
            </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
            <Nav.Link>
                <NavLink to={'/home'} className="nav-link nav-link-hov  ">Home</NavLink>
                </Nav.Link> 
                <Nav.Link>
                <NavLink to={'/about'} className="nav-link nav-link-hov ">About</NavLink>
                </Nav.Link>
                <Nav.Link>
                <NavLink to={'/contact'} className="nav-link nav-link-hov ">Contact Us</NavLink>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </div> 
        {/* ./container */}
    </Navbar>
)
}

export default Nav_bar