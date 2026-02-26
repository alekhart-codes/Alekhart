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

  // ===== FUNCIÓN DE ORDENAMIENTO PRIORIZADO =====
  const ordenarElementos = (elementos, modo) => {
    return elementos.slice().sort((a, b) => {
      // 1. MURALES SIEMPRE AL FINAL (para ambos modos)
      if (a.categoria === "Murales" && b.categoria !== "Murales") return 1;
      if (b.categoria === "Murales" && a.categoria !== "Murales") return -1;
      
      // 2. MODO TIENDA: priorizar disponibilidad
      if (modo === "tienda") {
        const aDisponible = a.formatos ? Object.values(a.formatos).some(f => f.disponible) : false;
        const bDisponible = b.formatos ? Object.values(b.formatos).some(f => f.disponible) : false;
        
        // Productos disponibles primero
        if (aDisponible && !bDisponible) return -1;
        if (!aDisponible && bDisponible) return 1;
        
        // 3. DENTRO DE DISPONIBLES: priorizar prints/digital sobre originales
        if (aDisponible && bDisponible) {
          const aTienePrintDigital = a.formatos?.print?.disponible || a.formatos?.digital?.disponible;
          const bTienePrintDigital = b.formatos?.print?.disponible || b.formatos?.digital?.disponible;
          
          if (aTienePrintDigital && !bTienePrintDigital) return -1;
          if (!aTienePrintDigital && bTienePrintDigital) return 1;
        }
      }
      
      // 4. MODO PORTFOLIO: ordenar por fecha (más reciente primero)
      if (modo === "portfolio") {
        return (b.year || "0").localeCompare(a.year || "0");
      }
      
      return 0; // mantener orden original si no aplica
    });
  };

  // Aplicar ordenamiento
  const elementosOrdenados = ordenarElementos(elementosFiltrados, modoVista);

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
      {/* ===== NAVBAR ESPIRITUAL CON DOBLE LÍNEA DEGRADADA Y BILINGÜE ===== */}
      <nav className="navbar-espiritual">
        {/* Las dos líneas decorativas están en los pseudoelementos ::before y ::after */}
        <div className="nav-container">
          {/* Logo y patrón espiritual */}
          <div className="logo-container">
            <img 
              src="/img/Andrea/Logo elegante de Alekhart.png" 
              alt="AlekhArt" 
              className="brand-logo" 
            />
            <div className="patrones-vivos">
              <span className="figura morado"></span>
              <span className="figura cyan"></span>
              <span className="figura verde"></span>
              <span className="figura azul"></span>
            </div>
          </div>

          {/* Enlaces bilingües (ES/EN) + carrito */}
          <div className="nav-links-bilingues">
            {/* Cada enlace tiene su versión en español (superior) e inglés (inferior) */}
            <a href="#obra" className="bilingue-item">
              <span className="lang-es">Obra</span>
              <span className="lang-en">Work</span>
            </a>
            <a href="#tienda" className="bilingue-item">
              <span className="lang-es">Tienda</span>
              <span className="lang-en">Shop</span>
            </a>
            <a href="#sobre" className="bilingue-item">
              <span className="lang-es">Sobre mí</span>
              <span className="lang-en">About</span>
            </a>
            <a href="#contacto" className="bilingue-item">
              <span className="lang-es">Contacto</span>
              <span className="lang-en">Contact</span>
            </a>
            
            {/* Carrito con contador */}
            <button 
              className="carrito-icono bilingue-item"
              onClick={() => setMostrarCarrito(true)}
              aria-label="Carrito / Cart"
            >
              <span className="lang-es">🛒 Carrito</span>
              <span className="lang-en">🛒 Cart</span>
              {carrito.length > 0 && (
                <span className="carrito-contador">
                  {carrito.reduce((sum, item) => sum + item.cantidad, 0)}
                </span>
              )}
            </button>
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

      {/* GALERÍA / TIENDA CON ORDENAMIENTO PRIORIZADO */}
      <section id={modoVista === 'portfolio' ? "obra" : "tienda"} className="galeria-section">
        <div className="container">
          <h2 className="section-titulo text-center">
            {modoVista === 'portfolio' ? 'Obras' : 'Acuarelas disponibles'}
          </h2>
          
          {modoVista === 'tienda' && (
            <>
              <p className="tienda-instrucciones">
                👆 Clic en la imagen para ver precio · Segundo clic para elegir formato
              </p>
              {/* Indicador visual de prioridad */}
              <div className="prioridad-indicador">
                <span className="prioridad-badge prioridad-alta">⚡ Disponible ahora</span>
                <span className="prioridad-badge prioridad-media">📦 A pedido</span>
                <span className="prioridad-badge prioridad-baja">🎨 Murales</span>
              </div>
            </>
          )}
          
          <div className="galeria-grid">
            {elementosOrdenados.map((elemento, index) => {
              // Determinar badge de prioridad para tienda
              const prioridad = modoVista === "tienda" ? (
                elemento.categoria === "Murales" ? "baja" :
                (elemento.formatos?.print?.disponible || elemento.formatos?.digital?.disponible) ? "alta" :
                elemento.formatos?.original?.disponible ? "media" : "vendido"
              ) : null;
              
              return (
                <div 
                  key={elemento.id} 
                  className={`obra-card ${index % 3 === 1 ? "obra-card-offset" : ""} 
                    ${modoVista === 'tienda' ? 'tienda-card' : ''}
                    ${prioridad ? `prioridad-${prioridad}` : ''}`}
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
                    
                    {/* Badge de prioridad visual */}
                    {modoVista === 'tienda' && prioridad && prioridad !== 'vendido' && (
                      <div className={`prioridad-chip prioridad-${prioridad}`}>
                        {prioridad === 'alta' && '⚡ Disponible'}
                        {prioridad === 'media' && '📦 A pedido'}
                        {prioridad === 'baja' && '🎨 Mural'}
                      </div>
                    )}
                    
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
                          {!Object.values(elemento.formatos).some(f => f.disponible) ? (
                            <span className="no-disponible">No disponible</span>
                          ) : (
                            <>Desde {formatearPrecio(Math.min(
                              ...Object.values(elemento.formatos)
                                .filter(f => f.disponible)
                                .map(f => f.precio)
                            ))}</>
                          )}
                        </p>
                        {/* Micro-badge de tipo */}
                        <p className="tipo-entrega">
                          {elemento.formatos?.digital?.disponible && '📱 Digital · '}
                          {elemento.formatos?.print?.disponible && '🖨️ Print · '}
                          {elemento.formatos?.original?.disponible && '🎨 Original'}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
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

      {/* ESTILOS DEL NUEVO NAVBAR (se agregan a los existentes) */}
      <style>{`
        /* ===== NAVBAR ESPIRITUAL CON DOBLE LÍNEA DEGRADADA ===== */
        .navbar-espiritual {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(18, 14, 28, 0.85);
          backdrop-filter: blur(16px);
          padding: 0.6rem 2rem;
          z-index: 1000;
          border-bottom: none;
          box-shadow: 0 8px 32px rgba(80, 40, 120, 0.3);
          
          /* Línea superior (degradada de arriba a abajo) */
          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(to bottom, 
              #b388ff,      /* violeta/morado */
              #22d3ee,      /* cyan */
              #4ade80,      /* verde eléctrico */
              #3b82f6,      /* azul */
              transparent   /* se desvanece hacia abajo */
            );
            background-size: 100% 400%;
            background-position: top;
            pointer-events: none;
            z-index: 1001;
            opacity: 0.9;
          }
          
          /* Línea inferior (degradada de arriba a abajo) */
          &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(to bottom, 
              #c77dff,      /* morado más intenso */
              #2dd4bf,      /* verde-cyan */
              #60e080,      /* verde eléctrico claro */
              #4895ff,      /* azul eléctrico */
              transparent   /* se desvanece hacia abajo */
            );
            background-size: 100% 400%;
            background-position: top;
            pointer-events: none;
            z-index: 1001;
            opacity: 0.9;
          }
        }

        /* Ajustes del contenedor del navbar */
        .navbar-espiritual .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0;
          position: relative;
          z-index: 1002;
        }

        /* Logo + patrones */
        .logo-container {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .patrones-vivos {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .figura {
          width: 28px;
          height: 28px;
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          animation: formaFlotante 6s infinite alternate ease-in-out;
          filter: blur(0.8px) brightness(1.3);
          box-shadow: 0 0 12px currentColor;
        }

        .figura.morado {
          background: linear-gradient(145deg, #b388ff, #9d65ff);
          color: #b388ff;
        }
        .figura.cyan {
          background: linear-gradient(145deg, #22d3ee, #0aa5c0);
          color: #22d3ee;
        }
        .figura.verde {
          background: linear-gradient(145deg, #4ade80, #1fa750);
          color: #4ade80;
        }
        .figura.azul {
          background: linear-gradient(145deg, #3b82f6, #1e5bbf);
          color: #3b82f6;
        }

        @keyframes formaFlotante {
          0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; transform: rotate(0deg); }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: rotate(10deg); }
        }

        /* Enlaces bilingües */
        .nav-links-bilingues {
          display: flex;
          align-items: center;
          gap: 1.8rem;
        }

        .bilingue-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.2rem 0;
          transition: all 0.2s;
          border-bottom: 1px solid transparent;
        }

        .bilingue-item:hover {
          border-bottom-color: #c084fc;
        }

        .lang-es {
          font-size: 1rem;
          font-weight: 500;
          color: #f0eaff;
          letter-spacing: 0.5px;
          text-shadow: 0 0 8px #a78bfa;
          line-height: 1.2;
        }

        .lang-en {
          font-size: 0.75rem;
          color: #b0e0ff;
          text-transform: uppercase;
          letter-spacing: 2px;
          opacity: 0.8;
          text-shadow: 0 0 5px #4ade80;
        }

        /* Carrito dentro del navbar bilingüe */
        .carrito-icono {
          background: rgba(120, 80, 200, 0.2);
          border: 1px solid rgba(130, 90, 255, 0.5);
          border-radius: 2rem;
          padding: 0.3rem 1rem !important;
          position: relative;
        }

        .carrito-icono .lang-es,
        .carrito-icono .lang-en {
          display: block;
          text-align: left;
        }

        .carrito-contador {
          position: absolute;
          top: -6px;
          right: -6px;
          background: #4ade80;
          color: #0b0a1a;
          font-size: 0.7rem;
          font-weight: bold;
          padding: 2px 6px;
          border-radius: 40%;
          min-width: 20px;
          text-align: center;
          box-shadow: 0 0 10px #22d3ee;
        }

        /* Responsive del navbar */
        @media (max-width: 992px) {
          .navbar-espiritual {
            padding: 0.6rem 1rem;
          }
          
          .patrones-vivos {
            display: none;
          }
          
          .nav-links-bilingues {
            gap: 0.8rem;
          }
          
          .bilingue-item .lang-es {
            font-size: 0.9rem;
          }
          
          .bilingue-item .lang-en {
            font-size: 0.65rem;
          }
        }

        @media (max-width: 768px) {
          .navbar-espiritual .nav-container {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .nav-links-bilingues {
            flex-wrap: wrap;
            justify-content: center;
          }
          
          .carrito-icono {
            padding: 0.2rem 0.8rem !important;
          }
        }

        /* Ajuste para que el hero no quede detrás del navbar fijo */
        .hero {
          margin-top: 70px; /* altura aprox del navbar */
        }

        @media (max-width: 768px) {
          .hero {
            margin-top: 100px;
          }
        }

        /* Los estilos anteriores del navbar se reemplazan, pero mantenemos los demás */
        .navbar {
          display: none; /* Ocultamos el navbar anterior */
        }

        /* Aseguramos que el brand-logo se vea bien */
        .brand-logo {
          height: 48px;
          width: auto;
          filter: drop-shadow(0 0 6px #a78bfa);
        }

        /* Prioridad visual para tienda */
        .prioridad-indicador {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin: 1rem 0 2rem;
          flex-wrap: wrap;
        }

        .prioridad-badge {
          padding: 0.3rem 1rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        .prioridad-badge.prioridad-alta {
          background: linear-gradient(135deg, #4ade80, #22d3ee);
          color: #0a0a1a;
          box-shadow: 0 0 15px #4ade80;
        }

        .prioridad-badge.prioridad-media {
          background: linear-gradient(135deg, #b388ff, #c084fc);
          color: white;
          box-shadow: 0 0 15px #b388ff;
        }

        .prioridad-badge.prioridad-baja {
          background: linear-gradient(135deg, #3b82f6, #60a5fa);
          color: white;
          opacity: 0.9;
        }

        /* Chips individuales en tarjetas */
        .prioridad-chip {
          position: absolute;
          top: 10px;
          left: 10px;
          padding: 0.2rem 0.8rem;
          border-radius: 50px;
          font-size: 0.7rem;
          font-weight: 600;
          z-index: 10;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          backdrop-filter: blur(4px);
        }

        .prioridad-chip.prioridad-alta {
          background: rgba(74, 222, 128, 0.9);
          color: #0a0a1a;
          border: 1px solid #4ade80;
        }

        .prioridad-chip.prioridad-media {
          background: rgba(179, 136, 255, 0.9);
          color: white;
          border: 1px solid #b388ff;
        }

        .prioridad-chip.prioridad-baja {
          background: rgba(59, 130, 246, 0.9);
          color: white;
          border: 1px solid #3b82f6;
        }

        /* Efecto hover según prioridad */
        .obra-card.prioridad-alta:hover {
          box-shadow: 0 20px 40px -10px rgba(74, 222, 128, 0.3);
        }

        .obra-card.prioridad-media:hover {
          box-shadow: 0 20px 40px -10px rgba(179, 136, 255, 0.3);
        }

        .obra-card.prioridad-baja:hover {
          box-shadow: 0 20px 40px -10px rgba(59, 130, 246, 0.2);
        }

        .tipo-entrega {
          font-size: 0.7rem;
          color: #a78bfa;
          margin-top: 0.2rem;
          opacity: 0.8;
        }

        .no-disponible {
          color: #c17b5e;
          font-style: italic;
        }
      `}</style>
    </div>
  );
};

export default HomeScreen;
