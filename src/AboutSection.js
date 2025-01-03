import React from 'react';
import styled from 'styled-components';
import captura from './imagenes/fondo.jpg';
import captura2 from './imagenes/rueda.jpg';
// Componentes estilizados
const AboutSectionContainer = styled.div`
    display: flex; /* Usar flexbox para la disposición */
    flex-direction: row;
    justify-content:space-around;
    
    
    
      

    `;

const ItemContainer = styled.div` 
    
    flex-direction: column; /* Apilar elementos verticalmente */
    justify-content: center; /* Centrar elementos verticalmente */
    align-items: center; /* Centrar horizontalmente */
    width: 20%; /* Ancho relativo del contenedor */
    padding: 20px; /* Espaciado interno */
    background: rgba(0, 0, 0, 0.5); /* Fondo semi-transparente */
    border-radius: 10px; /* Bordes redondeados */
  

`;

const TextContainer = styled.div`
    flex: 1; /* Permitir que el contenedor de texto ocupe espacio */
    max-width: 70%; /* Limitar el ancho máximo */   
    border-radius: 10px; /* Bordes redondeados */
    @media (max-width: 768px) {
       
        max-width: 90%
        }
`;

const ImageContainer = styled.div`
    flex: 1; /* Permitir que el contenedor de imagen ocupe espacio */
    max-width: 20%; /* Limitar el ancho máximo */
    text-align: right; /* Alinear la imagen a la derecha */
    @media (max-width: 768px) {
       
        max-width: 90%
        }
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
            <ItemContainer>
                <ImageContainer>
                    <StyledImage src={captura} alt="Taller Automotriz" />
                </ImageContainer>
                <TextContainer>
                    
                    <p>En Servi Land Rover, nos especializamos en:</p>
                    <ul>
                        <li>Alineacion y balanceo</li>
                        <li>cambios de acite</li>
                        <li>Frenos</li>
                        <li>sincronizacion</li>
                        <li>Diagnostico automotriz</li>
                        <li>manteniento por kiometraje</li>
                        <li>Restauraciones totales y parciales de vehiculos</li>
                    </ul>
                </TextContainer>
            </ItemContainer>    

            <ItemContainer>
                <ImageContainer>
                    <StyledImage src={captura2} alt="suspension" />
                </ImageContainer>
                <TextContainer>
                    
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
            </ItemContainer>
        </AboutSectionContainer>
    );
};

export default AboutSection;