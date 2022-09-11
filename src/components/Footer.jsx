import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Footer.css';

function footer() {
return (
    <footer>
        <div className="container">
            <div className="logo">
                <Link to={'/'}>
                    <img src="Assets/images/logo.png" alt='logo' draggable='false'></img>
                </Link>
            </div>
        </div>
    </footer>
)
}

export default footer