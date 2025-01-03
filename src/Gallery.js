// Gallery.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos del carrusel
import image1 from './imagenes/df.jpeg';
import image2 from './imagenes/defenderPuma.png';
import image3 from './imagenes/sport.jpeg';
import image4 from './imagenes/convertible1.jpg';
import image5 from './imagenes/convertible2.jpg';
import image6 from './imagenes/santanaLateral.jpg';


// Estilos para el contenedor del carrusel
const CarouselContainer = styled.div`
     display: flex; 
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    @media (max-width: 750px){
        flex-direction: column;
        max-width:90%;
    }
`;

// Estilos para cada imagen
const Image = styled.img`
    width: 100%;
    height: auto;
    max-height: 80vh; /* Limita la altura máxima a un 80% de la altura de la ventana */
    object-fit: cover; /* Asegura que la imagen cubra el área del contenedor sin deformarse */
    border-radius: 10px; /* Bordes redondeados */
    @media (max-width: 750px){
        max-width:70%;
    }

`;

const Gallery = () => {
    const images = [
        { src: image1, alt: 'Imagen 1' },
        { src: image2, alt: 'Imagen 2' },
        { src: image3, alt: 'Imagen 3' },
        { src: image4, alt: 'Imagen 4' },
        { src: image5, alt: 'Imagen 5' },
        { src: image6, alt: 'Imagen 6' },
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