import styled from 'styled-components'
import { FaPhone, FaEnvelope, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'
import fondo from '../imagenes/fondoPrincipal.png'

const Section = styled.section`
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 40px 70px;
  overflow: hidden;

  @media (max-width: 750px) {
    padding: 0 20px 50px;
  }
`

const BgImage = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${fondo});
  background-size: cover;
  background-position: center;
  opacity: 0.45;
  z-index: 0;
`

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(10, 10, 10, 0.95) 0%,
    rgba(10, 10, 10, 0.4) 50%,
    rgba(10, 10, 10, 0.1) 100%
  );
  z-index: 1;
`

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: var(--container-max);
  width: 100%;
`

const Eyebrow = styled.p`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 18px;
`

const Title = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 7vw, 5.5rem);
  font-weight: 600;
  line-height: 1.05;
  color: var(--color-text);
  margin-bottom: 20px;

  span { color: var(--color-accent); }
`

const Subtitle = styled.p`
  font-size: clamp(0.95rem, 1.5vw, 1.1rem);
  color: var(--color-text-muted);
  max-width: 520px;
  margin-bottom: 36px;
  line-height: 1.7;
`

const Buttons = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 56px;
`

const BtnPrimary = styled.a`
  font-size: 14px;
  font-weight: 500;
  background: var(--color-accent);
  color: var(--color-bg);
  padding: 14px 32px;
  border-radius: var(--radius-pill);
  transition: background var(--transition);

  &:hover { background: var(--color-accent-light); }
`

const BtnSecondary = styled.a`
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text);
  padding: 14px 32px;
  border-radius: var(--radius-pill);
  border: 1px solid rgba(245, 242, 237, 0.25);
  transition: border-color var(--transition), background var(--transition);

  &:hover {
    border-color: rgba(245, 242, 237, 0.5);
    background: rgba(245, 242, 237, 0.06);
  }
`

const SocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`

const SocialLink = styled.a`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  font-size: 15px;
  transition: color var(--transition), border-color var(--transition);

  &:hover {
    color: var(--color-accent);
    border-color: var(--color-accent);
  }
`

const Hero = () => (
  <Section id="inicio">
    <BgImage />
    <Overlay />
    <Content>
      <Eyebrow>Bogotá, Colombia · Especialistas certificados</Eyebrow>
      <Title>
        Taller especializado<br />
        en <span>Land Rover</span>
      </Title>
      <Subtitle>
        Diagnóstico, mantenimiento y restauración con más de 25 años
        de experiencia exclusiva en la marca. Tu vehículo en manos que
        lo conocen a fondo.
      </Subtitle>
      <Buttons>
        <BtnPrimary href="https://wa.me/573187407550" target="_blank" rel="noopener noreferrer">
          Agendar cita
        </BtnPrimary>
        <BtnSecondary href="#servicios">Ver servicios</BtnSecondary>
      </Buttons>
      <SocialRow>
        <SocialLink href="tel:+573187407550"><FaPhone /></SocialLink>
        <SocialLink href="mailto:servilandrover@gmail.com"><FaEnvelope /></SocialLink>
        <SocialLink href="https://www.instagram.com/servilandrover" target="_blank" rel="noopener noreferrer"><FaInstagram /></SocialLink>
        <SocialLink href="https://www.google.com/maps/place/Taller+Servi+Land+Rover/@4.7062721,-74.1037357" target="_blank" rel="noopener noreferrer"><FaMapMarkerAlt /></SocialLink>
      </SocialRow>
    </Content>
  </Section>
)

export default Hero