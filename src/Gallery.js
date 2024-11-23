// Gallery.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos del carrusel
import image1 from './imagenes/df.jpeg';
import image2 from './imagenes/defenderPuma.png';
import image3 from './imagenes/sport.jpeg';

// Estilos para el contenedor del carrusel
const CarouselContainer = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
`;

// Estilos para cada imagen
const Image = styled.img`
    width: 100%;
    height: auto;
    max-height: 80vh; /* Limita la altura máxima a un 80% de la altura de la ventana */
    object-fit: cover; /* Asegura que la imagen cubra el área del contenedor sin deformarse */
    border-radius: 10px; /* Bordes redondeados */
`;

const Gallery = () => {
    const images = [
        { src: image1, alt: 'Imagen 1' },
        { src: image2, alt: 'Imagen 2' },
        { src: image3, alt: 'Imagen 3' },
        // Agrega más imágenes según sea necesario
    ];

    return (
        <CarouselContainer>
            <h2>Galería</h2>
            <Carousel 
                showArrows={true} 
                infiniteLoop={true} 
                useKeyboardArrows={true} 
                autoPlay={true} 
                interval={3000} 
                stopOnHover={true}
                showThumbs={false} // Ocultar miniaturas
                showStatus={false} // Ocultar estado
            >
                {images.map((image, index) => (
                    <div key={index}>
                        <Image src={image.src} alt={image.alt} />
                    </div>
                ))}
            </Carousel>
        </CarouselContainer>
    );
};

export default Gallery;