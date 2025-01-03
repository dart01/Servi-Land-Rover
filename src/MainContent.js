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
    height: 100vh; /* Altura de 100% de la ventana del navegador */
    display: flex; /* Usar flexbox para centrar el contenido */
    justify-content: center; /* Centrar horizontalmente */
    align-items: center; /* Centrar verticalmente */
    color: white; /* Color del texto */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Sombra para el texto */
    position: relative; 
    
    @media (max-width: 1024px) {
        height: 100vh; /* Mantén una altura consistente */
        width: 100vh; 
        background-size: cover; /* Asegúrate de que el fondo se ajuste */
        padding: 15px; /* Reduce el padding */
    }

    @media (max-width: 750px) {
        flex-direction: column; /* Alinea los elementos verticalmente */
        
        height: 100vh; /* Mantén el fondo a la altura completa de la pantalla */
        width: 100vh; 
        
    }
`;

const IconsContainer = styled.div`
    position: absolute; /* Posiciona los íconos en la parte inferior */
    bottom: 20px; /* Espaciado desde la parte inferior */
    display: flex; /* Usa flexbox para alinear los íconos */
    justify-content: center; /* Centra horizontalmente */
    gap: 20px; /* Espacio entre los íconos */

    @media (max-width: 750px) {
         
       
        margin-top: 20px; /* Agrega espacio entre el contenido y los íconos */
    }
`;

const Icon = styled.img`
    width: 40px; /* Ajusta el tamaño del ícono */
    height: 40px; /* Ajusta el tamaño del ícono */
    cursor: pointer; /* Cambia el cursor al pasar el mouse */
    
    @media (max-width: 750px) {
        width: 30px; /* Reduce el tamaño de los íconos en pantallas pequeñas */
        height: 30px;
    }
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
