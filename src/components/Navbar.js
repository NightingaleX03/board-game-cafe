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
                        <a className="nav-link" href="/"><strong>Home</strong></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Events"><strong>Events</strong></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/GameCollection"><strong>Game Collection</strong></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Menu"><strong>Menu</strong></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Reservation"><strong>Reservation</strong></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about"><strong>About</strong></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
