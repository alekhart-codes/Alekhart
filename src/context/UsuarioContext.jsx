import React, { createContext, useState, useEffect } from 'react';

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null);
    const [mostrarCarrito, setMostrarCarrito] = useState(false);
    const [carrito, setCarrito] = useState([]);

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

    // Calcular total de items
    const totalItems = carrito.reduce((sum, item) => sum + (item.cantidad || 1), 0);

    return (
        <UsuarioContext.Provider value={{
            usuario,
            setUsuario,
            mostrarCarrito,
            setMostrarCarrito,
            carrito,
            setCarrito,
            totalItems
        }}>
            {children}
        </UsuarioContext.Provider>
    );
};
