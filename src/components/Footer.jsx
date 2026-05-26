import styled from 'styled-components'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const FooterEl = styled.footer`
  background: #050505;
  border-top: 1px solid var(--color-border);
  padding: 70px 40px 32px;

  @media (max-width: 750px) {
    padding: 50px 20px 24px;
  }
`

const Inner = styled.div`
  max-width: var(--container-max);
  margin: 0 auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 56px;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    gap: 36px;
    margin-bottom: 40px;
  }
`

const MapWrap = styled.div`
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--color-border);
  aspect-ratio: 16 / 9;

  iframe {
    width: 100%;
    height: 100%;
    display: block;
  }

  @media (max-width: 750px) {
    aspect-ratio: 4 / 3;
  }
`

const ContactTitle = styled.h3`
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--color-text);
  line-height: 1.2;
  margin-bottom: 28px;

  @media (max-width: 750px) {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`

const ContactList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 28px;
`

const ContactItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 14px;
  color: var(--color-text-muted);
  line-height: 1.5;

  svg {
    color: var(--color-accent);
    font-size: 15px;
    margin-top: 2px;
    flex-shrink: 0;
  }

  a {
    color: var(--color-text-muted);
    transition: color var(--transition);
    &:hover { color: var(--color-accent); }
  }
`

const SocialRow = styled.div`
  display: flex;
  gap: 10px;
`

const SocialBtn = styled.a`
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

const Divider = styled.hr`
  border: none;
  border-top: 1px solid var(--color-border);
  margin-bottom: 24px;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;

  p {
    font-size: 12px;
    color: var(--color-text-muted);
  }

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 4px;
  }
`

const Footer = () => (
  <FooterEl id="contacto">
    <Inner>
      <Grid>
        <MapWrap>
          <iframe
            title="Ubicación Servi Land Rover"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.3!2d-74.1037357!3d4.7062721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b4ae3d88941%3A0x97f388eec8208507!2sTaller%20Servi%20Land%20Rover!5e0!3m2!1ses!2sco!4v1"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </MapWrap>
        <div>
          <ContactTitle>Información<br />de contacto</ContactTitle>
          <ContactList>
            <ContactItem><FaPhone /><a href="tel:+573187407550">(318) 740-7550</a></ContactItem>
            <ContactItem><FaEnvelope /><a href="mailto:servilandrover@gmail.com">servilandrover@gmail.com</a></ContactItem>
            <ContactItem><FaMapMarkerAlt /><span>Calle 82 #90-75, Bogotá, Colombia</span></ContactItem>
            <ContactItem><FaClock /><span>Lunes a sábado · 8:00 am – 6:00 pm</span></ContactItem>
          </ContactList>
          <SocialRow>
            <SocialBtn href="https://wa.me/573187407550" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></SocialBtn>
            <SocialBtn href="https://www.instagram.com/servilandrover" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></SocialBtn>
          </SocialRow>
        </div>
      </Grid>
      <Divider />
      <Bottom>
        <p>© {new Date().getFullYear()} Servi Land Rover · Bogotá, Colombia</p>
        <p>Diseñado por Diego Rañó</p>
      </Bottom>
    </Inner>
  </FooterEl>
)

export default Footer