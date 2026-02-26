import React, { createContext, useState } from 'react';

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null);
    const [mostrarCarrito, setMostrarCarrito] = useState(false);

    return (
        <UsuarioContext.Provider value={{
            usuario,
            setUsuario,
            mostrarCarrito,
            setMostrarCarrito
        }}>
            {children}
        </UsuarioContext.Provider>
    );
};
