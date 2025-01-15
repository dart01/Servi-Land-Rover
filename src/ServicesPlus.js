import React from 'react';
import styled from 'styled-components';
import fondo1 from './imagenes/evoqe.jpeg';

const ServicesPlusContainer = styled.div`
    display: flex; /* Contenedor principal en horizontal */
    background-image: url(${(props) => props.bgImage}); /* Establece la imagen de fondo */
    background-size: cover; /* Hace que la imagen cubra toda la pantalla */
    background-position: center; /* Centra la imagen */
    height: 100vh; /* Altura de 100% de la ventana del navegador */
    align-items: flex-start; /* Alinear elementos al inicio vertical */
    justify-content: flex-start; /* Alinear elementos al inicio horizontal */
    color: white; /* Color del texto */
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5); /* Sombra para el texto */
    padding: 20px; /* Agrega espacio interno */
    position: relative; 
    @media (max-width: 750px){
        flex-direction: column;
    }
`;

const Title = styled.h1`
    font-size: 4rem; /* Tamaño de letra */
    margin: 0; /* Sin márgenes */
`;

const Button = styled.button`
    position: absolute; /* Posiciona el botón de forma absoluta */
    bottom:10%; /* Distancia desde la parte inferior */
    left: 10%; /* Centra horizontalmente */
    transform: translateX(-50%); /* Ajusta el botón para que esté centrado */
    background: transparent; /* Fondo transparente */
    border: 3px solid white; /* Borde blanco */
    color: black; /* Color del texto */
    padding: 10px 20px; /* Espaciado interno */
    font-size: 1rem; /* Tamaño de letra */
    cursor: pointer; /* Cambia el cursor al pasar sobre el botón */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Sombra para el texto */

    &:hover {
        background: white; /* Fondo blanco al pasar sobre el botón */
        color: black; /* Color de texto negro al pasar sobre el botón */
    }
`;

const ServicesPlus = () => {
    return (
        <ServicesPlusContainer bgImage={fondo1}>
            <div>
                <Title>Taller de mecánica<br></br> automotriz especializado<br></br> en Range Rover</Title>
            </div>
            <Button>Agendar Cita</Button>
        </ServicesPlusContainer>
    );
};

export default ServicesPlus;
