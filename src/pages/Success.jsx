import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Registration.css'; // Reusing loader styles
import { FaCheckCircle } from 'react-icons/fa';

const Success = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Auto-redirect to home after 5 seconds
        const timer = setTimeout(() => {
            navigate('/');
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="section fade-in" style={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            background: 'radial-gradient(circle at center, #fff, #f8f9fa)'
        }}>
            <div style={{ marginBottom: '2rem' }}>
                <FaCheckCircle style={{ color: '#B8860B', fontSize: '5rem', marginBottom: '1rem' }} />
                <h1 style={{
                    color: '#B8860B',
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    marginBottom: '0.5rem'
                }}>
                    Registration Successful!
                </h1>
                <p style={{
                    color: '#475569',
                    fontSize: '1.2rem',
                    fontWeight: '500'
                }}>
                    Welcome to <strong>Goregaon Champions Trophy</strong>
                </p>
            </div>

            {/* Simple Loader for redirect */}
            <div style={{ marginTop: '2rem' }}>
                <div className="loader" style={{
                    width: '40px',
                    height: '40px',
                    border: '4px solid #e2e8f0',
                    borderTop: '4px solid #B8860B',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                }}></div>
                <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#94a3b8' }}>
                    Redirecting to Home...
                </p>
            </div>

            <style>
                {`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}
            </style>
        </div>
    );
};

export default Success;
