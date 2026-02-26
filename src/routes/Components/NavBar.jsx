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

                /* Estilos específicos para alinear el menú a la izquierda */
                .navbar .container-fluid {
                    display: flex;
                    justify-content: flex-start !important;
                    align-items: center;
                    gap: 2rem;
                }

                .navbar-brand {
                    max-width: 400px;
                    padding: 0;
                    margin-right: 0 !important;
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

                /* Menú a la izquierda */
                .navbar-collapse {
                    flex-grow: 0 !important;
                }

                .navbar-nav {
                    margin-left: 0 !important;
                    padding-left: 0;
                }

                @media (max-width: 991px) {
                    .navbar {
                        padding: 0.8rem 1rem;
                    }

                    .navbar .container-fluid {
                        gap: 1rem;
                        justify-content: space-between !important;
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

                    .navbar-collapse {
                        flex-grow: 1 !important;
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        width: 100%;
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

                /* Botón hamburguesa con color terracota cuando NO está abierto */
                .navbar-toggler {
                    border: none;
                    padding: 0.7rem;
                    margin-left: auto;
                    order: 2;
                    background: transparent;
                }

                .navbar-toggler.collapsed .navbar-toggler-icon {
                    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%23c17b5e' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
                }

                .navbar-toggler:not(.collapsed) .navbar-toggler-icon {
                    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='white' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
                }

                .navbar-toggler:focus {
                    box-shadow: none;
                    outline: none;
                }

                /* Estilos del menú colapsable */
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
                        color: #ffffff !important;
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
                        className="navbar-toggler collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
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
