// footer.js
import React from 'react';
import styled from 'styled-components';
import imagenMapa from './imagenes/mapa.PNG';

const FooterContainer = styled.div`
    display: flex; /* Contenedor principal en horizontal */
    background-color: black; /* Color de fondo negro */
    color: white; /* Color del texto blanco */
    padding: 20px; /* Espaciado interno */
    flex-direction: column; /* Cambia a columna para los elementos internos */

    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

const ContentRow = styled.div`
    display: flex; /* Contenedor para el mapa y la información de contacto en horizontal */
    flex: 1; /* Ocupa todo el espacio disponible */
    flex-wrap: wrap; /* Permite que los elementos se envuelvan en pantallas pequeñas */

    @media (max-width: 750px) {
        flex-direction: column; /* Cambia a columna en pantallas pequeñas */
    }
`;

const MapContainer = styled.div`
    flex: 1; 
    height: 10%; /* Altura del mapa */
    margin-right: 10%; /* Margen derecho para separación */
    cursor: pointer; /* Cambia el cursor a mano al pasar por encima */
    
    @media (max-width: 750px) {
        margin-right: 0; /* Elimina el margen en pantallas pequeñas */
        height: 10%; /* Ajusta la altura del mapa en pantallas pequeñas */
    }

    img {
        width: 90%; /* Ocupa todo el ancho disponible */
        height: 90%; /* Ocupa toda la altura disponible */
        object-fit: cover; /* Asegura que la imagen se ajuste al contenedor sin deformarse */
    }
`;

const ContactInfoContainer = styled.div`
    flex: 1; /* La información de contacto ocupa el 50% del espacio disponible */
    display: flex;
    flex-direction: column; /* Coloca los elementos en columna */
    justify-content: center; /* Centra verticalmente los elementos */
    line-height: 1.2; /* Ajusta el interlineado */
    align-items: center; /* Centra horizontalmente los elementos */

    @media (max-width: 750px) {
        align-items: flex-start; /* Alinear a la izquierda en pantallas pequeñas */
    }
`;

const Line = styled.div`
    border-top: 1px solid white; /* Línea blanca en la parte superior */
    margin: 20px 0; /* Espaciado superior e inferior */
`;

const DesignerText = styled.div`
    text-align: right; /* Alinear a la derecha */
    font-size: 12px; /* Tamaño de fuente más pequeño */
    color: white; /* Color del texto */
`;

const Footer = () => {
    const mapLink = "https://www.google.com/maps/place/Taller+Servi+Land+Rover/@4.7062721,-74.1037357,18z/data=!4m6!3m5!1s0x8e3f9b4ae3d88941:0x97f388eec8208507!8m2!3d4.7065739!4d-74.1031536!16s%2Fg%2F11b7qf36g8?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"; // Reemplaza con tu enlace de Google Maps

    return (
        <FooterContainer>
            <ContentRow>
                <MapContainer onClick={() => window.open(mapLink, '_blank')}>
                    <img src={imagenMapa} alt="Mapa de ubicación" />
                </MapContainer>
                <ContactInfoContainer>
                    <h3>Información de Contacto</h3>
                    <p>Teléfono: (318) 740-7550</p> {/* Reemplaza con tu número */}
                    <p>Email: servilandrover@gmail.com</p> {/* Reemplaza con tu correo */}
                    <p>Dirección: Calle 82#90-75, Bogotá, Colombia</p> {/* Reemplaza con tu dirección */}
                    <p>Horario: 8am a 6pm</p>
                </ContactInfoContainer>
            </ContentRow>
            <Line /> {/* Línea en la parte inferior */}
            <DesignerText>Diseñado por Diego Rañó</DesignerText> {/* Texto a la derecha */}
        </FooterContainer>
    );
};

export default Footer;
