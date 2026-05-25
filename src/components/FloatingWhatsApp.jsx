import styled from 'styled-components'
import { FaWhatsapp } from 'react-icons/fa'

const Wrapper = styled.div`
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;

  &:hover .tooltip { opacity: 1; transform: translateY(0); }

  @media (max-width: 750px) { bottom: 20px; right: 20px; }
  @media (max-width: 420px) { bottom: 16px; right: 16px; }
`


const Tooltip = styled.span`
  font-size: 12px;
  font-weight: 500;
  background: var(--color-surface);
  color: var(--color-text);
  padding: 6px 12px;
  border-radius: var(--radius-pill);
  border: 1px solid var(--color-border);
  white-space: nowrap;
  opacity: 0;
  transform: translateY(4px);
  transition: opacity var(--transition), transform var(--transition);
  pointer-events: none;
`

const Button = styled.a`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: #25D366;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.35);
  transition: background var(--transition), transform var(--transition);

  &:hover { background: #1ebe59; transform: scale(1.08); }
`

const FloatingWhatsApp = () => (
  <Wrapper>
    <Tooltip className="tooltip">¿Hablamos?</Tooltip>
    <Button href="https://wa.me/573187407550" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
      <FaWhatsapp />
    </Button>
  </Wrapper>
)

export default FloatingWhatsApp