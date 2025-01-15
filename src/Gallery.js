// Gallery.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from './imagenes/df.jpeg';
import image2 from './imagenes/defenderPuma.png';
import image3 from './imagenes/sport.jpeg';
import image4 from './imagenes/convertible1.jpg';
import image5 from './imagenes/convertible2.jpg';
import image6 from './imagenes/santanaLateral.jpg';

const CarouselContainer = styled.div`
    display: flex;
    flex-direction: column; /* Asegura que los elementos hijos se dispongan en columna */
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    @media (max-width: 750px){
        max-width: 90%;
    }
`;

const ImageContainer = styled.div`
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    max-height: 80vh;
    object-fit: cover;
    border-radius: 10px;
    @media (max-width: 750px){
        max-width: 70%;
    }
`;

const Title = styled.h3`
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 5px;
`;

const Gallery = () => {
    const images = [
        { src: image1, alt: 'Imagen 1', title: 'Trabajo 1' },
        { src: image2, alt: 'Imagen 2', title: 'Trabajo 2' },
        { src: image3, alt: 'Imagen 3', title: 'Trabajo 3' },
        { src: image4, alt: 'Imagen 4', title: 'Trabajo 4' },
        { src: image5, alt: 'Imagen 5', title: 'Trabajo 5' },
        { src: image6, alt: 'Imagen 6', title: 'Trabajo 6' },
    ];

    return (
        <CarouselContainer>
            <h2>Galería</h2> {/* Aquí se coloca el h2 antes del carrusel */}
            <Carousel 
                showArrows={true} 
                infiniteLoop={true} 
                useKeyboardArrows={true} 
                autoPlay={true} 
                interval={3000} 
                stopOnHover={true}
                showThumbs={false}
                showStatus={false}
            >
                {images.map((image, index) => (
                    <ImageContainer key={index}>
                        <Image src={image.src} alt={image.alt} />
                        <Title>{image.title}</Title>
                    </ImageContainer>
                ))}
            </Carousel>
        </CarouselContainer>
    );
};

export default Gallery;
