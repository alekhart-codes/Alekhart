import React, { useState, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";
import '../../style.css';

export const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 10) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <style>{`
                .navbar-brand {
                    max-width: 400px;
                    padding: 0;
                    margin-right: auto;
                }

                .navbar-brand-logo {
                    max-height: 140px;
                    width: auto;
                    height: auto;
                    transition: max-height 0.3s ease;
                }

                .scrolled .navbar-brand-logo {
                    max-height: 120px;
                }

                @media (max-width: 991px) {
                    .navbar-brand {
                        max-width: 100%;
                    }
                    
                    .navbar-brand-logo {
                        max-height: 210px; /* 50% más grande que antes (140px → 210px) */
                    }

                    .scrolled .navbar-brand-logo {
                        max-height: 180px;
                    }
                }

                @media (max-width: 576px) {
                    .navbar-brand-logo {
                        max-height: 190px; /* Ajuste para móviles pequeños */
                    }

                    .scrolled .navbar-brand-logo {
                        max-height: 160px;
                    }
                }

                .navbar-toggler {
                    border: none;
                    padding: 0.7rem;
                    margin-left: auto;
                    order: 2;
                }

                .navbar-toggler-icon {
                    width: 2.2em;
                    height: 2.2em;
                }

                .navbar-toggler:focus {
                    box-shadow: none;
                    outline: none;
                }

                .navbar-collapse {
                    background: transparent;
                    padding: 0;
                    margin-top: 0;
                    order: 3;
                }

                @media (max-width: 991px) {
                    .navbar-collapse {
                        background: rgba(0, 0, 0, 0.9);
                        padding: 1.5rem;
                        border-radius: 15px;
                        margin-top: 1rem;
                        backdrop-filter: blur(5px);
                    }

                    .nav-link {
                        font-size: 1.4rem;
                        padding: 0.8rem 0;
                    }
                }

                .nav-link {
                    color: #ffffff !important;
                    font-size: 1.2rem;
                    font-weight: 400;
                    transition: opacity 0.3s ease;
                    letter-spacing: 0.5px;
                }

                .nav-link:hover {
                    opacity: 0.8;
                }
            `}</style>

            <nav 
                style={{ 
                    color: '#ffffff',
                    transition: 'all 0.3s ease'
                }} 
                className={`navbar navbar-expand-lg navbar-dark ${scrolled ? 'scrolled' : ''}`}
            >
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" onClick={() => window.scrollTo(0, 0)}>
                        <img 
                            src="/img/Andrea/Logo elegante de Alekhart.png" 
                            className="navbar-brand-logo" 
                            alt="Alekhart Logo"
                        />
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav ml-auto align-items-center">
                            <li className="nav-item me-4">
                                <a href="#faq-section" className="nav-link">
                                    FAQs
                                </a>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink to="/contact" className="nav-link">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
