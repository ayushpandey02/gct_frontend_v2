import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Home.css';
import { FaTrophy, FaMapMarkerAlt, FaMoneyBillWave, FaCalendarAlt, FaStar, FaPhoneAlt, FaUsers } from 'react-icons/fa';

// Import Creator Images
import avinashImg from '../assets/avinash.jpeg';
import sachinImg from '../assets/sachin.jpeg';
import ramaImg from '../assets/rama.jpeg';
import imranImg from '../assets/imran.jpeg';
import logoImg from '../assets/logo.png';

const Home = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    const creatorsData = [
        {
            name: "Avinash Pandey",
            role: "Lead Organizer",
            about: "Cricket enthusiast with 10+ years of organizing local tournaments.",
            photo: avinashImg,
            phone: "+919876543210"
        },
        {
            name: "Imran Mansuri",
            role: "Brand Ambassador",
            about: "Former legend supporting local talent.",
            photo: imranImg,
            phone: "+919876543211"
        },
        {
            name: "Sachin Prajapati",
            role: "Technical Head",
            about: "Ensuring fair play and managing the digital presence of GCT.",
            photo: sachinImg,
            phone: "+919876543212"
        },
        {
            name: "Rama Krishna Sahani",
            role: "Ground Manager",
            about: "Expert in pitch curation and venue management.",
            photo: ramaImg,
            phone: "+919876543213"
        }
    ];

    const tournamentDetails = [
        {
            icon: <FaUsers className="detail-icon" />,
            title: "Team Details",
            desc: <span><strong>8</strong> Team Owners | <strong>13</strong> Players per Team</span>
        },
        {
            icon: <FaMapMarkerAlt className="detail-icon" />,
            title: "Venue",
            desc: <strong>Minaltai Thackeray Udyan, Goregaon</strong>
        },
        {
            icon: <FaMoneyBillWave className="detail-icon" />,
            title: "Registration Fee",
            desc: <span><strong>₹600</strong> per player (All Inclusive)</span>
        },
        {
            icon: <FaCalendarAlt className="detail-icon" />,
            title: "Last Date",
            desc: <strong>February 18, 2026</strong>
        }
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section id="home" className="hero-section fade-in">
                <div className="container hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Goregaon Champions <br />
                            <span className="hero-highlight">Trophy 2026</span>
                        </h1>
                        <p className="hero-subtitle">
                            The biggest local cricket league is back! Experience professional cricket right in your neighborhood.
                        </p>
                        <div className="hero-btns">
                            <Link to="/register" className="btn btn-primary btn-lg">
                                Register Now
                            </Link>
                            <a href="#details" className="btn btn-outline btn-lg">
                                View Details
                            </a>
                        </div>
                    </div>
                    <div className="hero-image">
                        {/* Golden Circle Background */}
                        <div className="golden-circle"></div>
                        {/* Tournament Logo */}
                        <img src={logoImg} alt="GCT Logo" className="hero-logo floating-logo" />
                    </div>
                </div>
            </section>

            {/* Creators Section */}
            <section id="creators" className="section bg-light">
                <div className="container">
                    <h2 className="section-title">Organisers Deck</h2>
                    <div className="creators-grid">
                        {creatorsData.map((creator, index) => (
                            <div key={index} className="creator-card">
                                <img src={creator.photo} alt={creator.name} className="creator-photo" />
                                <h3>{creator.name}</h3>
                                {/* Call Button with Number */}
                                <a href={`tel:${creator.phone}`} className="creator-phone-link">
                                    <FaPhoneAlt className="phone-icon" /> {creator.phone}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Past Winners (Placeholder) */}
            <section id="winners" className="section bg-light">
                <div className="container text-center">
                    <h2 className="section-title">Past Winners</h2>
                    <div className="coming-soon-card fade-in">
                        <FaTrophy className="coming-soon-icon" />
                        <h3>Hall of Fame</h3>
                        <p>Coming Soon...</p>
                        <p className="small-text">We are compiling the history of our champions.</p>
                    </div>
                </div>
            </section>

            {/* Tournament Details (Bottom Cards) */}
            <section id="details" className="section bg-white">
                <div className="container">
                    <h2 className="section-title">Tournament Details</h2>
                    <div className="features-grid">
                        {tournamentDetails.map((detail, index) => (
                            <div key={index} className="feature-card">
                                {detail.icon}
                                <h3>{detail.title}</h3>
                                <p>{detail.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
