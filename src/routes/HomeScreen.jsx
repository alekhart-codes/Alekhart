import React, { useState } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import FAQSection from "./Components/FAQSection";
import { AboutScreen } from "./AboutScreen";
import ReactProjectsSlider from "./Components/ReactPRojectSlider";

export const HomeScreen = () => {
  const { usuario } = React.useContext(UsuarioContext);
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todas");

  const obras = [
    {
      id: 1,
      titulo: "Flor de la Vida",
      categoria: "Mandalas",
      imagen: "./img/Andrea/mandala1.jpg",
      descripcion: "El origen de toda forma",
      tecnica: "Acrílico sobre papel",
      year: "2024"
    },
    {
      id: 2,
      titulo: "Metatrón",
      categoria: "Mandalas",
      imagen: "./img/Andrea/mandala2.jpg",
      descripcion: "La geometría del equilibrio",
      tecnica: "Acrílico sobre papel",
      year: "2024"
    },
    {
      id: 3,
      titulo: "Semilla de la Vida",
      categoria: "Mandalas",
      imagen: "./img/Andrea/mandala3.jpg",
      descripcion: "Los siete círculos de la creación",
      tecnica: "Acrílico sobre papel",
      year: "2023"
    },
    {
      id: 4,
      titulo: "Estudio I",
      categoria: "Geometría Sagrada",
      imagen: "./img/Andrea/geo1.jpg",
      descripcion: "Flor de la vida - estudio",
      tecnica: "Tinta sobre papel",
      year: "2024"
    },
    {
      id: 5,
      titulo: "Estudio II",
      categoria: "Geometría Sagrada",
      imagen: "./img/Andrea/geo2.jpg",
      descripcion: "Metatrón - variación",
      tecnica: "Tinta sobre papel",
      year: "2024"
    },
    {
      id: 6,
      titulo: "Mural Vertical",
      categoria: "Murales",
      imagen: "./img/Andrea/mural1.jpg",
      descripcion: "Geometría en altura",
      tecnica: "Acrílico sobre muro",
      year: "2024"
    },
    {
      id: 7,
      titulo: "Muro Circular",
      categoria: "Murales",
      imagen: "./img/Andrea/mural2.jpg",
      descripcion: "Mandala a gran escala",
      tecnica: "Acrílico sobre muro",
      year: "2023"
    },
    {
      id: 8,
      titulo: "Intervención",
      categoria: "Murales",
      imagen: "./img/Andrea/mural3.jpg",
      descripcion: "Espacio corporativo",
      tecnica: "Acrílico sobre muro",
      year: "2024"
    },
    {
      id: 9,
      titulo: "Estudio III",
      categoria: "Geometría Sagrada",
      imagen: "./img/Andrea/geo3.jpg",
      descripcion: "Sacro y simétrico",
      tecnica: "Tinta sobre papel",
      year: "2023"
    }
  ];

  const categorias = ["todas", "Mandalas", "Geometría Sagrada", "Murales"];
  
  const obrasFiltradas = categoriaSeleccionada === "todas" 
    ? obras 
    : obras.filter(obra => obra.categoria === categoriaSeleccionada);

  return (
    <div className="andrea-site">
      {/* HERO - Andrea Fortoul */}
      <section className="andrea-hero">
        <div className="hero-fondo"></div>
        <div className="container">
          <div className="row min-vh-100 align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <div className="mandala-pequena">✸</div>
              <h1 className="andrea-titulo">
                Andrea
                <span className="andrea-apellido"> Fortoul</span>
              </h1>
              <div className="andrea-linea"></div>
              <p className="andrea-subtitulo">
                Mandalas · Geometría Sagrada · Murales
              </p>
              <p className="andrea-frase">
                "El centro está en todas partes"
              </p>
              <div className="andrea-badges">
                <span>+12 años</span>
                <span>Arte original</span>
                <span>Murales en vivo</span>
              </div>
              <a href="#galeria" className="andrea-boton">
                Explorar obra
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FILTROS */}
      <section className="andrea-filtros">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="filtros-wrapper">
                {categorias.map((cat) => (
                  <button
                    key={cat}
                    className={`filtro-btn ${categoriaSeleccionada === cat ? 'activo' : ''}`}
                    onClick={() => setCategoriaSeleccionada(cat)}
                  >
                    {cat === "todas" ? "Todo" : cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="andrea-galeria">
        <div className="container-fluid px-4">
          <div className="row g-4">
            {obrasFiltradas.map((obra, index) => (
              <div 
                key={obra.id} 
                className={`col-lg-4 col-md-6 ${index % 3 === 1 ? 'mt-5' : ''}`}
              >
                <div 
                  className="obra-card"
                  onClick={() => setImagenSeleccionada(obra)}
                >
                  <div className="obra-imagen-wrapper">
                    <img src={obra.imagen} alt={obra.titulo} />
                    <div className="obra-overlay">
                      <span>Ver más</span>
                    </div>
                  </div>
                  <div className="obra-info">
                    <h3>{obra.titulo}</h3>
                    <p>{obra.categoria}</p>
                    <p className="obra-tecnica">{obra.tecnica} · {obra.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE ANDREA */}
      <section className="andrea-sobre">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="sobre-imagen">
                <img src="./img/Andrea/retrato.jpg" alt="Andrea Fortoul" />
                <div className="sobre-mandala">✦</div>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <h2>Geometría del alma</h2>
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
      <section className="andrea-proceso">
        <div className="container">
          <h2 className="text-center">Cómo nace una obra</h2>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="proceso-card">
                <div className="proceso-numero">01</div>
                <h3>Intención</h3>
                <p>Una pregunta, un espacio, una persona. Todo empieza con escuchar qué necesita nacer.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="proceso-card">
                <div className="proceso-numero">02</div>
                <h3>Geometría</h3>
                <p>La flor de la vida, el metatrón, la semilla. Estructuras antiguas que ordenan el caos.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="proceso-card">
                <div className="proceso-numero">03</div>
                <h3>Color</h3>
                <p>El color no decora. Activa. Cada paleta es una vibración que despierta algo en quien mira.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="andrea-testimonios">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <div className="testimonio-icono">✦</div>
              <p className="testimonio-texto">
                "El mural que Andrea pintó en nuestra oficina no es solo una pared hermosa. Es un lugar donde la gente se detiene, respira y vuelve a empezar. Transformó el espacio por completo."
              </p>
              <p className="testimonio-autor">— Laura, Space Cowork</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="andrea-contacto">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>¿Tu espacio necesita un mandala?</h2>
              <p className="mb-5">
                Murales, comisiones, obra original. Conversemos.
              </p>
              <a href="mailto:andrea@email.com" className="andrea-boton contacto-boton">
                andrea@email.com
              </a>
              <div className="contacto-redes">
                <a href="#">IG</a>
                <a href="#">FB</a>
                <a href="#">Pinterest</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
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

      {/* ESTILOS */}
      <style jsx>{`
        .andrea-site {
          font-family: 'Cormorant Garamond', 'Georgia', serif;
          color: #3a2a24;
          overflow-x: hidden;
        }
        
        /* HERO */
        .andrea-hero {
          position: relative;
          background: linear-gradient(135deg, #fdf8f3 0%, #f9eee7 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
        }
        
        .hero-fondo {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(circle at 20% 30%, rgba(210, 150, 120, 0.1) 0%, transparent 30%),
                            radial-gradient(circle at 80% 70%, rgba(180, 120, 90, 0.1) 0%, transparent 40%);
          pointer-events: none;
        }
        
        .mandala-pequena {
          font-size: 2rem;
          color: #c17b5e;
          margin-bottom: 1rem;
          animation: girar 20s linear infinite;
        }
        
        @keyframes girar {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .andrea-titulo {
          font-size: clamp(2.8rem, 8vw, 5rem);
          font-weight: 300;
          color: #3a2a24;
          margin-bottom: 0.5rem;
          line-height: 1.1;
        }
        
        .andrea-apellido {
          font-weight: 500;
          color: #c17b5e;
          display: block;
          font-size: clamp(2.2rem, 7vw, 4rem);
        }
        
        .andrea-linea {
          width: 80px;
          height: 1px;
          background: #c17b5e;
          margin: 1.2rem auto;
          opacity: 0.5;
        }
        
        .andrea-subtitulo {
          font-size: clamp(1rem, 3.5vw, 1.3rem);
          letter-spacing: 3px;
          color: #8b6b5c;
          margin-bottom: 1.2rem;
          text-transform: uppercase;
        }
        
        .andrea-frase {
          font-size: clamp(1.3rem, 5vw, 1.8rem);
          font-style: italic;
          color: #5d4a40;
          margin-bottom: 1.8rem;
          padding: 0 15px;
        }
        
        .andrea-badges {
          display: flex;
          justify-content: center;
          gap: 0.8rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        
        .andrea-badges span {
          padding: 0.4rem 1.2rem;
          border: 1px solid #d4b2a0;
          border-radius: 40px;
          color: #5d4a40;
          font-size: 0.85rem;
          letter-spacing: 1px;
          background: rgba(255,255,255,0.3);
          backdrop-filter: blur(5px);
        }
        
        .andrea-boton {
          display: inline-block;
          padding: 1rem 2.5rem;
          background: #c17b5e;
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-size: 1.1rem;
          letter-spacing: 2px;
          transition: all 0.3s ease;
          border: none;
          width: 100%;
          max-width: 280px;
          margin: 0 auto;
        }
        
        .andrea-boton:hover {
          background: #a5674c;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(193, 123, 94, 0.3);
        }
        
        /* FILTROS */
        .andrea-filtros {
          padding: 2rem 0;
          background: white;
        }
        
        .filtros-wrapper {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        
        .filtro-btn {
          background: none;
          border: none;
          padding: 0.5rem 1.2rem;
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
        }
        
        .filtro-btn.activo {
          background: #f9eee7;
          color: #c17b5e;
        }
        
        /* GALERÍA */
        .andrea-galeria {
          padding: 2rem 0 4rem;
          background: white;
        }
        
        .obra-card {
          cursor: pointer;
          transition: all 0.4s ease;
        }
        
        .obra-card:hover {
          transform: translateY(-10px);
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
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
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
          margin-bottom: 0.3rem;
          font-size: 0.9rem;
        }
        
        .obra-tecnica {
          font-size: 0.85rem;
          color: #c17b5e !important;
        }
        
        /* SOBRE */
        .andrea-sobre {
          padding: 4rem 0;
          background: #fdf8f3;
        }
        
        .sobre-imagen {
          position: relative;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 25px 45px rgba(0,0,0,0.15);
          margin-bottom: 2rem;
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
        
        .andrea-sobre h2 {
          font-size: 2.5rem;
          font-weight: 300;
          color: #3a2a24;
          margin-bottom: 1rem;
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
          line-height: 1.5;
        }
        
        .sobre-texto {
          font-size: 1rem;
          color: #8b6b5c;
          margin-bottom: 1.2rem;
          line-height: 1.6;
        }
        
        .sobre-firma {
          font-size: 1.8rem;
          color: #c17b5e;
          margin-top: 1.5rem;
          font-family: 'Cormorant Garamond', serif;
        }
        
        /* PROCESO */
        .andrea-proceso {
          padding: 4rem 0;
          background: white;
        }
        
        .andrea-proceso h2 {
          font-size: 2.2rem;
          font-weight: 300;
          color: #3a2a24;
        }
        
        .proceso-card {
          text-align: center;
          padding: 1.5rem;
          background: #fdf8f3;
          border-radius: 30px;
          height: 100%;
          transition: transform 0.3s ease;
          margin-bottom: 1rem;
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
          margin-bottom: 0.8rem;
        }
        
        .proceso-card h3 {
          font-size: 1.5rem;
          color: #3a2a24;
          margin-bottom: 0.8rem;
        }
        
        .proceso-card p {
          color: #8b6b5c;
          font-size: 1rem;
          line-height: 1.5;
        }
        
        /* TESTIMONIOS */
        .andrea-testimonios {
          padding: 4rem 0;
          background: #f9eee7;
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
          line-height: 1.5;
          margin-bottom: 1.5rem;
          padding: 0 15px;
        }
        
        .testimonio-autor {
          font-size: 1rem;
          color: #8b6b5c;
        }
        
        /* CONTACTO */
        .andrea-contacto {
          padding: 4rem 0;
          background: white;
        }
        
        .andrea-contacto h2 {
          font-size: 2rem;
          font-weight: 300;
          color: #3a2a24;
          margin-bottom: 1rem;
        }
        
        .andrea-contacto p {
          font-size: 1.1rem;
          color: #8b6b5c;
          margin-bottom: 2rem;
        }
        
        .contacto-boton {
          display: inline-block;
          width: 100%;
          max-width: 280px;
          margin: 0 auto 2rem;
        }
        
        .contacto-redes {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }
        
        .contacto-redes a {
          color: #8b6b5c;
          text-decoration: none;
          font-size: 1rem;
          letter-spacing: 1px;
          transition: color 0.3s ease;
        }
        
        .contacto-redes a:hover {
          color: #c17b5e;
        }
        
        /* MODAL */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.95);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          padding: 1rem;
        }
        
        .modal-contenido {
          background: #fdf8f3;
          border-radius: 30px;
          max-width: 95vw;
          max-height: 90vh;
          overflow: auto;
          position: relative;
          padding: 1.5rem;
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
          z-index: 10;
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
          font-size: 1rem;
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
          font-size: 1rem;
        }
      `}</style>
    </div>
  );
};
