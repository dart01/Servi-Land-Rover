import styled from 'styled-components'
import { FaWhatsapp } from 'react-icons/fa'

const Section = styled.section`
  padding: 90px 40px;
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);

  @media (max-width: 750px) {
    padding: 60px 20px;
  }
`

const Inner = styled.div`
  max-width: 660px;
  margin: 0 auto;
  text-align: center;
`

const Eyebrow = styled.p`
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 20px;
`

const Title = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 600;
  color: var(--color-text);
  line-height: 1.15;
  margin-bottom: 16px;
`

const Subtitle = styled.p`
  font-size: 15px;
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: 36px;

  @media (max-width: 750px) {
    font-size: 14px;
  }
`

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 500;
  background: #25D366;
  color: #fff;
  padding: 15px 34px;
  border-radius: var(--radius-pill);
  transition: background var(--transition), transform var(--transition);

  svg { font-size: 20px; }

  &:hover {
    background: #1ebe59;
    transform: translateY(-2px);
  }

  @media (max-width: 750px) {
    font-size: 14px;
    padding: 14px 28px;
    width: 100%;
    justify-content: center;
  }
`

const AppointmentCTA = () => (
  <Section>
    <Inner>
      <Eyebrow>Agenda tu cita hoy</Eyebrow>
      <Title>¿Tu Land Rover necesita atención?</Title>
      <Subtitle>
        Escríbenos por WhatsApp y te respondemos en minutos. Cuéntanos
        el modelo y el problema — nuestro equipo te orienta sin costo.
      </Subtitle>
      <CTAButton href="https://wa.me/573187407550" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
        Escribir por WhatsApp
      </CTAButton>
    </Inner>
  </Section>
)

export default AppointmentCTA