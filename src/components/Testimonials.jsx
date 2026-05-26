import styled from 'styled-components'
import { FaStar } from 'react-icons/fa'

const Section = styled.section`
  padding: var(--spacing-section) 40px;
  background: var(--color-primary);

  @media (max-width: 750px) {
    padding: var(--spacing-section-mobile) 20px;
  }
`

const Inner = styled.div`
  max-width: var(--container-max);
  margin: 0 auto;
`

const Eyebrow = styled.p`
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 16px;
`

const Title = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  color: var(--color-text);
  line-height: 1.15;
  margin-bottom: 48px;

  @media (max-width: 750px) {
    margin-bottom: 32px;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 550px) { grid-template-columns: 1fr; }
`

const Card = styled.div`
  background: rgba(10, 10, 10, 0.35);
  border: 1px solid rgba(245, 242, 237, 0.1);
  border-radius: var(--radius-md);
  padding: 28px 24px;
  display: flex;
  flex-direction: column;

  @media (max-width: 750px) {
    padding: 22px 18px;
  }
`

const Stars = styled.div`
  display: flex;
  gap: 4px;
  color: var(--color-accent);
  font-size: 12px;
  margin-bottom: 16px;
`

const Quote = styled.p`
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-style: italic;
  color: var(--color-text);
  line-height: 1.65;
  margin-bottom: 20px;
  flex: 1;
`

const AuthorName = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text);
  margin-bottom: 3px;
`

const AuthorCar = styled.p`
  font-size: 12px;
  color: var(--color-accent);
  letter-spacing: 0.02em;
`

const testimonials = [
  {
    quote: 'Llevé mi Discovery 3 con un problema en la suspensión neumática que otros talleres no lograban resolver. En Servi Land Rover lo diagnosticaron en horas y en dos días estaba listo.',
    name: 'Andrés Morales',
    car: 'Discovery 3 · Diagnóstico y suspensión',
  },
  {
    quote: 'Lo que más valoro es que se especializan solo en Land Rover. Eso se nota en el conocimiento del mecánico y en la confianza que te transmiten.',
    name: 'Carolina Restrepo',
    car: 'Range Rover Sport · Mantenimiento',
  },
  {
    quote: 'Restauración completa de mi Santana, quedó mejor que cuando la compré. El equipo es muy profesional, te mantienen informado en todo momento.',
    name: 'Felipe Gutiérrez',
    car: 'Santana · Restauración total',
  },
]

const Testimonials = () => (
  <Section>
    <Inner>
      <Eyebrow>Lo que dicen nuestros clientes</Eyebrow>
      <Title>Resultados que hablan solos</Title>
      <Grid>
        {testimonials.map((t) => (
          <Card key={t.name}>
            <Stars>{[...Array(5)].map((_, i) => <FaStar key={i} />)}</Stars>
            <Quote>"{t.quote}"</Quote>
            <AuthorName>{t.name}</AuthorName>
            <AuthorCar>{t.car}</AuthorCar>
          </Card>
        ))}
      </Grid>
    </Inner>
  </Section>
)

export default Testimonials