// MainContent.js
import React from 'react';
import styled from 'styled-components';
import fondo from './imagenes/traveling.jpg';
import phoneIcon from './imagenes/phone.png';
import emailIcon from './imagenes/email.png';
import instagramIcon from './imagenes/instagram.png';
import mapIcon from './imagenes/map.png'; // Asegúrate de que la ruta sea correcta

const MainContentContainer = styled.div`
    background-image: url(${(props) => props.bgImage});
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100vw:
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    position: relative; 
    
    @media (max-width: 1024px) {
        height: 80vh; /* Adjust height for smaller screens */
        width: 100%; /* Full width */
        background-size: cover; /* Ensure the background covers the area without repeating */
        padding: 15px;
    }

    @media (max-width: 750px) {
        flex-direction: column;
        height: 100vh;
        width: 100vh;
    }
`;

const IconsContainer = styled.div`
    position: absolute;
    bottom: 20px;
    display: flex;
    justify-content: center;
    gap: 20px;

    @media (max-width: 750px) {
        margin-top: 20px;
    }
`;

const Icon = styled.img`
    width: 40px;
    height: 40px;
    cursor: pointer;
    
    @media (max-width: 750px) {
        width: 30px;
        height: 30px;
    }
`;

const MainContent = () => {
    return (
        <MainContentContainer bgImage={fondo}>
            <IconsContainer>
                <a href="tel:+3187407550">
                    <Icon src={phoneIcon} alt="Teléfono" />
                </a>
                <a href="mailto:servilandrover@gmail.com">
                    <Icon src={emailIcon} alt="Email" />
                </a>
                <a href="https://www.instagram.com/tu_instagram" target="_blank" rel="noopener noreferrer">
                    <Icon src={instagramIcon} alt="Instagram" />
                </a>
                <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
                    <Icon src={mapIcon} alt="Maps" />
                </a>
            </IconsContainer>
        </MainContentContainer>
    );
};

export default MainContent;
