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
                    max-width: 180px; /* Controla el ancho máximo del contenedor del logo */
                    padding: 0;
                    margin-right: auto; /* Empuja el toggle a la derecha */
                }

                .navbar-brand-logo {
                    max-height: 60px; /* Altura máxima del logo */
                    width: auto; /* Mantiene la proporción */
                    height: auto;
                    transition: max-height 0.3s ease;
                }

                /* Tamaño más pequeño cuando se hace scroll */
                .scrolled .navbar-brand-logo {
                    max-height: 45px;
                }

                /* Responsive para móviles */
                @media (max-width: 991px) {
                    .navbar-brand {
                        max-width: 140px;
                    }
                    
                    .navbar-brand-logo {
                        max-height: 50px;
                    }

                    .scrolled .navbar-brand-logo {
                        max-height: 40px;
                    }
                }

                @media (max-width: 576px) {
                    .navbar-brand {
                        max-width: 120px;
                    }
                    
                    .navbar-brand-logo {
                        max-height: 45px;
                    }

                    .scrolled .navbar-brand-logo {
                        max-height: 35px;
                    }
                }

                /* Asegura que el toggle esté bien posicionado */
                .navbar-toggler {
                    border: none;
                    padding: 0.5rem;
                    margin-left: auto; /* Empuja el toggle a la derecha */
                    order: 2; /* Lo coloca después del logo */
                }

                /* Opcional: efecto hover suave */
                .navbar-brand-logo:hover {
                    opacity: 0.9;
                    transform: scale(1.02);
                }

                /* Mejora el collapse en móvil */
                .navbar-collapse {
                    background: rgba(0, 0, 0, 0.9);
                    padding: 1rem;
                    border-radius: 10px;
                    margin-top: 1rem;
                    order: 3;
                }

                @media (min-width: 992px) {
                    .navbar-collapse {
                        background: transparent;
                        padding: 0;
                        margin-top: 0;
                    }
                }
            `}</style>

            <nav 
                style={{ 
                    color: '#ffffff', 
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    transition: 'all 0.3s ease'
                }} 
                className={`navbar navbar-expand-lg navbar-dark ${scrolled ? 'bg-transparent scrolled' : 'bg-transparent'}`}
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
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item me-3">
                                <a href="#faq-section" className="nav-link" style={{ color: '#ffffff' }}>
                                    FAQs
                                </a>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink to="/contact" className="nav-link" style={{ color: '#ffffff' }}>
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
