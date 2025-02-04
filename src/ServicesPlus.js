import React from 'react';
import styled from 'styled-components';
import fondo1 from './imagenes/fondo2.jpg';

const ServicesPlusContainer = styled.div`
    display: flex;
    background-image: url(${(props) => props.bgImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    align-items: flex-start;
    justify-content: flex-start;
    color: white;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
    padding: 20px;
    position: relative; 
    @media (max-width: 750px){
        flex-direction: column;
    }
`;

const Title = styled.h1`
    font-size: 4rem;
    margin: 0;
`;

const Button = styled.button`
    position: absolute;
    bottom:10%;
    left: 10%;
    transform: translateX(-50%);
    background: rgba(61, 60, 60, 0.51);
    
    color: black;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

    &:hover {
        background: rgba(61, 60, 60, 0.51);
        border: 3px solid rgba(12, 141, 247, 0.51);
        color: black;
       
    }
`;

const IconsContainer = styled.div`
    position: absolute;
    bottom: 20px;
    display: flex;
    justify-content: center;
    gap: 20px;
`;

const Icon = styled.img`
    width: 40px;
    height: 40px;
    cursor: pointer;
`;

const ServicesPlus = () => {
    const handleScheduleClick = () => {
        // Logic for scheduling an appointment (e.g., open a modal or redirect)
        alert('Agendar Cita clicked!');
    };

    return (
        <ServicesPlusContainer bgImage={fondo1}>
            <div>
                <Title>Taller de mecánica<br />automotriz especializado<br />en Range Rover</Title>
            </div>
            <Button onClick={handleScheduleClick}>Agendar Cita</Button>
        </ServicesPlusContainer>
    );
};

export default ServicesPlus;

