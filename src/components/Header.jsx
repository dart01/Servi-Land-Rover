import { useState, useEffect } from 'react'
import styled from 'styled-components'

const Nav = styled.header`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 60px);
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  border-radius: var(--radius-pill);
  border: 1px solid var(--color-border);
  background: ${({ $scrolled }) =>
    $scrolled ? 'rgba(10, 10, 10, 0.85)' : 'rgba(10, 10, 10, 0.4)'};
  backdrop-filter: blur(12px);
  z-index: 1000;
  transition: background var(--transition);

  @media (max-width: 750px) {
    width: calc(100% - 32px);
    top: 12px;
    padding: 10px 18px;
  }

  @media (max-width: 420px) {
    padding: 8px 14px;
    top: 10px;
    border-radius: 38px;
  }
`


const LogoText = styled.a`
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--color-text);
  letter-spacing: 0.02em;
`

const Links = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 750px) {
    display: none;
  }
`

const NavLink = styled.a`
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text-muted);
  padding: 6px 14px;
  border-radius: var(--radius-pill);
  transition: color var(--transition), background var(--transition);

  &:hover {
    color: var(--color-text);
    background: rgba(255, 255, 255, 0.06);
  }
`

const CTAButton = styled.a`
  font-size: 13px;
  font-weight: 500;
  color: var(--color-bg);
  background: var(--color-accent);
  padding: 8px 20px;
  border-radius: var(--radius-pill);
  transition: background var(--transition);
  white-space: nowrap;

  &:hover {
    background: var(--color-accent-light);
  }
`

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Nav $scrolled={scrolled}>
      <LogoText href="#inicio">Servi Land Rover</LogoText>
      <Links>
        <li><NavLink href="#nosotros">Nosotros</NavLink></li>
        <li><NavLink href="#servicios">Servicios</NavLink></li>
        <li><NavLink href="#galeria">Galería</NavLink></li>
        <li><NavLink href="#contacto">Contacto</NavLink></li>
      </Links>
      <CTAButton href="https://wa.me/573187407550" target="_blank" rel="noopener noreferrer">
        Agendar cita
      </CTAButton>
    </Nav>
  )
}

export default Header