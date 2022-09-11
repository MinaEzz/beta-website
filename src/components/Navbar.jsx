import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../css/Navbar.css';

// const navLink = document.getElementsByClassName('nav-link-hov');
// const path = window.location.pathname;
// switch(path) {
//     case '/': 
//         navLink.className('active');
//     break;
//     case '/about': 
//         navLink.className('active');
//     break;
//     case '/contact':
//         navLink.className('active');
//     break;
//     default:
//         console.log('no active nav link');
// }

function Nav_bar() {

return (
    <Navbar expand="lg" className='fixed-top'>
        <div className='container'>
            <Navbar.Brand className='logo'> 
            <Link to={'/'}>
            <img src="Assets/images/logo.png" alt='logo' draggable='false'></img>
            </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
            <Nav.Link>
                <Link to={'/'} className="nav-link nav-link-hov active">Home</Link>
                </Nav.Link> 
                <Nav.Link>
                <Link to={'/about'} className="nav-link nav-link-hov">About</Link>
                </Nav.Link>
                <Nav.Link>
                <Link to={'/contact'} className="nav-link nav-link-hov">Contact Us</Link>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </div> 
        {/* ./container */}
    </Navbar>
)
}

export default Nav_bar