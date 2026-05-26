import styled from 'styled-components'
import { FaWrench, FaCog, FaCarCrash, FaTachometerAlt, FaOilCan, FaStar } from 'react-icons/fa'

const Section = styled.section`
  padding: var(--spacing-section) 40px;
  background: var(--color-surface);

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
  max-width: 560px;
  margin-bottom: 56px;

  @media (max-width: 750px) {
    margin-bottom: 36px;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;

  @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 550px) { grid-template-columns: 1fr; }
`

const Card = styled.div`
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  padding: 32px 24px;
  border-radius: var(--radius-md);
  transition: border-color var(--transition);

  &:hover { border-color: var(--color-accent); }

  @media (max-width: 750px) {
    padding: 24px 20px;
  }
`

const IconWrap = styled.div`
  width: 42px;
  height: 42px;
  border-radius: var(--radius-md);
  background: rgba(184, 153, 106, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent);
  font-size: 17px;
  margin-bottom: 18px;
`

const CardTitle = styled.h3`
  font-size: 15px;
  font-weight: 500;
  color: var(--color-text);
  margin-bottom: 12px;
`

const CardList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const CardItem = styled.li`
  font-size: 13px;
  color: var(--color-text-muted);
  padding-left: 14px;
  position: relative;
  line-height: 1.5;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--color-accent);
  }
`

const services = [
  { icon: <FaOilCan />, title: 'Mantenimiento preventivo', items: ['Cambios de aceite', 'Mantenimiento por kilometraje', 'Revisión de fluidos', 'Filtros'] },
  { icon: <FaTachometerAlt />, title: 'Diagnóstico automotriz', items: ['Diagnóstico electrónico', 'Lectura de códigos de falla', 'Revisión de sistemas', 'Informes técnicos'] },
  { icon: <FaCarCrash />, title: 'Frenos y seguridad', items: ['Frenos delanteros y traseros', 'Alineación y balanceo', 'Revisión ABS', 'Sistema de suspensión'] },
  { icon: <FaCog />, title: 'Motor y transmisión', items: ['Reparación de motor', 'Sincronización', 'Cajas de velocidades', 'Dirección electroasistida'] },
  { icon: <FaWrench />, title: 'Mecánica general', items: ['Suspensiones deportivas', 'Sistema de escape', 'Enfriamiento', 'Eléctrico general'] },
  { icon: <FaStar />, title: 'Restauraciones', items: ['Restauraciones totales', 'Restauraciones parciales', 'Preparación offroad', 'Modificaciones'] },
]

const Services = () => (
  <Section id="servicios">
    <Inner>
      <Eyebrow>Lo que hacemos</Eyebrow>
      <Title>Servicios especializados para tu Land Rover</Title>
      <Grid>
        {services.map((s) => (
          <Card key={s.title}>
            <IconWrap>{s.icon}</IconWrap>
            <CardTitle>{s.title}</CardTitle>
            <CardList>
              {s.items.map((item) => (
                <CardItem key={item}>{item}</CardItem>
              ))}
            </CardList>
          </Card>
        ))}
      </Grid>
    </Inner>
  </Section>
)

export default Services