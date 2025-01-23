import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos del carrusel
import imagen1 from './imagenes/rueda.jpg';
import imagen2 from './imagenes/sport.jpeg';
import imagen3 from './imagenes/defenderCrudo.jpeg';

const CarouselContainer = styled.div`
    display: none; /* Ocultar carrusel en pantallas grandes */

    @media (max-width: 768px) {
        display: block; /* Mostrar carrusel en dispositivos móviles */
        width: 100%; /* Ajustar el ancho del contenedor */
        padding: 5%;
    }
`;

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
    transition: transform 0.3s; /* Smooth transition for hover effects */
    &:hover {
        transform: scale(1.05); /* Scale up on hover */
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); /* Shadow effect on hover */
    }
    &:hover {
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); /* Shadow effect on hover */
    }
    flex-direction: column; /* Apilar elementos verticalmente */
    justify-content: space-between; /* Centrar elementos verticalmente */
    flex-wrap: wrap;
    width: 100%; /* Ancho completo en pantallas pequeñas */
    max-width: 300px; /* Limitar el ancho máximo en pantallas grandes */
    padding: 2%; /* Espaciado interno */

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

const diapositivas = [
    {
        imagen: imagen1,
        texto: "En Servi Land Rover, nos especializamos en:",
        lista: [
            "Alineacion y balanceo",
            "cambios de aceite",
            "Frenos",
            "sincronizacion",
            "Diagnostico automotriz",
            "mantenimiento por kilometraje"
        ]
    },
    {
        imagen: imagen2,
        texto: "En Servi Land Rover, nos especializamos en:",
        lista: [
            "Mecánica general",
            "Reparacion y mantenimiento de Motor",
            "Suspensiones deportivas",
            "Cajas de velocidades",
            "cajas de Dirección electroasistida",
            "Restauraciones totales y parciales de vehículos"
        ]
    },
    {
        imagen: imagen3,
        texto: "En Servi Land Rover, nos especializamos en:",
        lista: [
            "Restauraciones totales y parciales de vehículos"
        ]
    }
];

// Componente principal
const AboutSection = () => {
    
    return (
        <>
            <CarouselContainer>
                <Carousel
                    showArrows={true}
                    showStatus={false}
                    showIndicators={true}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={3000}
                    swipeable={true}
                    dynamicHeight={true}
                    emulateTouch={true}
                >
                    {diapositivas.map((diapositiva, index) => (
                        <div key={index}>
                            <StyledImage src={diapositiva.imagen} alt="Taller Automotriz" />
                            <TextContainer>
                                <p>{diapositiva.texto}</p>
                                <ul>
                                    {diapositiva.lista.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </TextContainer>
                        </div>
                    ))}
                </Carousel>
            </CarouselContainer>

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


