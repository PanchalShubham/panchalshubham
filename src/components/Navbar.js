import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Navbar.scss';
export default function Navbar() {
    return (
        <div className="menubar">
            <p>
                <span className="menu-item"><Link to="/">Home</Link></span> <span className="menu-item-separator">/</span>
                <span className="menu-item"><Link to="/education">Education</Link></span> /
                <span className="menu-item"><Link to="/projects">Projects</Link></span> /
                <span className="menu-item"><Link to="/knowledge">Knowledge</Link></span> /
                <span className="menu-item"><Link to="/contact">Contact</Link></span>
            </p>
        </div>
    );
};