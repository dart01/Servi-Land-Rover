// MainContent.js
import React from 'react';
import styled from 'styled-components';
import fondo from './imagenes/traveling2.png'; // Cambia 'tu-imagen.jpg' por el nombre de tu imagen
import phoneIcon from './imagenes/phone.png'; // Asegúrate de que la ruta sea correcta
import emailIcon from './imagenes/email.png'; // Asegúrate de que la ruta sea correcta
import instagramIcon from './imagenes/instagram.png'; // Asegúrate de que la ruta sea correcta

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

const IconsContainer = styled.div`
    position: absolute; /* Posiciona los íconos en la parte inferior */
    bottom: 20px; /* Espaciado desde la parte inferior */
    display: flex; /* Usa flexbox para alinear los íconos */
    justify-content: center; /* Centra horizontalmente */
    gap: 20px; /* Espacio entre los íconos */
`;

const Icon = styled.img`
    width: 40px; /* Ajusta el tamaño del ícono */
    height: 40px; /* Ajusta el tamaño del ícono */
    cursor: pointer; /* Cambia el cursor al pasar el mouse */
`;

const MainContent = () => {
    return (
        <MainContentContainer bgImage={fondo}>
            {/* Aquí puedes agregar el contenido que desees */}
            <IconsContainer>
                <a href="tel:+3187407550">
                    <Icon src={phoneIcon} alt="Teléfono" />
                </a>
                <a href="mailto:servilandrover@gmail.com">
                    <Icon src={emailIcon} alt="Email" />
                </a>
                <a href="https://www.instagram.com/tu_instagram" target="_blank" rel="noopener noreferrer">
                    <Icon src={instagramIcon} alt="Instagram" />
                </a>
            </IconsContainer>
        </MainContentContainer>
    );
};

export default MainContent;