import React, { useState, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";
import '../../style.css'; // Asegúrate de importar tus estilos CSS aquí

export const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    // Función para manejar el scroll y cambiar el estado de 'scrolled'
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 10) {
            setScrolled(true);

        } else {
            setScrolled(false);
        }
    };

    // Agrega un listener para el evento 'scroll' cuando el componente se monta
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav style={{ color: '#ffffff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }} className={`navbar navbar-expand-lg navbar-dark ${scrolled ? 'bg-transparent' : 'bg-transparent'} ${scrolled ? 'scrolled' : ''}`}>

  <Link to="/" className="navbar-brand" href="#" onClick={() => window.scrollTo(0, 0)}>
    <img src="/img/Andrea/Logo elegante de Alekhart.png" className="navbar-brand-logo" alt="logo"></img>
  </Link>

  <button
    className="navbar-toggler me-3"
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
</nav>
        </>
    );
};

export default NavBar;
