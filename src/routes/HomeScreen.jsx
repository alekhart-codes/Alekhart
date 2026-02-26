import React, { useState, useEffect, useRef } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import FAQSection from "./Components/FAQSection";
import { AboutScreen } from "./AboutScreen";
import ReactProjectsSlider from "./Components/ReactPRojectSlider";

export const HomeScreen = () => {
  const { usuario } = React.useContext(UsuarioContext);
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todas");
  const [modoVista, setModoVista] = useState("portfolio");
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [formatoSeleccionado, setFormatoSeleccionado] = useState("original");
  const fadeRefs = useRef([]);

  // Número de WhatsApp (cambiar por el real)
  const WHATSAPP_NUMBER = "569XXXXXXXX";

  // Obras de portafolio
  const obras = [
    {
      id: 1,
      titulo: "Flor de la Vida",
      categoria: "Mandalas",
      imagen: "/img/Andrea/mandala1.jpg",
      descripcion: "El origen de toda forma",
      tecnica: "Acrílico sobre papel",
      year: "2024",
      tipo: "portfolio"
    },
    {
      id: 2,
      titulo: "Metatrón",
      categoria: "Mandalas",
      imagen: "/img/Andrea/mandala2.jpg",
      descripcion: "La geometría del equilibrio",
      tecnica: "Acrílico sobre papel",
      year: "2024",
      tipo: "portfolio"
    },
    {
      id: 3,
      titulo: "Semilla de la Vida",
      categoria: "Mandalas",
      imagen: "/img/Andrea/mandala3.jpg",
      descripcion: "Los siete círculos de la creación",
      tecnica: "Acrílico sobre papel",
      year: "2023",
      tipo: "portfolio"
    },
    {
      id: 4,
      titulo: "Estudio I",
      categoria: "Geometría Sagrada",
      imagen: "/img/Andrea/geo1.jpg",
      descripcion: "Flor de la vida - estudio",
      tecnica: "Tinta sobre papel",
      year: "2024",
      tipo: "portfolio"
    },
    {
      id: 5,
      titulo: "Estudio II",
      categoria: "Geometría Sagrada",
      imagen: "/img/Andrea/geo2.jpg",
      descripcion: "Metatrón - variación",
      tecnica: "Tinta sobre papel",
      year: "2024",
      tipo: "portfolio"
    },
    {
      id: 6,
      titulo: "Mural Vertical",
      categoria: "Murales",
      imagen: "/img/Andrea/mural1.jpg",
      descripcion: "Geometría en altura",
      tecnica: "Acrílico sobre muro",
      year: "2024",
      tipo: "portfolio"
    },
    {
      id: 7,
      titulo: "Muro Circular",
      categoria: "Murales",
      imagen: "/img/Andrea/mural2.jpg",
      descripcion: "Mandala a gran escala",
      tecnica: "Acrílico sobre muro",
      year: "2023",
      tipo: "portfolio"
    },
    {
      id: 8,
      titulo: "Intervención",
      categoria: "Murales",
      imagen: "/img/Andrea/mural3.jpg",
      descripcion: "Espacio corporativo",
      tecnica: "Acrílico sobre muro",
      year: "2024",
      tipo: "portfolio"
    },
    {
      id: 9,
      titulo: "Estudio III",
      categoria: "Geometría Sagrada",
      imagen: "/img/Andrea/geo3.jpg",
      descripcion: "Sacro y simétrico",
      tecnica: "Tinta sobre papel",
      year: "2023",
      tipo: "portfolio"
    }
  ];

  // Productos en venta
  const productos = [
    {
      id: 101,
      titulo: "Acuarela Cósmica I",
      categoria: "Acuarelas",
      imagen: "/img/Andrea/acuarela1.jpg",
      descripcion: "Exploración energética en acuarela",
      tecnica: "Acuarela sobre papel",
      year: "2024",
      formatos: {
        original: { precio: 180000, disponible: true, descripcion: "Obra única original firmada" },
        print: { precio: 45000, disponible: true, descripcion: "Impresión de alta calidad · Edición limitada" },
        digital: { precio: 9990, disponible: true, descripcion: "Archivo digital para imprimir tú mismo" }
      },
      tipo: "tienda"
    },
    {
      id: 102,
      titulo: "Acuarela Solar",
      categoria: "Acuarelas",
      imagen: "/img/Andrea/acuarela2.jpg",
      descripcion: "Geometría fluida y solar",
      tecnica: "Acuarela sobre papel",
      year: "2024",
      formatos: {
        original: { precio: 220000, disponible: true, descripcion: "Obra única original firmada" },
        print: { precio: 55000, disponible: true, descripcion: "Impresión de alta calidad · Edición limitada" },
        digital: { precio: 9990, disponible: true, descripcion: "Archivo digital para imprimir tú mismo" }
      },
      tipo: "tienda"
    },
    {
      id: 103,
      titulo: "Estudio en Azul",
      categoria: "Acuarelas",
      imagen: "/img/Andrea/acuarela3.jpg",
      descripcion: "Profundidad y transparencia",
      tecnica: "Acuarela sobre papel",
      year: "2023",
      formatos: {
        original: { precio: 195000, disponible: false, descripcion: "Obra única original firmada" },
        print: { precio: 48000, disponible: true, descripcion: "Impresión de alta calidad · Edición limitada" },
        digital: { precio: 9990, disponible: true, descripcion: "Archivo digital para imprimir tú mismo" }
      },
      tipo: "tienda"
    },
    {
      id: 104,
      titulo: "Mandala Acuarela",
      categoria: "Acuarelas",
      imagen: "/img/Andrea/acuarela4.jpg",
      descripcion: "Geometría sagrada en acuarela",
      tecnica: "Acuarela sobre papel",
      year: "2024",
      formatos: {
        original: { precio: 210000, disponible: true, descripcion: "Obra única original firmada" },
        print: { precio: 52000, disponible: true, descripcion: "Impresión de alta calidad · Edición limitada" },
        digital: { precio: 9990, disponible: true, descripcion: "Archivo digital para imprimir tú mismo" }
      },
      tipo: "tienda"
    }
  ];

  // Categorías dinámicas según modo
  const categoriasPortfolio = ["todas", "Mandalas", "Geometría Sagrada", "Murales"];
  const categoriasTienda = ["todas", "Acuarelas"];
  const categorias = modoVista === "portfolio" ? categoriasPortfolio : categoriasTienda;

  // Elementos a mostrar
  const elementosMostrados = modoVista === "portfolio" ? obras : productos;
  const elementosFiltrados = categoriaSeleccionada === "todas" 
    ? elementosMostrados 
    : elementosMostrados.filter(el => el.categoria === categoriaSeleccionada);

  // Intersection Observer para fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    fadeRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !fadeRefs.current.includes(el)) {
      fadeRefs.current.push(el);
    }
  };

  const formatearPrecio = (precio) => {
    return `$${precio.toLocaleString('es-CO')}`;
  };

  const abrirModalCompra = (producto, e) => {
    e.stopPropagation();
    setProductoSeleccionado(producto);
    
    // Seleccionar automáticamente el primer formato disponible
    const primerDisponible = Object.entries(producto.formatos)
      .find(([_, formato]) => formato.disponible);
    
    setFormatoSeleccionado(primerDisponible?.[0] || "original");
  };

  const cerrarModalCompra = () => {
    setProductoSeleccionado(null);
  };

  const enviarWhatsApp = () => {
    if (!productoSeleccionado) return;
    
    const formato = productoSeleccionado.formatos[formatoSeleccionado];
    
    const mensaje = `
Hola Andrea,

Quiero comprar:
🎨 *${productoSeleccionado.titulo}*
📋 Formato: *${formatoSeleccionado.toUpperCase()}*
💰 Precio: *${formatearPrecio(formato.precio)}*
📝 ${formato.descripcion}

¿Está disponible? Me interesa coordinarlo.
`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
    cerrarModalCompra();
  };

  return (
    <div className="home-container">
      {/* NAVBAR - Solo logo, sin texto */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="brand">
            <span className="brand-icon">✸</span>
          </div>
          <div className="nav-links">
            <a href="#obra">Obra</a>
            <a href="#tienda">Tienda</a>
            <a href="#sobre">Sobre mí</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-fondo"></div>
        <div className="container">
          <div className="hero-content">
            <div className="mandala-icon">✸</div>
            <h1 className="hero-titulo">
              Andrea
              <span className="hero-apellido"> Fortoul</span>
            </h1>
            <div className="hero-line"></div>
            <p className="hero-subtitulo">
              Mandalas · Geometría Sagrada · Murales · Acuarelas
            </p>
            <p className="hero-frase">
              "El centro está en todas partes"
            </p>
            <div className="hero-badges">
              <span>+12 años</span>
              <span>Arte original</span>
              <span>Murales en vivo</span>
            </div>
            {/* Solo un par de botones en hero, no en el selector de vista */}
          </div>
        </div>
      </section>

      {/* SELECTOR DE VISTA (Portfolio/Tienda) - Solo una vez */}
      <section className="vista-selector fade" ref={addToRefs}>
        <div className="container">
          <div className="vista-wrapper">
            <button 
              className={`vista-btn ${modoVista === 'portfolio' ? 'activo' : ''}`}
              onClick={() => {
                setModoVista('portfolio');
                setCategoriaSeleccionada("todas");
              }}
            >
              <span className="vista-icono">🎨</span>
              Portfolio
            </button>
            <button 
              className={`vista-btn ${modoVista === 'tienda' ? 'activo' : ''}`}
              onClick={() => {
                setModoVista('tienda');
                setCategoriaSeleccionada("todas");
              }}
            >
              <span className="vista-icono">🛍️</span>
              Tienda
            </button>
          </div>
        </div>
      </section>

      {/* FILTROS */}
      <section className="filtros-section fade" ref={addToRefs}>
        <div className="container">
          <div className="filtros-wrapper">
            {categorias.map((cat) => (
              <button
                key={cat}
                className={`filtro-btn ${categoriaSeleccionada === cat ? "activo" : ""}`}
                onClick={() => setCategoriaSeleccionada(cat)}
              >
                {cat === "todas" ? "Todo" : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA / TIENDA */}
      <section id={modoVista === 'portfolio' ? "obra" : "tienda"} className="galeria-section fade" ref={addToRefs}>
        <div className="container">
          <h2 className="section-titulo text-center">
            {modoVista === 'portfolio' ? 'Obras' : 'Acuarelas disponibles'}
          </h2>
          <div className="galeria-grid">
            {elementosFiltrados.map((elemento, index) => (
              <div 
                key={elemento.id} 
                className={`obra-card ${index % 3 === 1 ? "obra-card-offset" : ""}`}
                onClick={() => elemento.tipo === 'portfolio' ? setImagenSeleccionada(elemento) : null}
              >
                <div className="obra-imagen-wrapper">
                  <img 
                    src={elemento.imagen} 
                    alt={elemento.titulo} 
                    loading="lazy"
                  />
                  <div className="obra-overlay">
                    <span>{elemento.tipo === 'portfolio' ? 'Ver más' : 'Ver opciones'}</span>
                  </div>
                  
                  {elemento.tipo === 'tienda' && (
                    <>
                      {!Object.values(elemento.formatos).some(f => f.disponible) ? (
                        <span className="badge-vendido">Vendida</span>
                      ) : (
                        <span className="badge-disponible">Disponible</span>
                      )}
                    </>
                  )}
                </div>
                
                <div className="obra-info">
                  <h3>{elemento.titulo}</h3>
                  <p>{elemento.categoria}</p>
                  <p className="obra-tecnica">{elemento.tecnica} · {elemento.year}</p>
                  
                  {/* Para tienda: precio destacado */}
                  {elemento.tipo === 'tienda' && Object.values(elemento.formatos).some(f => f.disponible) && (
                    <>
                      <p className="precio-destacado">
                        Desde {formatearPrecio(Math.min(
                          ...Object.values(elemento.formatos)
                            .filter(f => f.disponible)
                            .map(f => f.precio)
                        ))}
                      </p>
                      
                      <button 
                        className="producto-boton"
                        onClick={(e) => abrirModalCompra(elemento, e)}
                      >
                        Elegir formato
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE LA ARTISTA */}
      <section id="sobre" className="sobre-section fade" ref={addToRefs}>
        <div className="container">
          <div className="sobre-grid">
            <div className="sobre-imagen">
              <img src="/img/Andrea/retrato.jpg" alt="Andrea Fortoul" loading="lazy" />
              <div className="sobre-mandala">✦</div>
            </div>
            <div className="sobre-contenido">
              <h2 className="section-titulo">Geometría del alma</h2>
              <div className="sobre-linea"></div>
              <p className="sobre-texto-grande">
                Cada mandala es un viaje al centro. Cada mural, un diálogo con el espacio.
              </p>
              <p className="sobre-texto">
                Desde pequeña, la geometría sagrada me hablaba en silencio. Lo que otros veían como patrones, yo veía como estructuras vivas. Hoy, mis manos traducen ese lenguaje en color y forma.
              </p>
              <p className="sobre-texto">
                Trabajo con espacios que necesitan alma. Con personas que buscan algo más que decoración.
              </p>
              <div className="sobre-firma">Andrea Fortoul</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO CREATIVO */}
      <section className="proceso-section fade" ref={addToRefs}>
        <div className="container">
          <h2 className="section-titulo text-center">Cómo nace una obra</h2>
          <div className="proceso-grid">
            <div className="proceso-card">
              <div className="proceso-numero">01</div>
              <h3>Intención</h3>
              <p>Una pregunta, un espacio, una persona. Todo empieza con escuchar qué necesita nacer.</p>
            </div>
            <div className="proceso-card">
              <div className="proceso-numero">02</div>
              <h3>Geometría</h3>
              <p>La flor de la vida, el metatrón, la semilla. Estructuras antiguas que ordenan el caos.</p>
            </div>
            <div className="proceso-card">
              <div className="proceso-numero">03</div>
              <h3>Color</h3>
              <p>El color no decora. Activa. Cada paleta es una vibración que despierta algo en quien mira.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="testimonios-section fade" ref={addToRefs}>
        <div className="container">
          <div className="testimonio-contenido">
            <div className="testimonio-icono">✦</div>
            <p className="testimonio-texto">
              "El mural que Andrea pintó en nuestra oficina no es solo una pared hermosa. Es un lugar donde la gente se detiene, respira y vuelve a empezar. Transformó el espacio por completo."
            </p>
            <p className="testimonio-autor">— Laura, Space Cowork</p>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="contacto-section fade" ref={addToRefs}>
        <div className="container">
          <div className="contacto-contenido">
            <h2 className="section-titulo">¿Tu espacio necesita un mandala?</h2>
            <p>Murales, comisiones, obra original. Conversemos.</p>
            <a href="mailto:andrea@email.com" className="contacto-boton">
              andrea@email.com
            </a>
            <div className="contacto-redes">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="Pinterest">Pinterest</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Andrea Fortoul · Todos los derechos reservados</p>
      </footer>

      {/* MODAL DE PORTFOLIO */}
      {imagenSeleccionada && (
        <div className="modal-overlay" onClick={() => setImagenSeleccionada(null)}>
          <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            <button className="modal-cerrar" onClick={() => setImagenSeleccionada(null)}>×</button>
            <img src={imagenSeleccionada.imagen} alt={imagenSeleccionada.titulo} />
            <div className="modal-info">
              <h3>{imagenSeleccionada.titulo}</h3>
              <p className="modal-categoria">{imagenSeleccionada.categoria}</p>
              <p className="modal-tecnica">{imagenSeleccionada.tecnica} · {imagenSeleccionada.year}</p>
              <p className="modal-descripcion">{imagenSeleccionada.descripcion}</p>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE COMPRA */}
      {productoSeleccionado && (
        <div className="modal-overlay" onClick={cerrarModalCompra}>
          <div className="modal-contenido modal-compra" onClick={(e) => e.stopPropagation()}>
            <button className="modal-cerrar" onClick={cerrarModalCompra}>×</button>
            
            <div className="modal-compra-grid">
              <div className="modal-compra-imagen">
                <img src={productoSeleccionado.imagen} alt={productoSeleccionado.titulo} />
              </div>
              
              <div className="modal-compra-info">
                <h2>{productoSeleccionado.titulo}</h2>
                <p className="modal-categoria">{productoSeleccionado.categoria}</p>
                <p className="modal-tecnica">{productoSeleccionado.tecnica} · {productoSeleccionado.year}</p>
                <p className="modal-descripcion">{productoSeleccionado.descripcion}</p>
                
                <div className="formatos-selector">
                  <h3>Elige un formato:</h3>
                  
                  {Object.entries(productoSeleccionado.formatos).map(([key, formato]) => (
                    formato.disponible && (
                      <label 
                        key={key} 
                        className={`formato-opcion ${formatoSeleccionado === key ? 'seleccionado' : ''}`}
                      >
                        <input
                          type="radio"
                          name="formato"
                          value={key}
                          checked={formatoSeleccionado === key}
                          onChange={() => setFormatoSeleccionado(key)}
                        />
                        <div className="formato-info">
                          <span className="formato-nombre">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                          <span className="formato-precio">{formatearPrecio(formato.precio)}</span>
                          <span className="formato-descripcion">{formato.descripcion}</span>
                        </div>
                      </label>
                    )
                  ))}
                </div>
                
                <button className="modal-comprar-btn" onClick={enviarWhatsApp}>
                  Comprar por WhatsApp
                </button>
                <p className="modal-urgencia">Edición limitada · Envío a todo Chile</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ESTILOS GLOBALES Y DEL COMPONENTE */}
      <style jsx>{`
        /* Reset y estilos base */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Cormorant Garamond', 'Georgia', serif;
          background-color: #fdf8f3;
          color: #3a2a24;
          line-height: 1.6;
          overflow-x: hidden;
        }

        .home-container {
          min-height: 100vh;
        }

        /* Navbar - Solo icono */
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(253, 248, 243, 0.9);
          backdrop-filter: blur(10px);
          padding: 1rem 0;
          z-index: 1000;
          border-bottom: 1px solid rgba(193, 123, 94, 0.1);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .brand {
          font-size: 1.5rem;
        }

        .brand-icon {
          color: #c17b5e;
          font-size: 1.8rem;
          animation: girar 10s linear infinite;
          display: inline-block;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          color: #3a2a24;
          text-decoration: none;
          font-size: 0.9rem;
          letter-spacing: 1px;
          transition: color 0.3s ease;
        }

        .nav-links a:hover {
          color: #c17b5e;
        }

        @keyframes girar {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Hero */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          background: linear-gradient(135deg, #fdf8f3 0%, #f9eee7 100%);
          padding: 6rem 2rem 2rem;
        }

        .hero-fondo {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 30%, rgba(210, 150, 120, 0.1) 0%, transparent 30%),
                      radial-gradient(circle at 80% 70%, rgba(180, 120, 90, 0.1) 0%, transparent 40%);
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .mandala-icon {
          font-size: 2rem;
          color: #c17b5e;
          margin-bottom: 1rem;
          animation: girar 20s linear infinite;
        }

        .hero-titulo {
          font-size: clamp(2.5rem, 8vw, 5rem);
          font-weight: 300;
          color: #3a2a24;
          line-height: 1.1;
        }

        .hero-apellido {
          font-weight: 500;
          color: #c17b5e;
          display: block;
          font-size: clamp(2rem, 7vw, 4rem);
        }

        .hero-line {
          width: 80px;
          height: 1px;
          background: #c17b5e;
          margin: 1.2rem auto;
          opacity: 0.5;
        }

        .hero-subtitulo {
          font-size: clamp(0.9rem, 3.5vw, 1.3rem);
          letter-spacing: 3px;
          color: #8b6b5c;
          margin-bottom: 1.2rem;
          text-transform: uppercase;
        }

        .hero-frase {
          font-size: clamp(1.2rem, 5vw, 1.8rem);
          font-style: italic;
          color: #5d4a40;
          margin-bottom: 1.8rem;
        }

        .hero-badges {
          display: flex;
          justify-content: center;
          gap: 0.8rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .hero-badges span {
          padding: 0.4rem 1.2rem;
          border: 1px solid #d4b2a0;
          border-radius: 40px;
          color: #5d4a40;
          font-size: 0.85rem;
          letter-spacing: 1px;
          background: rgba(255,255,255,0.3);
          backdrop-filter: blur(5px);
        }

        /* Secciones generales */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-titulo {
          font-size: 2.5rem;
          font-weight: 300;
          color: #3a2a24;
          margin-bottom: 2rem;
        }

        .text-center {
          text-align: center;
        }

        /* Vista selector - Único */
        .vista-selector {
          padding: 2rem 0 0;
        }

        .vista-wrapper {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .vista-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 2rem;
          background: none;
          border: 1px solid #d4b2a0;
          border-radius: 50px;
          color: #8b6b5c;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
        }

        .vista-btn.activo {
          background: #c17b5e;
          border-color: #c17b5e;
          color: white;
        }

        .vista-icono {
          font-size: 1.2rem;
        }

        /* Filtros */
        .filtros-section {
          padding: 2rem 0;
        }

        .filtros-wrapper {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .filtro-btn {
          background: none;
          border: 1px solid transparent;
          padding: 0.5rem 1.5rem;
          font-size: 0.9rem;
          color: #8b6b5c;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 40px;
          font-family: 'Montserrat', sans-serif;
          letter-spacing: 1px;
        }

        .filtro-btn:hover {
          color: #c17b5e;
          border-color: #c17b5e;
        }

        .filtro-btn.activo {
          background: #f9eee7;
          color: #c17b5e;
          border-color: #c17b5e;
        }

        /* Galería (mantener el resto de estilos igual) */
        .galeria-section {
          padding: 2rem 0 4rem;
        }

        .galeria-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2.5rem;
        }

        .obra-card {
          cursor: pointer;
          transition: all 0.4s ease;
        }

        .obra-card:hover {
          transform: translateY(-10px);
        }

        .obra-card-offset {
          margin-top: 2rem;
        }

        .obra-imagen-wrapper {
          position: relative;
          border-radius: 30px;
          overflow: hidden;
          aspect-ratio: 1/1;
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }

        .obra-imagen-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .obra-card:hover .obra-imagen-wrapper img {
          transform: scale(1.08);
        }

        .obra-overlay {
          position: absolute;
          inset: 0;
          background: rgba(193, 123, 94, 0.2);
          backdrop-filter: blur(2px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .obra-card:hover .obra-overlay {
          opacity: 1;
        }

        .obra-overlay span {
          color: white;
          font-size: 1rem;
          letter-spacing: 2px;
          border-bottom: 1px solid white;
          padding-bottom: 5px;
        }

        .badge-vendido,
        .badge-disponible {
          position: absolute;
          top: 10px;
          right: 10px;
          padding: 0.3rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          z-index: 2;
        }

        .badge-vendido {
          background: #c17b5e;
          color: white;
        }

        .badge-disponible {
          background: #4a7c59;
          color: white;
        }

        .obra-info {
          text-align: center;
          margin-top: 1.2rem;
        }

        .obra-info h3 {
          font-size: 1.3rem;
          color: #3a2a24;
          margin-bottom: 0.3rem;
        }

        .obra-info p {
          color: #8b6b5c;
          font-size: 0.9rem;
        }

        .obra-tecnica {
          color: #c17b5e !important;
          font-size: 0.85rem;
        }

        .precio-destacado {
          font-size: 1.2rem;
          color: #c17b5e;
          font-weight: 500;
          margin: 0.5rem 0;
        }

        .producto-boton {
          padding: 0.6rem 1.5rem;
          background: #c17b5e;
          border: none;
          border-radius: 50px;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          margin-top: 0.5rem;
        }

        .producto-boton:hover {
          background: #a5674c;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(193, 123, 94, 0.3);
        }

        /* Sobre (mantener igual) */
        .sobre-section {
          padding: 5rem 0;
          background: #fdf8f3;
        }

        .sobre-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .sobre-imagen {
          position: relative;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 25px 45px rgba(0,0,0,0.15);
        }

        .sobre-imagen img {
          width: 100%;
          height: auto;
          display: block;
        }

        .sobre-mandala {
          position: absolute;
          bottom: -20px;
          right: -20px;
          width: 80px;
          height: 80px;
          background: rgba(193, 123, 94, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: #c17b5e;
          animation: girar 25s linear infinite;
        }

        .sobre-linea {
          width: 60px;
          height: 2px;
          background: #c17b5e;
          margin-bottom: 1.5rem;
        }

        .sobre-texto-grande {
          font-size: 1.4rem;
          font-style: italic;
          color: #5d4a40;
          margin-bottom: 1.2rem;
        }

        .sobre-texto {
          color: #8b6b5c;
          margin-bottom: 1.2rem;
        }

        .sobre-firma {
          font-size: 1.8rem;
          color: #c17b5e;
          margin-top: 1.5rem;
        }

        /* Proceso */
        .proceso-section {
          padding: 5rem 0;
        }

        .proceso-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .proceso-card {
          padding: 2rem;
          background: #fdf8f3;
          border-radius: 30px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .proceso-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(193, 123, 94, 0.1);
        }

        .proceso-numero {
          font-size: 2.5rem;
          color: #c17b5e;
          opacity: 0.3;
          font-weight: 300;
          margin-bottom: 1rem;
        }

        .proceso-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #3a2a24;
        }

        .proceso-card p {
          color: #8b6b5c;
        }

        /* Testimonios */
        .testimonios-section {
          padding: 5rem 0;
          background: #f9eee7;
        }

        .testimonio-contenido {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .testimonio-icono {
          font-size: 3rem;
          color: #c17b5e;
          opacity: 0.5;
          margin-bottom: 1rem;
        }

        .testimonio-texto {
          font-size: 1.4rem;
          font-style: italic;
          color: #3a2a24;
          margin-bottom: 1.5rem;
        }

        .testimonio-autor {
          color: #8b6b5c;
        }

        /* Contacto */
        .contacto-section {
          padding: 5rem 0;
        }

        .contacto-contenido {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .contacto-contenido p {
          font-size: 1.1rem;
          color: #8b6b5c;
          margin-bottom: 2rem;
        }

        .contacto-boton {
          display: inline-block;
          padding: 1rem 2.5rem;
          background: #c17b5e;
          color: white;
          text-decoration: none;
          border-radius: 50px;
          margin-bottom: 2rem;
          transition: all 0.3s ease;
        }

        .contacto-boton:hover {
          background: #a5674c;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(193, 123, 94, 0.3);
        }

        .contacto-redes {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }

        .contacto-redes a {
          color: #8b6b5c;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contacto-redes a:hover {
          color: #c17b5e;
        }

        /* Footer */
        .footer {
          text-align: center;
          padding: 2rem;
          border-top: 1px solid rgba(193, 123, 94, 0.1);
          color: #8b6b5c;
          font-size: 0.9rem;
        }

        /* Fade-in Animation */
        .fade {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .fade.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          padding: 1rem;
          overflow-y: auto;
        }

        .modal-contenido {
          background: #fdf8f3;
          border-radius: 30px;
          max-width: 95vw;
          max-height: 90vh;
          overflow: auto;
          position: relative;
          padding: 2rem;
        }

        .modal-cerrar {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #c17b5e;
          color: white;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .modal-cerrar:hover {
          transform: scale(1.1);
        }

        .modal-contenido img {
          width: 100%;
          max-height: 50vh;
          object-fit: contain;
          border-radius: 20px;
          margin-bottom: 1rem;
        }

        .modal-info h3 {
          font-size: 1.5rem;
          color: #3a2a24;
          margin-bottom: 0.3rem;
        }

        .modal-categoria {
          color: #c17b5e;
          margin-bottom: 0.3rem;
        }

        .modal-tecnica {
          color: #8b6b5c;
          font-style: italic;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .modal-descripcion {
          color: #5d4a40;
        }

        /* Modal de compra */
        .modal-compra {
          max-width: 1000px !important;
          padding: 2rem;
        }

        .modal-compra-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .modal-compra-imagen img {
          width: 100%;
          height: auto;
          border-radius: 20px;
        }

        .modal-compra-info {
          display: flex;
          flex-direction: column;
        }

        .modal-compra-info h2 {
          font-size: 2rem;
          color: #3a2a24;
          margin-bottom: 0.5rem;
        }

        .formatos-selector {
          margin: 2rem 0;
        }

        .formatos-selector h3 {
          font-size: 1.2rem;
          color: #8b6b5c;
          margin-bottom: 1rem;
        }

        .formato-opcion {
          display: flex;
          align-items: center;
          padding: 1rem;
          margin-bottom: 0.8rem;
          border: 1px solid #d4b2a0;
          border-radius: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .formato-opcion.seleccionado {
          border-color: #c17b5e;
          background: rgba(193, 123, 94, 0.05);
          box-shadow: 0 5px 15px rgba(193, 123, 94, 0.1);
        }

        .formato-opcion input[type="radio"] {
          margin-right: 1rem;
          accent-color: #c17b5e;
          width: 18px;
          height: 18px;
        }

        .formato-info {
          flex: 1;
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 0.5rem;
          align-items: center;
        }

        .formato-nombre {
          font-weight: 600;
          color: #3a2a24;
        }

        .formato-precio {
          font-size: 1.1rem;
          color: #c17b5e;
          font-weight: 500;
        }

        .formato-descripcion {
          grid-column: 1 / -1;
          color: #8b6b5c;
          font-size: 0.9rem;
          margin-top: 0.2rem;
        }

        .modal-comprar-btn {
          padding: 1rem;
          background: #25D366;
          color: white;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 1rem 0 0.5rem;
        }

        .modal-comprar-btn:hover {
          background: #128C7E;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(37, 211, 102, 0.3);
        }

        .modal-urgencia {
          text-align: center;
          font-size: 0.85rem;
          color: #c17b5e;
          margin-top: 0.5rem;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .sobre-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .sobre-contenido {
            text-align: center;
          }

          .sobre-linea {
            margin: 1.5rem auto;
          }

          .modal-compra-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 0.8rem 0;
          }

          .nav-links {
            display: none;
          }

          .brand {
            font-size: 1.1rem;
          }

          .vista-wrapper {
            flex-direction: column;
            align-items: center;
          }

          .vista-btn {
            width: 200px;
            justify-content: center;
          }

          .obra-card-offset {
            margin-top: 0;
          }

          .galeria-grid {
            gap: 1.5rem;
          }

          .proceso-grid {
            gap: 1rem;
          }

          .testimonio-texto {
            font-size: 1.2rem;
          }

          .formato-info {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .hero-titulo {
            font-size: 2.2rem;
          }

          .hero-apellido {
            font-size: 1.8rem;
          }

          .section-titulo {
            font-size: 2rem;
          }

          .galeria-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeScreen;
