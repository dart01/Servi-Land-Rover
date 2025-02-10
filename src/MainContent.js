import React from 'react';
import styled from 'styled-components';
import fondo from './imagenes/traveling.jpg';
import phoneIcon from './imagenes/phone.png';
import emailIcon from './imagenes/email.png';
import instagramIcon from './imagenes/instagram.png';
import mapIcon from './imagenes/map.png';

const MainContentContainer = styled.div`
    background-image: url(${(props) => props.bgImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    position: relative;
    overflow: hidden; /* Evita desbordamientos */

    @media (max-width: 750px) {
        align-items: center; /* Centra el contenido verticalmente en móviles */
        justify-content: center; /* Centra el contenido horizontalmente en móviles */
    }
`;

const IconsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;

    @media (max-width: 750px) {
        flex-direction: row; /* Mantén los íconos en fila en móviles */
        gap: 15px; /* Reduce el espacio entre íconos en móviles */
        margin-bottom: 10px; /* Reduce el margen inferior en móviles */
    }
`;

const Icon = styled.img`
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.1);
    }

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