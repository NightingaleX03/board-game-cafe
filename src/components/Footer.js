import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Footer.css';
import instagramLogo from '../images/instagram.png';
import facebookLogo from '../images/facebook.png';
import discordLogo from '../images/discord.png';

const Footer = () => {
    return (
        <footer className="footer bg-light text-dark">
            <div className="container py-3">
                <div className="row">
                    <div className="col-md-6">
                        <address className="mb-0">
                            471 5th Ave,<br />
                            New York, 11215<br />
                            <a href="mailto:sipnplaynyc@gamil.com">sipnplaynyc@gamil.com</a><br />
                            718-971-1684
                        </address>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <div className="company-name mb-2">Sip & Play</div>
                        <div className="social-icons">
                            <a href="https://www.instagram.com" className="me-2" aria-label="Instagram">
                                <img src={instagramLogo} alt="Instagram" />
                            </a>
                            <a href="https://www.facebook.com" className="me-2" aria-label="Facebook">
                                <img src={facebookLogo} alt="Facebook" />
                            </a>
                            <a href="https://www.discord.com" className="me-2" aria-label="Discord">
                                <img src={discordLogo} alt="Instagram" /> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
