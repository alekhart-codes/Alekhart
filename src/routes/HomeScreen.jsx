import React, { useState } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import FAQSection from "./Components/FAQSection";
import { AboutScreen } from "./AboutScreen";
import ReactProjectsSlider from "./Components/ReactPRojectSlider";

export const HomeScreen = () => {
  const { usuario } = React.useContext(UsuarioContext);
  const [formEnviado, setFormEnviado] = useState(false);
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  const obras = [
    {
      id: 1,
      titulo: "Mandalas",
      categoria: "Serie Mandalas",
      imagen: "/img/andrea/mandala1.jpg",
      descripcion: "Geometría sagrada en color",
      tecnica: "Acrílico sobre papel"
    },
    {
      id: 2,
      titulo: "Mandalas",
      categoria: "Serie Mandalas",
      imagen: "/img/andrea/mandala2.jpg",
      descripcion: "Simetría y vibración",
      tecnica: "Acrílico sobre papel"
    },
    {
      id: 3,
      titulo: "Mandalas",
      categoria: "Serie Mandalas",
      imagen: "/img/andrea/mandala3.jpg",
      descripcion: "Centro y expansión",
      tecnica: "Acrílico sobre papel"
    },
    {
      id: 4,
      titulo: "Geometría Sagrada",
      categoria: "Estudios",
      imagen: "/img/andrea/geo1.jpg",
      descripcion: "Flor de la vida",
      tecnica: "Tinta y acuarela"
    },
    {
      id: 5,
      titulo: "Geometría Sagrada",
      categoria: "Estudios",
      imagen: "/img/andrea/geo2.jpg",
      descripcion: "Metatrón",
      tecnica: "Tinta y acuarela"
    },
    {
      id: 6,
      titulo: "Murales",
      categoria: "Arte en espacios",
      imagen: "/img/andrea/mural1.jpg",
      descripcion: "Mural en vivo",
      tecnica: "Acrílico sobre muro"
    },
    {
      id: 7,
      titulo: "Murales",
      categoria: "Arte en espacios",
      imagen: "/img/andrea/mural2.jpg",
      descripcion: "Pared y color",
      tecnica: "Acrílico sobre muro"
    },
    {
      id: 8,
      titulo: "Murales",
      categoria: "Arte en espacios",
      imagen: "/img/andrea/mural3.jpg",
      descripcion: "Geometría a gran escala",
      tecnica: "Acrílico sobre muro"
    },
    {
      id: 9,
      titulo: "Geometría Sagrada",
      categoria: "Estudios",
      imagen: "/img/andrea/geo3.jpg",
      descripcion: "Sacro y simétrico",
      tecnica: "Tinta y acuarela"
    }
  ];

  return (
    <div>
      {/* HERO - Andrea (con su estilo pero misma estructura) */}
      <section className="hero-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* Mantenemos el logo pero le damos un glow suave */}
              <img
                className="img-codes"
                src="../img/Codes/Codes.png"
                alt="codes"
                style={{ filter: 'drop-shadow(0 0 10px rgba(183, 92, 75, 0.3))' }}
              />
              
              <div className="mb-3 text-uppercase fw-bold" style={{ 
                letterSpacing: '3px', 
                color: '#b75c4b', // Terracota en vez de azul
                fontSize: '0.85rem',
                textShadow: '0 0 5px rgba(183, 92, 75, 0.2)'
              }}>
                ARTE · MANDALAS · GEOMETRÍA SAGRADA
              </div>
              
              <h1 className="display-4 font-weight-bold mt-3">
                Andrea <span style={{ color: '#b75c4b' }}>[Apellido]</span>
              </h1>
              
              <p className="lead mt-4 mb-4"
                style={{
                  color: '#c9bebe',
                  fontSize: '1.3rem',
                  maxWidth: '800px',
                  margin: '0 auto',
                  fontWeight: '400',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: 'italic'
                }}>
                <strong style={{ fontWeight: '600' }}>Mandalas, geometría sagrada y murales</strong> que transforman espacios y conectan con el centro.
              </p>
              
              {/* Badges con estilo suave */}
              <div className="d-flex justify-content-center flex-wrap gap-3 mb-5">
                <span className="badge px-4 py-2" style={{ 
                  background: 'rgba(183, 92, 75, 0.1)', 
                  color: '#b75c4b',
                  border: '1px solid rgba(183, 92, 75, 0.3)',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>+10 años</span>
                <span className="badge px-4 py-2" style={{ 
                  background: 'rgba(183, 92, 75, 0.1)', 
                  color: '#b75c4b',
                  border: '1px solid rgba(183, 92, 75, 0.3)',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>Murales en vivo</span>
                <span className="badge px-4 py-2" style={{ 
                  background: 'rgba(183, 92, 75, 0.1)', 
                  color: '#b75c4b',
                  border: '1px solid rgba(183, 92, 75, 0.3)',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>Arte original</span>
              </div>

              <a
                href="#galeria"
                className="btn btn-lg px-5 py-3 rounded-pill shadow-sm hover-scale"
                style={{ 
                  fontSize: '1.2rem',
                  background: '#b75c4b',
                  border: 'none',
                  color: 'white',
                  boxShadow: '0 4px 15px rgba(183, 92, 75, 0.3)'
                }}
              >
                Ver obra →
              </a>
              
              <p className="mt-4 small" style={{ 
                maxWidth: '600px', 
                margin: '20px auto 0',
                color: '#8a7a6c'
              }}>
                Cada pieza es original, pintada a mano.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="background-image-container">
        
        {/* SECCIÓN - Proceso creativo (con estilo cálido) */}
        <section className="py-5" style={{ 
          background: 'linear-gradient(135deg, #faf0e6 0%, #fff5f0 100%)'
        }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center mb-5">
                <span className="badge px-3 py-2 mb-3" style={{ 
                  background: 'rgba(183, 92, 75, 0.1)',
                  color: '#b75c4b',
                  border: '1px solid rgba(183, 92, 75, 0.3)',
                  fontSize: '0.9rem'
                }}>PROCESO CREATIVO</span>
                <h2 className="display-5 font-weight-bold mb-4" style={{ 
                  color: '#4a4a4a',
                  fontFamily: "'Cormorant Garamond', serif"
                }}>
                  Geometría que <span style={{ color: '#b75c4b' }}>nace del centro</span>
                </h2>
              </div>
            </div>
            
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="p-5 rounded-4 shadow-sm" style={{ 
                  background: 'white',
                  borderLeft: '4px solid #b75c4b',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Detalle decorativo como mandala sutil */}
                  <div style={{
                    position: 'absolute',
                    bottom: '-30px',
                    right: '-30px',
                    width: '150px',
                    height: '150px',
                    background: 'radial-gradient(circle, rgba(183,92,75,0.05) 0%, transparent 70%)',
                    borderRadius: '50%',
                    pointerEvents: 'none'
                  }}></div>
                  
                  <p className="lead mb-4" style={{ 
                    fontSize: '1.25rem', 
                    color: '#4a4a4a', 
                    lineHeight: '1.7',
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: 'italic'
                  }}>
                    Cada mandala comienza con un punto. Desde ahí, la geometría sagrada guía la expansión: círculos, triángulos, cuadrados que se repiten y transforman. No es solo dibujo, es una meditación en movimiento.
                  </p>
                  <p className="mb-4" style={{ 
                    fontSize: '1.1rem', 
                    color: '#6b5b4e'
                  }}>
                    Los murales llevan esa misma geometría a gran escala. Una pared deja de ser pared y se convierte en un espacio con vibración propia. La gente no solo mira, habita.
                  </p>
                  <p className="fw-bold mb-0" style={{ 
                    fontSize: '1.1rem', 
                    color: '#b75c4b'
                  }}>
                    El color no es decoración. Es estructura. Es emoción. Es lo que hace que una forma cobre vida.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLOQUE DE TÉCNICAS - Así crea (con cards suaves) */}
        <section className="py-5" style={{ background: '#ffffff' }}>
          <div className="container">
            <div className="row mb-5 text-center">
              <div className="col-12">
                <h2 className="display-5 font-weight-bold" style={{ 
                  color: '#4a4a4a',
                  fontFamily: "'Cormorant Garamond', serif"
                }}>
                  Así <span style={{ color: '#b75c4b' }}>crea</span>
                </h2>
              </div>
            </div>
            
            <div className="row g-4 justify-content-center">
              {[
                { icon: "🎯", title: "Intención", text: "Cada obra comienza con una pregunta: ¿qué necesita este espacio, esta persona, este momento?" },
                { icon: "✸", title: "Geometría", text: "La forma sagrada guía la estructura: flor de la vida, metatrón, semilla de la vida." },
                { icon: "🎨", title: "Color", text: "Paletas que vibran juntas. El color no decora, activa." },
                { icon: "🖌️", title: "Técnica", text: "Acrílico, tinta, acuarela, mural. Cada material pide un trato distinto." },
                { icon: "✨", title: "Resonancia", text: "La obra termina, pero la vibración sigue. Quien la mira, ya es parte." }
              ].map((item, i) => (
                <div key={i} className="col-md-6 col-lg-4 mb-3">
                  <div className="card h-100 border-0 shadow-sm p-3 text-center" style={{
                    background: '#faf0e6',
                    borderRadius: '20px',
                    transition: 'all 0.3s ease'
                  }}>
                    <div className="card-body">
                      <div className="display-4 mb-3" style={{ color: '#b75c4b' }}>{item.icon}</div>
                      <h4 className="h5 fw-bold mb-3" style={{ color: '#4a4a4a' }}>{item.title}</h4>
                      <p className="mb-0" style={{ color: '#6b5b4e' }}>{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALERÍA - Con imágenes que respiran */}
        <section className="py-5" style={{ background: '#faf0e6' }}>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h2 className="display-5 font-weight-bold" style={{ 
                  color: '#4a4a4a',
                  fontFamily: "'Cormorant Garamond', serif"
                }}>
                  Obra <span style={{ color: '#b75c4b' }}>reciente</span>
                </h2>
              </div>
            </div>
            
            <div className="row g-4">
              {obras.map((obra) => (
                <div key={obra.id} className="col-md-6 col-lg-4">
                  <div 
                    className="card h-100 border-0"
                    style={{ 
                      background: 'transparent',
                      cursor: 'pointer'
                    }}
                    onClick={() => setImagenSeleccionada(obra)}
                  >
                    <div style={{
                      borderRadius: '30px',
                      overflow: 'hidden',
                      aspectRatio: '1/1',
                      boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                      border: '5px solid white',
                      transition: 'transform 0.3s ease'
                    }}
                    className="hover-scale"
                    >
                      <img 
                        src={obra.imagen} 
                        className="w-100 h-100"
                        alt={obra.titulo}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="card-body px-2 text-center">
                      <h5 className="card-title mb-1" style={{ 
                        color: '#b75c4b',
                        fontSize: '1.2rem',
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: '600'
                      }}>{obra.titulo}</h5>
                      <p className="mb-1" style={{ 
                        color: '#8a7a6c',
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}>{obra.categoria}</p>
                      <p style={{ 
                        color: '#6b5b4e',
                        fontSize: '0.9rem',
                        fontStyle: 'italic'
                      }}>{obra.descripcion}</p>
                      <p style={{ 
                        color: '#b75c4b',
                        fontSize: '0.8rem',
                        opacity: '0.8'
                      }}>{obra.tecnica}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN - Testimonio (con estilo cálido) */}
        <section className="py-5" style={{ background: '#4a4a4a' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 text-center">
                <div style={{
                  fontSize: '3rem',
                  color: '#b75c4b',
                  opacity: '0.5',
                  marginBottom: '1rem'
                }}>✦</div>
                <p className="text-white" style={{ 
                  fontSize: '1.3rem', 
                  fontStyle: 'italic',
                  fontFamily: "'Cormorant Garamond', serif",
                  lineHeight: '1.8'
                }}>
                  "El mural transformó la oficina por completo. La gente se para a mirarlo, a sacar fotos. Ya no es un espacio de trabajo, es un espacio con alma."
                </p>
                <p style={{ color: '#d4a59a', marginTop: '2rem' }}>
                  — Cliente, Mural corporativo
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MODAL - Para ver imagen grande con estilo Andrea */}
        {imagenSeleccionada && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.95)',
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
                backgroundColor: '#faf0e6',
                borderRadius: '40px',
                padding: '25px',
                border: '5px solid white'
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
                  backgroundColor: '#b75c4b',
                  color: 'white',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
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
                  objectFit: 'contain',
                  borderRadius: '20px'
                }}
              />
              <div style={{ textAlign: 'center', padding: '20px 0 10px' }}>
                <h4 style={{ 
                  color: '#b75c4b',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.8rem',
                  marginBottom: '5px'
                }}>{imagenSeleccionada.titulo}</h4>
                <p style={{ color: '#8a7a6c' }}>{imagenSeleccionada.categoria}</p>
                <p style={{ color: '#6b5b4e', fontStyle: 'italic' }}>{imagenSeleccionada.descripcion}</p>
                <p style={{ color: '#b75c4b', fontSize: '0.9rem' }}>{imagenSeleccionada.tecnica}</p>
              </div>
            </div>
          </div>
        )}

        {/* ESTILOS - Manteniendo hover-scale original y añadiendo algunos propios */}
        <style jsx>{`
          .hover-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .hover-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 1rem 2rem rgba(183, 92, 75, 0.2) !important;
          }
          .hover-scale {
            transition: transform 0.3s ease;
          }
          .hover-scale:hover {
            transform: scale(1.02);
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
