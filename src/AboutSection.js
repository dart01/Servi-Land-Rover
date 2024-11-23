import React from 'react';
import styled from 'styled-components';
import captura from './imagenes/fondo.jpg';

// Componentes estilizados
const AboutSectionContainer = styled.div`
    display: flex; /* Usar flexbox para la disposición */
    justify-content: space-around; /* Espacio entre el texto y la imagen */
    align-items: center; /* Centrar verticalmente */
    padding: 40px; /* Espaciado interno */
    height: 400px; /* Ajusta la altura según tus necesidades */
    background-size: cover; /* Asegúrate de que la imagen de fondo cubra el área */
    color: white; /* Color del texto */
    @media (max-width: 768px) {
        flex-direction: column; /* Apilar elementos verticalmente */
    }
`;

const TextContainer = styled.div`
    flex: 1; /* Permitir que el contenedor de texto ocupe espacio */
    max-width: 45%; /* Limitar el ancho máximo */
    padding: 20px; /* Espaciado interno */
    background: rgba(0, 0, 0, 0.5); /* Fondo semi-transparente para mejorar la legibilidad */
    border-radius: 10px; /* Bordes redondeados */
`;

const ImageContainer = styled.div`
    flex: 1; /* Permitir que el contenedor de imagen ocupe espacio */
    max-width: 40%; /* Limitar el ancho máximo */
    text-align: right; /* Alinear la imagen a la derecha */
`;

const StyledImage = styled.img`
    width: 100%; /* Hacer que la imagen ocupe todo el contenedor */
    height: auto; /* Mantener la proporción de la imagen */
    border-radius: 10px; /* Bordes redondeados en la imagen */
`;



// Componente principal
const AboutSection = () => {
    return (
        <AboutSectionContainer>
            <TextContainer>
                <h2>Sobre Nosotros</h2>
                <p>En Servi Land Rover, nos especializamos en:</p>
                <ul>
                    <li>Mecánica general</li>
                    <li>Reparacion y manteniento de Motor</li>
                    <li>Suspensiones deportivas</li>
                    <li>Cajas de velocidades</li>
                    <li>cajas de Dirección electroasistida</li>
                    <li>Restauraciones totales y parciales de vehiculos</li>
                </ul>
            </TextContainer>
            <ImageContainer>
                <StyledImage src={captura} alt="Taller Automotriz" />
            </ImageContainer>
        </AboutSectionContainer>
    );
};

export default AboutSection;