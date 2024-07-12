import React from 'react';
import '../styles/Navbar.css';
import logo from '../images/sipnplay.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar">
            <a className="navbar-brand" href="/">
                <img src={logo} alt="My Logo" height="30" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Events">Events</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/GameCollection">Game Collection</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Menu">Menu</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Reservation">Reservation</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
