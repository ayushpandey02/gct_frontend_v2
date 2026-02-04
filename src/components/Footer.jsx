import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container footer-container">
                <div className="footer-col">
                    <h3>Goregaon Champions Trophy</h3>
                    <p>The premium local cricket experience.</p>
                </div>
                <div className="footer-col">
                    <h4>Links</h4>
                    <ul>
                        <li><a href="/#home">Home</a></li>
                        <li><a href="/#creators">Organisers</a></li>
                        <li><a href="/#details">Details</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="https://www.instagram.com/goregaonchampiontrophy?igsh=ZWtza3czYmRwMmZu"><FaInstagram /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Goregaon Champions Trophy. Dedicated to the Spirit of Cricket.</p>
            </div>
        </footer>
    );
};

export default Footer;
