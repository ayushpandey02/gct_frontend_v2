import React from 'react';
import { Link } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';

const EntryClosed = () => (
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
            <FaLock style={{ color: '#B8860B', fontSize: '4rem', marginBottom: '1.5rem' }} />
            <h1 style={{
                color: '#B8860B',
                fontSize: '2.5rem',
                fontWeight: '700',
                marginBottom: '0.5rem'
            }}>
                Registrations Closed
            </h1>
            <p style={{
                color: '#475569',
                fontSize: '1.2rem',
                fontWeight: '500',
                marginBottom: '2rem'
            }}>
                Sorry, strict entries only! Stay tuned for next season.
            </p>

            <Link to="/" style={{
                display: 'inline-block',
                padding: '0.8rem 2rem',
                background: '#B8860B',
                color: '#fff',
                borderRadius: '2rem',
                fontWeight: '600',
                textDecoration: 'none',
                boxShadow: '0 4px 6px rgba(184, 134, 11, 0.3)',
                transition: 'all 0.3s ease'
            }}
                onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
                Return Home
            </Link>
        </div>
    </div>
);

export default EntryClosed;
