import React from 'react';
import styled from 'styled-components';
import imagen1 from './imagenes/rueda.jpg';
import imagen2 from './imagenes/sport.jpeg';
import imagen3 from './imagenes/defenderCrudo.jpeg';

// Componentes estilizados
const AboutSectionContainer = styled.div`
    display: flex; /* Usar flexbox para la disposición */
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 5%;

    @media (max-width: 768px) {
        display: none; /* Ocultar contenedor estándar en dispositivos móviles */
    }
`;

const ItemContainer = styled.div`
    flex-direction: column; /* Apilar elementos verticalmente */
    justify-content: space-between; /* Centrar elementos verticalmente */
    flex-wrap: wrap;
    width: 25%; /* Ancho relativo del contenedor */
    padding: 2%; /* Espaciado interno */

    &:hover {
        transform: scale(1.05); /* Agranda el contenedor */
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); /* Sombra para efecto de elevación */
        border-radius: 10px
    }

`;

const TextContainer = styled.div`
    flex: 1; /* Permitir que el contenedor de texto ocupe espacio */
    max-width: 100%; /* Limitar el ancho máximo */   
    border-radius: 10px; /* Bordes redondeados */
    padding: 5%; /* Espaciado interno */
    background: rgba(0, 0, 0, 0.5); /* Fondo semi-transparente */
    color: white;

    
    @media (max-width: 768px) {
        text-align: center; /* Centra el texto */
        padding: 10px; /* Espaciado alrededor del texto */
    }
`;

const ImageContainer = styled.div`
    flex: 1; /* Permitir que el contenedor de imagen ocupe espacio */
    max-width: 100%; /* Limitar el ancho máximo */
    text-align: center; /* Alinear la imagen a la derecha */

`;

const StyledImage = styled.img`
    max-width: 100%; /* Hacer que la imagen ocupe todo el contenedor */
    height: auto; /* Mantener la proporción de la imagen */
    border-radius: 10px; /* Bordes redondeados en la imagen */
     @media (max-width: 768px) {
        max-width: 100%; /* Asegura que la imagen no exceda el ancho del contenedor */
        height: auto; /* Mantiene la proporción de la imagen */
        display: block; /* Asegura que la imagen se comporte como un bloque */
        margin: 0 auto; /* Centra la imagen horizontalmente */
    }
`;



// Componente principal
const AboutSection = () => {
    
    return (
        <>
          

            <AboutSectionContainer>
                <ItemContainer>
                    <ImageContainer>
                        <StyledImage src={imagen1} alt="Taller Automotriz" />
                    </ImageContainer>
                    <TextContainer>
                        <p>En Servi Land Rover, nos especializamos en:</p>
                        <ul>
                            <li>Alineacion y balanceo</li>
                            <li>cambios de aceite</li>
                            <li>Frenos</li>
                            <li>sincronizacion</li>
                            <li>Diagnostico automotriz</li>
                            <li>mantenimiento por kilometraje</li>
                        </ul>
                    </TextContainer>
                </ItemContainer>

                <ItemContainer>
                    <ImageContainer>
                        <StyledImage src={imagen2} alt="suspension" />
                    </ImageContainer>
                    <TextContainer>
                        <p>En Servi Land Rover, nos especializamos en:</p>
                        <ul>
                            <li>Mecánica general</li>
                            <li>Reparacion y mantenimiento de Motor</li>
                            <li>Suspensiones deportivas</li>
                            <li>Cajas de velocidades</li>
                            <li>cajas de Dirección electroasistida</li>
                            <li>Restauraciones totales y parciales de vehículos</li>
                        </ul>
                    </TextContainer>
                </ItemContainer>

                <ItemContainer>
                    <ImageContainer>
                        <StyledImage src={imagen3} alt="suspension" />
                    </ImageContainer>
                    <TextContainer>
                        <p>En Servi Land Rover, nos especializamos en:</p>
                        <ul>
                            <li>Restauraciones totales y parciales de vehículos</li>
                        </ul>
                    </TextContainer>
                </ItemContainer>
            </AboutSectionContainer>
        </>
    );
};

export default AboutSection;