// footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    display: flex; /* Corrige el error tipográfico aquí */
    background-color: black; /* Color de fondo negro */
    color: white; /* Color del texto blanco */
    padding: 20px; /* Espaciado interno */
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
`;

const Footer = () => {
    // Coordenadas de la ubicación del taller (ejemplo)
    const latitude = 40.712776; // Reemplaza con la latitud de tu taller
    const longitude = -74.005974; // Reemplaza con la longitud de tu taller

    return (
        <FooterContainer>
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
                <p>Teléfono: (123) 456-7890</p> {/* Reemplaza con tu número */}
                <p>Email: contacto@ejemplo.com</p> {/* Reemplaza con tu correo */}
                <p>Dirección: Calle Ejemplo 123, Ciudad, País</p> {/* Reemplaza con tu dirección */}
            </ContactInfoContainer>
        </FooterContainer>
    );
};

export default Footer;