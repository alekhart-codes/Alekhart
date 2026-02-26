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
                /* Navbar transparente al inicio, semitransparente al hacer scroll */
                .navbar {
                    background: transparent !important;
                    transition: all 0.3s ease;
                    position: fixed;
                    width: 100%;
                    top: 0;
                    z-index: 1000;
                    padding: 1rem 2rem;
                }

                .navbar.scrolled {
                    background: rgba(193, 123, 94, 0.85) !important;
                    backdrop-filter: blur(8px);
                }

                /* Mantener todos tus estilos originales */
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
                    .navbar {
                        padding: 0.8rem 1rem;
                    }
                    
                    .navbar-brand {
                        max-width: 100%;
                    }
                    
                    .navbar-brand-logo {
                        max-height: 210px;
                    }

                    .scrolled .navbar-brand-logo {
                        max-height: 180px;
                    }
                }

                @media (max-width: 576px) {
                    .navbar-brand-logo {
                        max-height: 190px;
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
                    background: transparent;
                }

                .navbar-toggler-icon {
                    width: 2.2em;
                    height: 2.2em;
                    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='white' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
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
                        background: rgba(0, 0, 0, 0.85);
                        padding: 1.5rem;
                        border-radius: 15px;
                        margin-top: 1rem;
                        backdrop-filter: blur(8px);
                    }

                    .nav-link {
                        font-size: 1.4rem;
                        padding: 0.8rem 0;
                        text-align: center;
                    }
                }

                .nav-link {
                    color: #ffffff !important;
                    font-size: 1.2rem;
                    font-weight: 400;
                    transition: opacity 0.3s ease;
                    letter-spacing: 0.5px;
                    position: relative;
                }

                .nav-link:hover {
                    opacity: 0.8;
                }

                /* Ajuste para que el contenido no quede detrás del navbar */
                body {
                    padding-top: 80px;
                }

                @media (max-width: 991px) {
                    body {
                        padding-top: 70px;
                    }
                }
            `}</style>

            <nav 
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
