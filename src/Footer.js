// footer.js
import React from 'react';
import styled from 'styled-components';
import imagenMapa from './imagenes/mapa.PNG';

const FooterContainer = styled.div`
    background-color: black;
    color: white;
    padding: 20px 10px;
`;

const ContentRow = styled.div`
    display: flex;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 750px) {
        flex-direction: column;
        align-items: stretch;
    }
`;

const MapContainer = styled.div`
    flex: 1;
    min-width: 300px;
    max-width: 600px;
    cursor: pointer;

    img {
        width: 100%;
        height: auto;
        border-radius: 8px;
        aspect-ratio: 16/9;
    }

    @media (max-width: 750px) {
        width: 100%;
        max-width: 100%;
        margin-bottom: 20px;
        flex: none;
    }
`;

const ContactInfoContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;

    h3 {
        margin-bottom: 15px;
        font-size: 1.5rem;
    }

    p {
        margin: 8px 0;
        font-size: 1rem;
    }

    @media (max-width: 750px) {
        width: 100%;
        flex: none;
        padding: 0;
        text-align: center;
        align-items: center;

        h3 {
            font-size: 1.3rem;
        }
        
        p {
            font-size: 0.9rem;
        }
    }
`;

const Line = styled.hr`
    border: 0.5px solid white;
    margin: 25px auto;
    width: 90%;
    max-width: 1200px;

    @media (max-width: 750px) {
        margin: 20px auto;
    }
`;

const DesignerText = styled.div`
    text-align: center;
    font-size: 0.8rem;
    color: #cccccc;
    padding: 10px 0;
`;

const Footer = () => {
    const mapLink = "https://www.google.com/maps/place/Taller+Servi+Land+Rover/@4.7062721,-74.1037357,18z/data=!4m6!3m5!1s0x8e3f9b4ae3d88941:0x97f388eec8208507!8m2!3d4.7065739!4d-74.1031536!16s%2Fg%2F11b7qf36g8?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D";

    return (
        <FooterContainer>
            <ContentRow>
                <MapContainer onClick={() => window.open(mapLink, '_blank')}>
                    <img src={imagenMapa} alt="Mapa de ubicación" />
                </MapContainer>
                
                <ContactInfoContainer>
                    <h3>Información de Contacto</h3>
                    <p>Teléfono: (318) 740-7550</p>
                    <p>Email: servilandrover@gmail.com</p>
                    <p>Dirección: Calle 82#90-75, Bogotá, Colombia</p>
                    <p>Horario: 8am a 6pm</p>
                </ContactInfoContainer>
            </ContentRow>
            
            <Line />
            
            <DesignerText>Diseñado por Diego Rañó</DesignerText>
        </FooterContainer>
    );
};

export default Footer;