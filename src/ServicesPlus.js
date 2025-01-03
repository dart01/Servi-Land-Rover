import React from 'react';
import styled from 'styled-components';
import fondo1 from './imagenes/evoqe.jpeg';

const ServicesPlusContainer = styled.div`
    display: flex; /* Contenedor principal en horizontal */
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
    @media (max-width: 750px){
        flex-direction: column;
        
    }
`;

const ServicesPlus = () => {
    return (
        <ServicesPlusContainer bgImage={fondo1}>
            {/* Aquí puedes agregar el contenido que desees mostrar dentro del contenedor */}
            <h2>Servicios Plus</h2>
            <p>Descripción de los servicios ofrecidos.</p>
            {/* Puedes agregar más componentes o elementos aquí */}
        </ServicesPlusContainer>
    );
};

export default ServicesPlus;