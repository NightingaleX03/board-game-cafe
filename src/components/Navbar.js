import React from 'react';
import '../styles/Navbar.css';
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
            </div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/Events">Events</a></li>
                <li><a href="/GameCollection">Game Collection</a></li>
                <li><a href="/Menu">Menu</a></li>
                <li><a href="/Reservation">Reservation</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
