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

  // Intersection Observer
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

  const mostrarNotificacion = (mensaje, tipo = 'success') => {
    setNotificacion({ mensaje, tipo });
    setTimeout(() => setNotificacion(null), 2000);
  };

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
    </div>
  );
};

export default HomeScreen;
