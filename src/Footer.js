// footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    display: flex; /* Contenedor principal en horizontal */
    background-color: black; /* Color de fondo negro */
    color: white; /* Color del texto blanco */
    padding: 20px; /* Espaciado interno */
    flex-direction: column; /* Cambia a columna para los elementos internos */
`;

const ContentRow = styled.div`
    display: flex; /* Contenedor para el mapa y la información de contacto en horizontal */
    flex: 1; /* Ocupa todo el espacio disponible */
`;

const MapContainer = styled.div`
    flex: 1; 
    height: 300px; /* Altura del mapa */
    margin-right: 20px; /* Margen derecho para separación */
`;

const ContactInfoContainer = styled.div`
    flex: 1; /* La información de contacto ocupa el 50% del espacio disponible */
    display: flex;
    flex-direction: column; /* Coloca los elementos en columna */
    justify-content: center; /* Centra verticalmente los elementos */
    line-height: 1.2; /* Ajusta el interlineado */
    align-items: center; /* Centra horizontalmente los elementos */
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
    // Coordenadas de la ubicación del taller (ejemplo)
    const latitude = 40.712776; // Reemplaza con la latitud de tu taller
    const longitude = -74.005974; // Reemplaza con la longitud de tu taller

    return (
        <FooterContainer>
            <ContentRow>
                <MapContainer>
                    <iframe
                        title="Google Maps"
                        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${latitude},${longitude}`}
                        width="100%" /* Cambiar a 100% para que ocupe todo el ancho */
                        height="100%"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen
                    ></iframe>
                </MapContainer>
                <ContactInfoContainer>
                    <h3>Información de Contacto</h3>
                    <p>Teléfono: (318)7407550</p> {/* Reemplaza con tu número */}
                    <p>Email: servilandrover@gmail.com</p> {/* Reemplaza con tu correo */}
                    <p>Dirección: Calle 82#90-75, Bogota, Colombia</p> {/* Reemplaza con tu dirección */}
                    <p>Horario: 8am a 6pm</p>
                </ContactInfoContainer>
            </ContentRow>
            <Line /> {/* Línea en la parte inferior */}
            <DesignerText>Diseñado por Diego Rañó</DesignerText> {/* Texto a la derecha */}
        </FooterContainer>
    );
};

export default Footer;