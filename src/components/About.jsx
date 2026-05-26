import styled from 'styled-components'

const Section = styled.section`
  padding: var(--spacing-section) 40px;
  max-width: var(--container-max);
  margin: 0 auto;

  @media (max-width: 750px) {
    padding: var(--spacing-section-mobile) 20px;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 900px) {
    gap: 48px;
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
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
  margin-bottom: 24px;
`

const Body = styled.p`
  font-size: 15px;
  color: var(--color-text-muted);
  line-height: 1.8;
  margin-bottom: 16px;
`

const Divider = styled.div`
  width: 40px;
  height: 1px;
  background: var(--color-accent);
  margin: 32px 0;
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
`

const StatCard = styled.div`
  background: var(--color-surface);
  padding: 36px 28px;
  border: 1px solid var(--color-border);

  &:first-child  { border-radius: var(--radius-md) 0 0 0; }
  &:nth-child(2) { border-radius: 0 var(--radius-md) 0 0; }
  &:nth-child(3) { border-radius: 0 0 0 var(--radius-md); }
  &:last-child   { border-radius: 0 0 var(--radius-md) 0; }

  @media (max-width: 750px) {
    padding: 24px 18px;
  }
`

const StatNum = styled.p`
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 600;
  color: var(--color-accent);
  line-height: 1;
  margin-bottom: 8px;
`

const StatLabel = styled.p`
  font-size: 13px;
  color: var(--color-text-muted);
  line-height: 1.5;

  @media (max-width: 750px) {
    font-size: 12px;
  }
`

const stats = [
  { num: '+25', label: 'Años de experiencia' },
  { num: '+2K', label: 'Vehículos atendidos' },
  { num: '100%', label: 'Especialización en Land Rover' },
  { num: '1', label: 'Marca, toda la atención' },
]

const About = () => (
  <Section id="nosotros">
    <Grid>
      <div>
        <Eyebrow>Quiénes somos</Eyebrow>
        <Title>Una sola marca.<br />Toda la experiencia.</Title>
        <Body>
          En Servi Land Rover nos dedicamos exclusivamente a vehículos
          Land Rover y Range Rover. Esa especialización no es un límite
          — es nuestra mayor fortaleza.
        </Body>
        <Body>
          Conocemos cada modelo, cada generación y cada sistema en
          profundidad. Cuando traes tu vehículo, no lo recibe un taller
          generalista: lo recibe un equipo que ha trabajado con esa
          misma plataforma cientos de veces.
        </Body>
        <Divider />
        <Body>
          Ubicados en Calle 82 #90-75, Bogotá. Atendemos de lunes a
          sábado de 8am a 6pm.
        </Body>
      </div>
      <StatsGrid>
        {stats.map((s) => (
          <StatCard key={s.label}>
            <StatNum>{s.num}</StatNum>
            <StatLabel>{s.label}</StatLabel>
          </StatCard>
        ))}
      </StatsGrid>
    </Grid>
  </Section>
)

export default About