// MainContent.js
import React from 'react';
import styled from 'styled-components';
import fondo from './imagenes/traveling2.png'; // Cambia 'tu-imagen.jpg' por el nombre de tu imagen

const MainContentContainer = styled.div`
    background-image: url(${(props) => props.bgImage}); /* Establece la imagen de fondo */
    background-size: cover; /* Hace que la imagen cubra toda la pantalla */
    background-position: center; /* Centra la imagen */
    height: 130vh; /* Altura de 130% de la ventana del navegador */
    display: flex; /* Usar flexbox para centrar el contenido */
    justify-content: center; /* Centrar horizontalmente */
    align-items: center; /* Centrar verticalmente */
    color: white; /* Color del texto */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Sombra para el texto */
    position: relative; 
`;

const MainContent = () => {
    return (
        <MainContentContainer bgImage={fondo}>
            {/* Aquí puedes agregar el contenido que desees */}
            
        </MainContentContainer>
    );
};

export default MainContent; 