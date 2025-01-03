// Header.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'; // Importa styled-components
import logo from './imagenes/logo.png';

// Define los estilos utilizando styled-components
const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333333; /* Color de fondo */
    color: rgb(8, 8, 8); /* Color del texto */
    padding: 10px 20px; /* Espaciado interno */
    position: fixed; /* Hacer que la barra sea flotante */
    top: 2%; /* Posición en la parte superior */
    left: 2%; /* Alinear a la izquierda */
    right: 2%; /* Alinear a la derecha */
    border-radius: 50px; /* Bordes redondos */
    z-index: 1000; /* Asegurarse de que esté encima de otros elementos */
    transition: background-color 0.3s; /* Transición suave para el fondo */

    &.sticky {
        background-color: #55555585; /* Cambiar color de fondo cuando es sticky */
    }
    
`;

const Logo = styled.div`
    font-size: 1.5em; /* Tamaño del logo */
    
    img {
        height: 40px; /* Ajusta la altura según tus necesidades */
        width: auto; /* Mantiene la proporción de la imagen */
    }
`;

const Nav = styled.nav`
    ul {
        list-style: none; /* Eliminar viñetas */
        display: flex; /* Hacer que los elementos sean horizontales */
        margin: 0; /* Eliminar márgenes */
        padding: 0; /* Eliminar padding */
    }
    
    li {
        margin-left: 20px; /* Espaciado entre los elementos */
    }
    
    a {
        color: white; /* Color del texto de los enlaces */
        text-decoration: none; /* Eliminar subrayado */
        padding: 5px 10px; /* Espaciado interno de los enlaces */
        border-radius: 5px; /* Bordes redondos en los enlaces */
        transition: background-color 0.3s; /* Transición suave para el hover */
    
        &:hover {
            background-color: #555; /* Color de fondo al pasar el ratón */
        }
    }
`;

const Header = () => {
    const [isSticky, setSticky] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <HeaderContainer className={isSticky ? 'sticky' : ''}>
            <Logo>
                <img src={logo} alt="Logo" />
            </Logo>
            <Nav>
                <ul>
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#about">Acerca de</a></li>
                    <li><a href="#services">Servicios</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;