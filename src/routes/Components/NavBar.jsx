import React, { useState, useEffect, useContext } from 'react';
import { Link, NavLink } from "react-router-dom";
import { UsuarioContext } from '../../context/UsuarioContext';
import '../../style.css';

export const NavBar = () => {
    const { carrito, setMostrarCarrito } = useContext(UsuarioContext);
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

    // Calcular total de items en carrito
    const totalItems = carrito?.reduce((sum, item) => sum + (item.cantidad || 1), 0) || 0;

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
                    background: rgba(253, 248, 243, 0.95) !important;
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid rgba(193, 123, 94, 0.1);
                }

                /* Contenedor flex para logo a izquierda y menú a derecha */
                .navbar .container-fluid {
                    display: flex;
                    justify-content: space-between !important;
                    align-items: center;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 2rem;
                }

                .navbar-brand {
                    padding: 0;
                    margin: 0 !important;
                }

                .navbar-brand-logo {
                    height: 50px;
                    width: auto;
                    display: block;
                    object-fit: contain;
                    transition: all 0.3s ease;
                }

                .scrolled .navbar-brand-logo {
                    height: 45px;
                }

                /* Menú horizontal a la derecha */
                .navbar-collapse {
                    flex-grow: 0 !important;
                    display: flex !important;
                }

                .navbar-nav {
                    display: flex !important;
                    flex-direction: row !important;
                    align-items: center;
                    gap: 2rem;
                    margin: 0 !important;
                }

                .nav-item {
                    margin: 0 !important;
                }

                .nav-link {
                    color: #3a2a24 !important;
                    font-size: 0.9rem;
                    font-weight: 400;
                    letter-spacing: 1px;
                    text-decoration: none;
                    padding: 0.5rem 0;
                    transition: color 0.3s ease;
                    background: none;
                    border: none;
                    cursor: pointer;
                }

                .navbar.scrolled .nav-link {
                    color: #3a2a24 !important;
                }

                .nav-link:hover {
                    color: #c17b5e !important;
                }

                /* Botón carrito con estilo especial */
                .carrito-btn {
                    background: none;
                    border: 1px solid #d4b2a0;
                    border-radius: 2rem;
                    padding: 0.3rem 1rem;
                    display: flex;
                    align-items: center;
                    gap: 0.3rem;
                    color: #3a2a24;
                    font-size: 0.9rem;
                    letter-spacing: 1px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    position: relative;
                }

                .carrito-btn:hover {
                    background: rgba(193, 123, 94, 0.1);
                    border-color: #c17b5e;
                    color: #c17b5e;
                }

                .carrito-contador {
                    position: absolute;
                    top: -6px;
                    right: -6px;
                    background: #c17b5e;
                    color: white;
                    font-size: 0.7rem;
                    padding: 2px 6px;
                    border-radius: 50%;
                    min-width: 18px;
                    text-align: center;
                }

                /* Ocultar el botón hamburguesa completamente */
                .navbar-toggler {
                    display: none !important;
                }

                /* Ajuste responsive */
                @media (max-width: 768px) {
                    .navbar .container-fluid {
                        flex-wrap: wrap;
                        padding: 0 1rem;
                    }

                    .navbar-collapse {
                        width: 100%;
                        margin-top: 1rem;
                    }

                    .navbar-nav {
                        flex-direction: column !important;
                        width: 100%;
                        gap: 1rem;
                        padding: 1rem 0;
                        border-top: 1px solid rgba(193, 123, 94, 0.2);
                    }

                    .nav-link, .carrito-btn {
                        font-size: 1rem;
                        text-align: center;
                        width: 100%;
                        justify-content: center;
                    }
                }

                @media (max-width: 480px) {
                    .navbar-brand-logo {
                        height: 40px;
                    }
                    
                    .scrolled .navbar-brand-logo {
                        height: 35px;
                    }
                }

                /* Ajuste para que el contenido no quede detrás del navbar */
                body {
                    padding-top: 70px;
                }
            `}</style>

            <nav 
                className={`navbar navbar-expand-lg ${scrolled ? 'scrolled' : ''}`}
            >
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" onClick={() => window.scrollTo(0, 0)}>
                        <img 
                            src="/img/Andrea/Logo elegante de Alekhart.png" 
                            className="navbar-brand-logo" 
                            alt="Alekhart Logo"
                        />
                    </Link>

                    <div className="navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link">
                                    Sobre mí
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link">
                                    Contacto
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <button 
                                    onClick={() => setMostrarCarrito(true)} 
                                    className="carrito-btn"
                                >
                                    🛒 Carrito
                                    {totalItems > 0 && (
                                        <span className="carrito-contador">
                                            {totalItems}
                                        </span>
                                    )}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
