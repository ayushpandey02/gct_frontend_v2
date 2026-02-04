import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaUsers, FaTrophy, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

import logoImg from '../assets/logo.png';

const Navbar = () => {
    const location = useLocation();

    const navLinks = [
        { title: 'Home', path: '/#home', icon: <FaHome /> },
        { title: 'Creators', path: '/#creators', icon: <FaUsers /> },
        { title: 'Details', path: '/#details', icon: <FaTrophy /> },
    ];

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="navbar">
                <div className="container navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img src={logoImg} alt="GCT" className="nav-logo-img" />
                        GCT
                    </Link>

                    <ul className="nav-menu">
                        {navLinks.map((item, index) => (
                            <li key={index} className="nav-item">
                                <a
                                    href={item.path}
                                    className={`nav-links ${location.hash === item.path.substring(1) ? 'active-link' : ''}`}
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                        {location.pathname !== '/register' && (
                            <li className="nav-item">
                                <Link to="/register" className="btn btn-primary">Register Now</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>

            {/* Mobile Bottom Navigation */}
            <nav className="bottom-nav">
                {navLinks.map((item, index) => (
                    <a key={index} href={item.path} className="bottom-nav-link">
                        {item.icon}
                        <span className="bottom-nav-label">{item.title}</span>
                    </a>
                ))}
                {location.pathname !== '/register' && (
                    <Link to="/register" className="bottom-nav-link highlight">
                        <span className="register-icon">+</span>
                        <span className="bottom-nav-label">Register</span>
                    </Link>
                )}
            </nav>
        </>
    );
};

export default Navbar;
