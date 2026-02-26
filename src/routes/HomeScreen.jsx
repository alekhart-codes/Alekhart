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
  const [carrito, setCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [notificacion, setNotificacion] = useState(null);
  const [productosConPrecioVisible, setProductosConPrecioVisible] = useState({});
  const fadeRefs = useRef([]);

  // Número de WhatsApp
  const WHATSAPP_NUMBER = "569XXXXXXXX";

  // Cargar carrito desde localStorage
  useEffect(() => {
    const carritoGuardado = localStorage.getItem('carritoAlekhArt');
    if (carritoGuardado) {
      setCarrito(JSON.parse(carritoGuardado));
    }
  }, []);

  // Guardar carrito en localStorage
  useEffect(() => {
    localStorage.setItem('carritoAlekhArt', JSON.stringify(carrito));
  }, [carrito]);

  // FORZAR VISIBILIDAD INICIAL
  useEffect(() => {
    // Forzar que las obras sean visibles desde el inicio
    setTimeout(() => {
      document.querySelectorAll('.obra-card').forEach(el => {
        el.style.opacity = '1';
        el.style.visibility = 'visible';
        el.style.display = 'block';
      });
    }, 100);
  }, []);

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

  // ===== FUNCIÓN DE ORDENAMIENTO =====
  const elementosOrdenados = [...elementosFiltrados].sort((a, b) => {
    // Murales siempre al final
    if (a.categoria === "Murales" && b.categoria !== "Murales") return 1;
    if (b.categoria === "Murales" && a.categoria !== "Murales") return -1;

    // Para productos de tienda
    if (modoVista === "tienda") {
      const aDisponible = a.formatos ? Object.values(a.formatos).some(f => f.disponible) : false;
      const bDisponible = b.formatos ? Object.values(b.formatos).some(f => f.disponible) : false;
      
      // Productos disponibles primero
      if (aDisponible && !bDisponible) return -1;
      if (!aDisponible && bDisponible) return 1;
      
      // Dentro de disponibles: prints/digitales primero (entrega inmediata)
      if (aDisponible && bDisponible) {
        const aTienePrintDigital = a.formatos?.print?.disponible || a.formatos?.digital?.disponible;
        const bTienePrintDigital = b.formatos?.print?.disponible || b.formatos?.digital?.disponible;
        
        if (aTienePrintDigital && !bTienePrintDigital) return -1;
        if (!aTienePrintDigital && bTienePrintDigital) return 1;
      }
    }

    return 0;
  });

  // Intersection Observer (solo para fade-in de secciones, no para obras)
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

  // Mostrar notificación
  const mostrarNotificacion = (mensaje, tipo = 'success') => {
    setNotificacion({ mensaje, tipo });
    setTimeout(() => setNotificacion(null), 2000);
  };

  // Manejador de clic estilo CueroArt para tienda
  const handleProductClick = (producto, e) => {
    e.stopPropagation();
    
    const tieneDisponible = Object.values(producto.formatos).some(f => f.disponible);
    if (!tieneDisponible) {
      mostrarNotificacion('Producto no disponible', 'error');
      return;
    }

    if (productosConPrecioVisible[producto.id]) {
      setProductoSeleccionado(producto);
      const primerDisponible = Object.entries(producto.formatos)
        .find(([_, formato]) => formato.disponible);
      setFormatoSeleccionado(primerDisponible?.[0] || "original");
      setProductosConPrecioVisible({});
    } else {
      setProductosConPrecioVisible({ [producto.id]: true });
      setTimeout(() => {
        setProductosConPrecioVisible({});
      }, 3000);
    }
  };

  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [formatoSeleccionado, setFormatoSeleccionado] = useState("original");

  const cerrarModalCompra = () => {
    setProductoSeleccionado(null);
  };

  const agregarAlCarrito = () => {
    if (!productoSeleccionado) return;
    
    const formato = productoSeleccionado.formatos[formatoSeleccionado];
    
    const itemCarrito = {
      id: `${productoSeleccionado.id}-${formatoSeleccionado}`,
      productoId: productoSeleccionado.id,
      titulo: productoSeleccionado.titulo,
      formato: formatoSeleccionado,
      precio: formato.precio,
      imagen: productoSeleccionado.imagen,
      cantidad: 1
    };

    setCarrito(prev => {
      const existe = prev.find(item => 
        item.productoId === productoSeleccionado.id && 
        item.formato === formatoSeleccionado
      );
      
      if (existe) {
        return prev.map(item => 
          item.productoId === productoSeleccionado.id && item.formato === formatoSeleccionado
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prev, itemCarrito];
    });

    mostrarNotificacion(`${productoSeleccionado.titulo} (${formatoSeleccionado}) agregado`);
    cerrarModalCompra();
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(prev => prev.filter(item => item.id !== id));
    mostrarNotificacion('Producto eliminado');
  };

  const actualizarCantidad = (id, nuevaCantidad) => {
    if (nuevaCantidad < 1) {
      eliminarDelCarrito(id);
      return;
    }

    setCarrito(prev => 
      prev.map(item => 
        item.id === id 
          ? { ...item, cantidad: nuevaCantidad }
          : item
      )
    );
  };

  const calcularTotal = () => {
    return carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
  };

  const vaciarCarrito = () => {
    if (window.confirm('¿Eliminar todos los productos del carrito?')) {
      setCarrito([]);
      mostrarNotificacion('Carrito vaciado');
    }
  };

  const enviarWhatsApp = () => {
    if (carrito.length === 0) {
      mostrarNotificacion('El carrito está vacío', 'error');
      return;
    }

    const itemsTexto = carrito.map(item => 
      `• ${item.titulo} (${item.formato}) — ${formatearPrecio(item.precio)}${item.cantidad > 1 ? ` x${item.cantidad}` : ''}`
    ).join('%0A');

    const total = calcularTotal();
    
    const mensaje = `Hola Andrea, quiero confirmar este pedido:%0A%0A${itemsTexto}%0A%0ATotal: *${formatearPrecio(total)}*%0A%0AQuedo atento a los datos de pago 🙌`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}`, "_blank");
  };

  return (
    <div className="home-container">
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
          </div>
        </div>
      </section>

      {/* SELECTOR DE VISTA */}
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
      <section id={modoVista === 'portfolio' ? "obra" : "tienda"} className="galeria-section">
        <div className="container">
          <h2 className="section-titulo text-center">
            {modoVista === 'portfolio' ? 'Obras' : 'Acuarelas disponibles'}
          </h2>
          
          {modoVista === 'tienda' && (
            <p className="tienda-instrucciones">
              👆 Clic en la imagen para ver precio · Segundo clic para elegir formato
            </p>
          )}
          
          <div className="galeria-grid">
            {elementosOrdenados.map((elemento, index) => (
              <div 
                key={elemento.id} 
                className={`obra-card ${index % 3 === 1 ? "obra-card-offset" : ""} ${modoVista === 'tienda' ? 'tienda-card' : ''}`}
                onClick={() => {
                  if (modoVista === 'portfolio') {
                    setImagenSeleccionada(elemento);
                  } else {
                    handleProductClick(elemento, event);
                  }
                }}
              >
                <div className="obra-imagen-wrapper">
                  <img 
                    src={elemento.imagen} 
                    alt={elemento.titulo} 
                    loading="lazy"
                    onLoad={(e) => {
                      e.target.style.opacity = '1';
                    }}
                  />
                  
                  {modoVista === 'portfolio' && (
                    <div className="obra-overlay">
                      <span>Ver más</span>
                    </div>
                  )}
                  
                  {modoVista === 'tienda' && (
                    <div className="tienda-overlay">
                      {!Object.values(elemento.formatos).some(f => f.disponible) ? (
                        <span className="badge-vendido">Vendida</span>
                      ) : productosConPrecioVisible[elemento.id] ? (
                        <div className="precio-flotante">
                          <span className="precio-valor">
                            Desde {formatearPrecio(Math.min(
                              ...Object.values(elemento.formatos)
                                .filter(f => f.disponible)
                                .map(f => f.precio)
                            ))}
                          </span>
                          <span className="precio-segundo-clic">clic para elegir</span>
                        </div>
                      ) : (
                        <span className="ver-precio">clic para ver precio</span>
                      )}
                    </div>
                  )}
                </div>
                
                <div className="obra-info">
                  <h3>{elemento.titulo}</h3>
                  <p>{elemento.categoria}</p>
                  {modoVista === 'portfolio' ? (
                    <p className="obra-tecnica">{elemento.tecnica} · {elemento.year}</p>
                  ) : (
                    <>
                      <p className="obra-tecnica">{elemento.tecnica} · {elemento.year}</p>
                      <p className="precio-minimo">
                        Desde {formatearPrecio(Math.min(
                          ...Object.values(elemento.formatos)
                            .filter(f => f.disponible)
                            .map(f => f.precio)
                        ))}
                      </p>
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
        <p>© 2026 AlekhArt · Todos los derechos reservados</p>
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

      {/* MODAL DE FORMATO */}
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
                
                <button className="modal-agregar-btn" onClick={agregarAlCarrito}>
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CARRITO MODAL */}
      {mostrarCarrito && (
        <div className="carrito-overlay" onClick={() => setMostrarCarrito(false)}>
          <div className="carrito-modal" onClick={(e) => e.stopPropagation()}>
            <div className="carrito-header">
              <h2>Tu carrito</h2>
              <button className="carrito-cerrar" onClick={() => setMostrarCarrito(false)}>×</button>
            </div>
            
            {carrito.length === 0 ? (
              <div className="carrito-vacio">
                <p>No hay productos en el carrito</p>
                <button 
                  className="carrito-seguir-comprando"
                  onClick={() => setMostrarCarrito(false)}
                >
                  Seguir comprando
                </button>
              </div>
            ) : (
              <>
                <div className="carrito-items">
                  {carrito.map(item => (
                    <div key={item.id} className="carrito-item">
                      <img src={item.imagen} alt={item.titulo} />
                      
                      <div className="carrito-item-info">
                        <h4>{item.titulo}</h4>
                        <p className="carrito-item-formato">Formato: {item.formato}</p>
                        <p className="carrito-item-precio">{formatearPrecio(item.precio)}</p>
                        
                        <div className="carrito-item-cantidad">
                          <button 
                            onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
                            className="cantidad-btn"
                          >−</button>
                          <span>{item.cantidad}</span>
                          <button 
                            onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                            className="cantidad-btn"
                          >+</button>
                        </div>
                      </div>
                      
                      <button 
                        className="carrito-eliminar-item"
                        onClick={() => eliminarDelCarrito(item.id)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="carrito-footer">
                  <div className="carrito-total">
                    <span>Total:</span>
                    <strong>{formatearPrecio(calcularTotal())}</strong>
                  </div>
                  
                  <div className="carrito-acciones">
                    <button 
                      className="carrito-vaciar"
                      onClick={vaciarCarrito}
                    >
                      Vaciar
                    </button>
                    
                    <button 
                      className="carrito-whatsapp"
                      onClick={enviarWhatsApp}
                    >
                      Confirmar por WhatsApp
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* NOTIFICACIÓN */}
      {notificacion && (
        <div className={`notificacion ${notificacion.tipo}`}>
          {notificacion.mensaje}
        </div>
      )}

      {/* ESTILOS - SIN EL NAVBAR DEL HOME */}
      <style>{`
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

        @keyframes girar {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* HERO */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          background: linear-gradient(135deg, #fdf8f3 0%, #f9eee7 100%);
          padding: 80px 2rem 2rem;
          margin-top: 70px; /* Espacio para el navbar fijo */
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

        /* VISTA SELECTOR */
        .vista-selector {
          padding: 2rem 0 1rem;
          margin-top: 0.5rem;
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

        /* FILTROS */
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

        /* GALERÍA */
        .galeria-section {
          padding: 1rem 0 4rem;
          min-height: 600px;
        }

        .galeria-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2.5rem;
          min-height: 400px;
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
          background: #e8ddd2;
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .obra-imagen-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
          opacity: 0;
          animation: fadeIn 0.3s ease forwards;
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        .obra-imagen-wrapper::before {
          content: "✸";
          color: #c17b5e;
          font-size: 2rem;
          opacity: 0.3;
          position: absolute;
          animation: girar 3s linear infinite;
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
          z-index: 2;
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

        /* TIENDA */
        .carrito-icono {
          background: none;
          border: none;
          font-size: 1.3rem;
          cursor: pointer;
          position: relative;
          padding: 0.5rem;
        }

        .carrito-contador {
          position: absolute;
          top: 0;
          right: 0;
          background: #c17b5e;
          color: white;
          font-size: 0.7rem;
          padding: 2px 6px;
          border-radius: 50%;
          min-width: 18px;
        }

        .tienda-instrucciones {
          text-align: center;
          color: #8b6b5c;
          margin-bottom: 2rem;
          font-style: italic;
        }

        .tienda-card {
          cursor: pointer;
        }

        .tienda-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.5);
          opacity: 0;
          transition: opacity 0.3s;
          z-index: 2;
        }

        .tienda-card:hover .tienda-overlay {
          opacity: 1;
        }

        .ver-precio {
          color: white;
          font-size: 0.9rem;
          letter-spacing: 1px;
          border-bottom: 1px solid white;
          padding-bottom: 4px;
        }

        .precio-flotante {
          color: white;
          text-align: center;
        }

        .precio-valor {
          font-size: 1.3rem;
          font-weight: 500;
          display: block;
          margin-bottom: 0.3rem;
        }

        .precio-segundo-clic {
          font-size: 0.7rem;
          opacity: 0.8;
        }

        .precio-minimo {
          color: #c17b5e;
          font-weight: 500;
          margin-top: 0.3rem;
        }

        /* SOBRE */
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

        /* PROCESO */
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

        /* TESTIMONIOS */
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

        /* CONTACTO */
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

        /* FOOTER */
        .footer {
          text-align: center;
          padding: 2rem;
          border-top: 1px solid rgba(193, 123, 94, 0.1);
          color: #8b6b5c;
          font-size: 0.9rem;
        }

        /* FADE */
        .fade {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .fade.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* MODALES */
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

        /* MODAL COMPRA */
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

        .modal-agregar-btn {
          padding: 1rem;
          background: #c17b5e;
          color: white;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s;
        }

        .modal-agregar-btn:hover {
          background: #a5674c;
          transform: translateY(-2px);
        }

        /* CARRITO */
        .carrito-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          justify-content: flex-end;
          z-index: 2000;
        }

        .carrito-modal {
          width: 100%;
          max-width: 450px;
          background: #fdf8f3;
          height: 100%;
          overflow-y: auto;
          padding: 2rem;
          animation: slideLeft 0.3s;
        }

        @keyframes slideLeft {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        .carrito-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .carrito-cerrar {
          background: none;
          border: none;
          font-size: 2rem;
          cursor: pointer;
          color: #8b6b5c;
        }

        .carrito-vacio {
          text-align: center;
          padding: 3rem 0;
        }

        .carrito-vacio p {
          color: #8b6b5c;
          margin-bottom: 1.5rem;
        }

        .carrito-seguir-comprando {
          padding: 0.8rem 2rem;
          background: #c17b5e;
          color: white;
          border: none;
          border-radius: 50px;
          cursor: pointer;
        }

        .carrito-items {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .carrito-item {
          display: flex;
          gap: 1rem;
          padding: 1rem;
          background: white;
          border-radius: 15px;
          position: relative;
        }

        .carrito-item img {
          width: 80px;
          height: 80px;
          border-radius: 10px;
          object-fit: cover;
        }

        .carrito-item-info {
          flex: 1;
        }

        .carrito-item-info h4 {
          font-size: 1rem;
          margin-bottom: 0.2rem;
          color: #3a2a24;
        }

        .carrito-item-formato {
          color: #8b6b5c;
          font-size: 0.8rem;
          margin-bottom: 0.2rem;
        }

        .carrito-item-precio {
          color: #c17b5e;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .carrito-item-cantidad {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .cantidad-btn {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          border: 1px solid #d4b2a0;
          background: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cantidad-btn:hover {
          background: #f5efe8;
        }

        .carrito-eliminar-item {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          background: none;
          border: none;
          font-size: 1.2rem;
          color: #8b6b5c;
          cursor: pointer;
        }

        .carrito-footer {
          border-top: 1px solid #e8e0d5;
          padding-top: 1.5rem;
        }

        .carrito-total {
          display: flex;
          justify-content: space-between;
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
        }

        .carrito-total strong {
          color: #c17b5e;
        }

        .carrito-acciones {
          display: flex;
          gap: 1rem;
        }

        .carrito-vaciar {
          flex: 1;
          padding: 0.8rem;
          background: none;
          border: 1px solid #c17b5e;
          border-radius: 50px;
          color: #c17b5e;
          cursor: pointer;
          transition: all 0.3s;
        }

        .carrito-vaciar:hover {
          background: rgba(193, 123, 94, 0.1);
        }

        .carrito-whatsapp {
          flex: 2;
          padding: 0.8rem;
          background: #25D366;
          color: white;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .carrito-whatsapp:hover {
          background: #128C7E;
        }

        /* NOTIFICACIONES */
        .notificacion {
          position: fixed;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          padding: 1rem 2rem;
          border-radius: 50px;
          color: white;
          font-size: 0.9rem;
          z-index: 3000;
          animation: slideUp 0.3s;
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        .notificacion.success {
          background: #4a7c59;
        }

        .notificacion.error {
          background: #c17b5e;
        }

        @keyframes slideUp {
          from { transform: translate(-50%, 100%); opacity: 0; }
          to { transform: translate(-50%, 0); opacity: 1; }
        }

        /* RESPONSIVE */
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
          .hero {
            margin-top: 60px;
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

          .carrito-acciones {
            flex-direction: column;
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
