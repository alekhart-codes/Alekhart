import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import styles from '../ContactScreen.module.css';
import { ArtisanImage } from '../component/contactCard/ArtisanImage/ArtisanImage.jsx';
import { ContactCard } from '../component/contactCard/ContactCard.jsx';
import { artisanImages } from '../img/index.jsx';

// Variantes de animación para contenedores
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
};

const stampVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: -8,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.4,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
};

const arrowVariants = {
  animate: {
    y: [0, -8, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const ContactScreen = () => {
  // Referencia al formulario (CRÍTICO para EmailJS)
  const formRef = useRef(null);
  
  // Estado del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Manejador de cambios
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Manejador de envío
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Obtener credenciales de variables de entorno
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Enviar email
      await emailjs.sendForm(
        serviceId, 
        templateId, 
        formRef.current,
        publicKey
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 4000);
    }
  };

  // Datos de contacto actualizados para Andrea
  const contactMethods = [
    {
      icon: '✉️',
      title: 'Correspondencia',
      link: 'mailto:andrea@alekhart.cl',
      note: 'respuesta personal'
    },
    {
      icon: '📱',
      title: 'WhatsApp',
      link: 'https://wa.me/569XXXXXXXX', // Reemplaza con tu número
      note: 'respuesta rápida'
    }
  ];

  // Sellos de confianza
  const trustSeals = [
    { icon: '⏳', text: 'sin prisas' },
    { icon: '🤝', text: 'trato directo' },
    { icon: '🎨', text: 'hecho a mano' }
  ];

  return (
    <motion.div 
      className={styles.container}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className={styles.content}>
        
        {/* SECCIÓN DE IMÁGENES ARTESANALES */}
        <motion.div 
          className={styles.imageGrid}
          variants={itemVariants}
        >
          <ArtisanImage 
            src={artisanImages.artist} 
            alt="Andrea Fortoul - Artista" 
            badge="🎨"
            delay={0.1}
          />
          <ArtisanImage 
            src={artisanImages.process} 
            alt="Proceso artesanal" 
            badge="🖌️"
            delay={0.3}
          />
          <ArtisanImage 
            src={artisanImages.work} 
            alt="Obra personalizada" 
            badge="✨"
            delay={0.5}
          />
        </motion.div>

        {/* FIRMA MANUSCRITA */}
        <motion.div 
          className={styles.signature}
          variants={itemVariants}
        >
          mandalas · geometría sagrada · acuarelas
        </motion.div>

        {/* SELLO ARTESANAL */}
        <motion.div 
          className={styles.stamp}
          variants={stampVariants}
        >
          <span className={styles.stampText}>arte original</span>
        </motion.div>

        {/* TÍTULO PRINCIPAL */}
        <motion.h1 
          className={styles.title}
          variants={titleVariants}
        >
          Conversemos
          <motion.span 
            className={styles.arrow}
            variants={arrowVariants}
            animate="animate"
          >
            ↗
          </motion.span>
        </motion.h1>

        <motion.p 
          className={styles.subtitle}
          variants={itemVariants}
        >
          Cada mandala es un viaje al centro.
          <br />
          <span className={styles.highlight}>
            Hagamos algo bello juntos.
          </span>
        </motion.p>

        {/* TARJETA PRINCIPAL - FORMULARIO */}
        <motion.div 
          className={styles.card}
          variants={itemVariants}
          whileHover={{
            boxShadow: "0 15px 40px rgba(193,123,94,0.1), 0 0 0 1px #c17b5e, 0 0 0 4px white, 0 0 0 5px #c17b5e",
            transition: { duration: 0.3 }
          }}
        >
          
          {/* SELLO PERSONAL */}
          <motion.div 
            className={styles.seal}
            whileHover={{ 
              rotate: 15,
              scale: 1.1,
              borderColor: "#c17b5e",
              transition: { duration: 0.3 }
            }}
          >
            <span className={styles.sealInner}>A•F</span>
          </motion.div>
          
          <motion.p 
            className={styles.greeting}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Hola, soy Andrea ·
            <span className={styles.role}> artista visual</span>
          </motion.p>

          {/* CARTA PERSONAL */}
          <motion.div 
            className={styles.letter}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <p>
              <span className={styles.dropCap}>C</span>
              uéntame qué necesitas. Ya sea un mandala para tu espacio, 
              una acuarela personalizada o un mural que transforme tu entorno. 
              Trabajo sin prisas, con atención al detalle, creando piezas únicas 
              que llevan geometría sagrada a tu vida.
            </p>
          </motion.div>

          {/* FORMULARIO */}
          <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
            
            {/* Campo oculto para Netlify */}
            <input type="hidden" name="form-name" value="contacto-artesanal" />
            
            <motion.div 
              className={styles.formGroup}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              <label htmlFor="name" className={styles.label}>
                ¿Cómo te llamas?
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                placeholder="ej: María González"
                required
                disabled={isSubmitting}
              />
            </motion.div>

            <motion.div 
              className={styles.formGroup}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <label htmlFor="email" className={styles.label}>
                ¿Tu correo?
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                placeholder="ej: maria@taller.cl"
                required
                disabled={isSubmitting}
              />
            </motion.div>

            <motion.div 
              className={styles.formGroup}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <label htmlFor="message" className={styles.label}>
                ¿Qué sueñas crear?
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                placeholder="Cuéntame tu idea... ¿Un mandala? ¿Una acuarela? ¿Un mural?"
                rows="5"
                required
                disabled={isSubmitting}
              />
            </motion.div>

            <motion.div 
              style={{ textAlign: 'center' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              <motion.button 
                type="submit" 
                className={styles.button}
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </span>
                <motion.span 
                  className={styles.buttonIcon}
                  animate={isSubmitting ? { 
                    rotate: 360,
                    transition: { duration: 2, repeat: Infinity, ease: "linear" }
                  } : {}}
                >
                  {isSubmitting ? '⏳' : '✎'}
                </motion.span>
              </motion.button>
              
              {submitStatus === 'success' && (
                <motion.p 
                  className={styles.successMessage}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  ✨ ¡Mensaje enviado! Te responderé pronto.
                </motion.p>
              )}
              
              {submitStatus === 'error' && (
                <motion.p 
                  className={styles.errorMessage}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  ❌ Hubo un error. ¿Puedes intentar de nuevo?
                </motion.p>
              )}
              
              <p className={styles.note}>
                * Respondo personalmente en menos de 24 horas.
                <br />
                Sin automatizaciones, con atención artesanal.
              </p>
            </motion.div>
          </form>

          {/* SELLOS DE CONFIANZA */}
          <motion.div 
            className={styles.seals}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            {trustSeals.map((seal, index) => (
              <motion.div 
                key={index} 
                className={styles.sealItem}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <span className={styles.sealIcon}>{seal.icon}</span>
                <span className={styles.sealText}>{seal.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* TARJETAS DE CONTACTO */}
        <motion.div 
          className={styles.contactGrid}
          variants={itemVariants}
        >
          {contactMethods.map((method, index) => (
            <ContactCard 
              key={index} 
              {...method} 
              delay={1.5 + (index * 0.1)}
            />
          ))}
        </motion.div>

        {/* FIRMA FINAL */}
        <motion.div 
          className={styles.quote}
          variants={itemVariants}
        >
          “El centro está en todas partes”
        </motion.div>
        
        <motion.div 
          className={styles.signatureContainer}
          variants={itemVariants}
        >
          <motion.span 
            className={styles.signatureName}
            whileHover={{ scale: 1.05, color: "#c17b5e" }}
            transition={{ duration: 0.3 }}
          >
            Andrea Fortoul
          </motion.span>
          <span className={styles.signatureTitle}>
            AlekhArt
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};
