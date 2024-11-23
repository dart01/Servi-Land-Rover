// App.js
import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import AboutSection from './AboutSection';
import ServicesPlus from './ServicesPlus';
import Gallery from './Gallery';
import FloatingWhatsApp from './FloatingWhatsApp';
import Footer from './Footer';
import  styled from 'styled-components';

 
const ResponsiveDiv = styled.div `
    @media (max-width: 750px){
        background-color:  blue;
    }
`;

const App = () => {
    return (
        <ResponsiveDiv>
            <Header />
            <MainContent />
            <AboutSection />
            <ServicesPlus/>
            <Gallery/>
            <FloatingWhatsApp/>
            <Footer />
        </ResponsiveDiv>
    );
};

export default App;
