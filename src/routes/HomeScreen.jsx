import React, { useState } from "react";

export const AndreaHome = () => {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  // Aquí van las URLs de las imágenes de Andrea
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
    <div className="andrea-container">
      {/* HERO - Suave como ella */}
      <section className="hero-andrea">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="andrea-titulo">
                Andrea
                <span className="andrea-apellido"> [Apellido]</span>
              </h1>
              <div className="andrea-subtitulo">
                <span className="separador">✦</span>
                Mandalas · Geometría Sagrada · Murales
                <span className="separador">✦</span>
              </div>
              <p className="andrea-descripcion">
                Color, simetría y vibración. Arte que nace del centro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA PRINCIPAL - Imágenes redondeadas */}
      <section className="galeria-andrea">
        <div className="container">
          <div className="row">
            {obras.map((obra) => (
              <div key={obra.id} className="col-md-6 col-lg-4 mb-5">
                <div className="obra-card">
                  <div className="obra-imagen-wrapper">
                    <img
                      src={obra.imagen}
                      alt={obra.descripcion}
                      className="obra-imagen"
                      onClick={() => setImagenSeleccionada(obra)}
                    />
                  </div>
                  <div className="obra-info">
                    <h3 className="obra-titulo">{obra.titulo}</h3>
                    <p className="obra-categoria">{obra.categoria}</p>
                    <p className="obra-descripcion">{obra.descripcion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN "SOBRE SU ARTE" */}
      <section className="sobre-andrea">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="seccion-titulo">
                Geometría que respira
              </h2>
              <p className="seccion-texto">
                Cada mandala es un viaje al centro. Cada mural, un diálogo con el espacio.
                La geometría sagrada no es solo forma: es la estructura invisible de lo que sentimos.
              </p>
              <p className="seccion-firma">
                — Andrea
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL PARA VER IMAGEN GRANDE (si hace clic) */}
      {imagenSeleccionada && (
        <div className="modal-overlay" onClick={() => setImagenSeleccionada(null)}>
          <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            <button className="modal-cerrar" onClick={() => setImagenSeleccionada(null)}>×</button>
            <img
              src={imagenSeleccionada.imagen}
              alt={imagenSeleccionada.descripcion}
              className="modal-imagen"
            />
            <div className="modal-info">
              <h4>{imagenSeleccionada.titulo}</h4>
              <p>{imagenSeleccionada.descripcion}</p>
            </div>
          </div>
        </div>
      )}

      {/* ESTILOS */}
      <style jsx>{`
        .andrea-container {
          background-color: #faf7f2;
          font-family: 'Cormorant Garamond', 'Georgia', serif;
          min-height: 100vh;
        }

        /* HERO */
        .hero-andrea {
          padding: 80px 0 40px;
          background: linear-gradient(180deg, #ffffff 0%, #faf7f2 100%);
        }

        .andrea-titulo {
          font-size: 4rem;
          font-weight: 300;
          color: #4a4a4a;
          margin-bottom: 0.5rem;
          letter-spacing: 2px;
        }

        .andrea-apellido {
          font-weight: 500;
          color: #b75c4b;
        }

        .andrea-subtitulo {
          font-size: 1.2rem;
          color: #8a7a6c;
          margin: 20px 0;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 3px;
        }

        .separador {
          color: #d4a59a;
          margin: 0 15px;
          font-size: 1rem;
        }

        .andrea-descripcion {
          font-size: 1.3rem;
          color: #6b5b4e;
          max-width: 600px;
          margin: 0 auto;
          font-style: italic;
        }

        /* GALERÍA */
        .galeria-andrea {
          padding: 60px 0;
        }

        .obra-card {
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .obra-card:hover {
          transform: translateY(-5px);
        }

        .obra-imagen-wrapper {
          border-radius: 30px;
          overflow: hidden;
          aspect-ratio: 1/1;
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
          border: 1px solid rgba(255,255,255,0.5);
        }

        .obra-imagen {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .obra-card:hover .obra-imagen {
          transform: scale(1.05);
        }

        .obra-info {
          padding: 20px 10px 0;
          text-align: center;
        }

        .obra-titulo {
          font-size: 1.3rem;
          color: #b75c4b;
          margin-bottom: 5px;
          font-weight: 400;
        }

        .obra-categoria {
          font-size: 0.9rem;
          color: #8a7a6c;
          margin-bottom: 8px;
          font-family: 'Montserrat', sans-serif;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .obra-descripcion {
          font-size: 1rem;
          color: #6b5b4e;
          font-style: italic;
        }

        /* SECCIÓN SOBRE */
        .sobre-andrea {
          padding: 80px 0;
          background-color: #ffffff;
          border-top: 1px solid #e8ddd2;
          border-bottom: 1px solid #e8ddd2;
        }

        .seccion-titulo {
          font-size: 2.5rem;
          color: #4a4a4a;
          margin-bottom: 30px;
          font-weight: 300;
          letter-spacing: 2px;
        }

        .seccion-texto {
          font-size: 1.3rem;
          color: #6b5b4e;
          line-height: 1.8;
          max-width: 700px;
          margin: 0 auto 30px;
          font-style: italic;
        }

        .seccion-firma {
          font-size: 1.5rem;
          color: #b75c4b;
          font-family: 'Cormorant Garamond', serif;
        }

        /* MODAL */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0,0,0,0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          padding: 20px;
        }

        .modal-contenido {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          background-color: white;
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .modal-cerrar {
          position: absolute;
          top: -15px;
          right: -15px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #b75c4b;
          color: white;
          border: none;
          font-size: 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 10px rgba(0,0,0,0.2);
          z-index: 1001;
        }

        .modal-imagen {
          max-width: 100%;
          max-height: 70vh;
          object-fit: contain;
          border-radius: 15px;
        }

        .modal-info {
          text-align: center;
          padding: 20px 0 10px;
        }

        .modal-info h4 {
          color: #b75c4b;
          margin-bottom: 5px;
          font-size: 1.5rem;
        }

        .modal-info p {
          color: #6b5b4e;
          font-style: italic;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .andrea-titulo {
            font-size: 2.5rem;
          }
          .andrea-subtitulo {
            font-size: 1rem;
            letter-spacing: 2px;
          }
          .separador {
            margin: 0 5px;
          }
          .obra-imagen-wrapper {
            border-radius: 20px;
          }
        }
      `}</style>
    </div>
  );
};
