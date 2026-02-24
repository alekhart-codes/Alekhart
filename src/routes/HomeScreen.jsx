import React, { useState } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import FAQSection from "./Components/FAQSection";
import { AboutScreen } from "./AboutScreen";
import ReactProjectsSlider from "./Components/ReactPRojectSlider";

export const AndreaHome = () => {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  const obras = [
    {
      id: 1,
      titulo: "Mandalas",
      categoria: "Serie Mandalas",
      imagen: "/img/andrea/mandala1.jpg",
      descripcion: "Geometría sagrada en color"
    },
    {
      id: 2,
      titulo: "Mandalas",
      categoria: "Serie Mandalas",
      imagen: "/img/andrea/mandala2.jpg",
      descripcion: "Simetría y vibración"
    },
    {
      id: 3,
      titulo: "Mandalas",
      categoria: "Serie Mandalas",
      imagen: "/img/andrea/mandala3.jpg",
      descripcion: "Centro y expansión"
    },
    {
      id: 4,
      titulo: "Geometría Sagrada",
      categoria: "Estudios",
      imagen: "/img/andrea/geo1.jpg",
      descripcion: "Flor de la vida"
    },
    {
      id: 5,
      titulo: "Geometría Sagrada",
      categoria: "Estudios",
      imagen: "/img/andrea/geo2.jpg",
      descripcion: "Metatrón"
    },
    {
      id: 6,
      titulo: "Murales",
      categoria: "Arte en espacios",
      imagen: "/img/andrea/mural1.jpg",
      descripcion: "Mural en vivo"
    },
    {
      id: 7,
      titulo: "Murales",
      categoria: "Arte en espacios",
      imagen: "/img/andrea/mural2.jpg",
      descripcion: "Pared y color"
    },
    {
      id: 8,
      titulo: "Murales",
      categoria: "Arte en espacios",
      imagen: "/img/andrea/mural3.jpg",
      descripcion: "Geometría a gran escala"
    },
    {
      id: 9,
      titulo: "Geometría Sagrada",
      categoria: "Estudios",
      imagen: "/img/andrea/geo3.jpg",
      descripcion: "Sacro y simétrico"
    }
  ];

  return (
    <div>
      {/* HERO - Andrea */}
      <section className="hero-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img
                className="img-codes"
                src="../img/Codes/Codes.png"
                alt="codes"
              />
              
              <div className="mb-3 text-uppercase fw-bold" style={{ letterSpacing: '3px', color: '#0d6efd', fontSize: '0.85rem' }}>
                ARTE · MANDALAS · GEOMETRÍA SAGRADA
              </div>
              
              <h1 className="display-4 font-weight-bold mt-3">
                Andrea <span className="text-primary">[Apellido]</span>
              </h1>
              
              <p className="lead mt-4 mb-4"
                style={{
                  color: '#c9bebe',
                  fontSize: '1.3rem',
                  maxWidth: '800px',
                  margin: '0 auto',
                  fontWeight: '500'
                }}>
                <strong>Mandalas, geometría sagrada y murales</strong> que transforman espacios y conectan con el centro.
              </p>
              
              {/* Badges */}
              <div className="d-flex justify-content-center flex-wrap gap-3 mb-5">
                <span className="badge bg-dark text-white px-4 py-2">+10 años</span>
                <span className="badge bg-dark text-white px-4 py-2">Murales en vivo</span>
                <span className="badge bg-dark text-white px-4 py-2">Arte original</span>
              </div>

              <a
                href="#galeria"
                className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow-sm hover-scale"
                style={{ fontSize: '1.2rem' }}
              >
                Ver obra →
              </a>
              
              <p className="mt-4 text-muted small" style={{ maxWidth: '600px', margin: '20px auto 0' }}>
                Cada pieza es original, pintada a mano.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="background-image-container">
        
        {/* SECCIÓN - Obra destacada */}
        <section className="marketing-section py-5">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-md-10 col-lg-8 text-center">
                <h2 className="display-5 font-weight-bold mb-4" style={{ color: '#ffffff' }}>
                  Obra <span className="text-primary">reciente</span>
                </h2>
                <p className="lead" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem' }}>
                  Mandalas, estudios de geometría sagrada y murales de gran formato.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GALERÍA - Grid de obras */}
        <section className="py-5">
          <div className="container">
            <div className="row">
              {obras.map((obra) => (
                <div key={obra.id} className="col-md-6 col-lg-4 mb-4">
                  <div 
                    className="card h-100 border-0 shadow-sm hover-card"
                    style={{ background: '#151515', cursor: 'pointer' }}
                    onClick={() => setImagenSeleccionada(obra)}
                  >
                    <img 
                      src={obra.imagen} 
                      className="card-img-top" 
                      alt={obra.titulo}
                      style={{ aspectRatio: '1/1', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                      <h5 className="card-title text-white">{obra.titulo}</h5>
                      <p className="card-text text-white-50">{obra.categoria}</p>
                      <p className="card-text text-white-50 small">{obra.descripcion}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN - Sobre su arte (como la sección de criterios) */}
        <div className="container mt-5 pt-4">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h2 className="h3 font-weight-bold" style={{ color: '#212529' }}>Geometría que respira</h2>
              <p style={{ color: '#6c757d' }}>Arte que nace del centro</p>
            </div>
            
            <div className="col-md-8 mx-auto mb-4">
              <div className="card border-0 shadow-sm p-4 text-center" style={{ background: '#f8f9fa' }}>
                <p className="lead" style={{ fontSize: '1.2rem', color: '#495057', fontStyle: 'italic' }}>
                  "Cada mandala es un viaje al centro. Cada mural, un diálogo con el espacio. 
                  La geometría sagrada no es solo forma: es la estructura invisible de lo que sentimos."
                </p>
                <p className="mt-3 fw-bold" style={{ color: '#0d6efd' }}>— Andrea</p>
              </div>
            </div>
          </div>
        </div>

        {/* MODAL - Para ver imagen grande */}
        {imagenSeleccionada && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.9)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1000,
              padding: '20px'
            }}
            onClick={() => setImagenSeleccionada(null)}
          >
            <div 
              style={{
                position: 'relative',
                maxWidth: '90vw',
                maxHeight: '90vh',
                backgroundColor: 'white',
                borderRadius: '20px',
                padding: '20px'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer'
                }}
                onClick={() => setImagenSeleccionada(null)}
              >
                ×
              </button>
              <img 
                src={imagenSeleccionada.imagen} 
                alt={imagenSeleccionada.titulo}
                style={{
                  maxWidth: '100%',
                  maxHeight: '70vh',
                  objectFit: 'contain'
                }}
              />
              <div style={{ textAlign: 'center', padding: '20px 0 10px' }}>
                <h4 style={{ color: '#0d6efd' }}>{imagenSeleccionada.titulo}</h4>
                <p style={{ color: '#6c757d' }}>{imagenSeleccionada.descripcion}</p>
              </div>
            </div>
          </div>
        )}

        {/* ESTILOS - Los mismos de HomeScreen */}
        <style jsx>{`
          .hover-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .hover-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 1rem 2rem rgba(0,0,0,0.3) !important;
          }
          .hover-scale {
            transition: transform 0.3s ease;
          }
          .hover-scale:hover {
            transform: scale(1.05);
          }
          .badge {
            font-size: 0.9rem;
            font-weight: 500;
          }
        `}</style>
      </div>
    </div>
  );
};
