// Gallery.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Importa tus imágenes
import image1 from './imagenes/santanaFrente.jpg';
import image2 from './imagenes/puma.jpg';
import image3 from './imagenes/sport.jpeg';
import image4 from './imagenes/convertible1.jpg';
import image5 from './imagenes/convertible2.jpg';
import image6 from './imagenes/santanaLateral.jpg';
import image7 from './imagenes/pumaFrente.jpg';

const CarouselContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    
    @media (max-width: 750px) {
        max-width: 90%;
        padding: 10px;
    }
`;

const ImageContainer = styled.div`
    position: relative;
    aspect-ratio: 16/9;
    overflow: hidden;
    
    @media (max-width: 750px) {
        aspect-ratio: 1/1;
    }
`;

const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
    background: #f0f0f0;
    transition: transform 0.3s ease;
    
    @media (max-width: 750px) {
        object-fit: cover;
    }
`;

const Title = styled.h3`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 8px 20px;
    border-radius: 20px;
    font-size: 1.2rem;
    white-space: nowrap;
    backdrop-filter: blur(2px);
    z-index: 1;
    
    @media (max-width: 750px) {
        font-size: 1rem;
        bottom: 10px;
    }
`;

const Gallery = () => {
    const images = [
        { src: image1, alt: 'Santana de Frente', title: 'Trabajo 1' },
        { src: image2, alt: 'Defender Puma', title: 'Trabajo 2' },
        { src: image3, alt: 'Sport', title: 'Trabajo 3' },
        { src: image4, alt: 'Convertible 1', title: 'Trabajo 4' },
        { src: image5, alt: 'Convertible 2', title: 'Trabajo 5' },
        { src: image6, alt: 'Santana Lateral', title: 'Trabajo 6' },
        { src: image7, alt: 'Puma de Frente', title: 'Trabajo 7' },
    ];

    return (
        <CarouselContainer>
            <h2>Galería</h2>
            <Carousel 
                showArrows={true}
                infiniteLoop={true}
                useKeyboardArrows={true}
                autoPlay={true}
                interval={4000}
                stopOnHover={true}
                showThumbs={false}
                showStatus={false}
                dynamicHeight={false}
                emulateTouch={true}
                swipeable={true}
                centerMode={true}
                centerSlidePercentage={90}
            >
                {images.map((image, index) => (
                    <ImageContainer key={index}>
                        <Image 
                            src={image.src} 
                            alt={image.alt} 
                            loading="lazy"
                            decoding="async"
                        />
                        <Title>{image.title}</Title>
                    </ImageContainer>
                ))}
            </Carousel>
        </CarouselContainer>
    );
};

export default Gallery;