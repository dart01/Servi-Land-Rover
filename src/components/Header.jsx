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
    $scrolled ? 'rgba(10, 10, 10, 0.92)' : 'rgba(10, 10, 10, 0.4)'};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: 1000;
  transition: background var(--transition);

  @media (max-width: 750px) {
    width: calc(100% - 32px);
    top: 12px;
    padding: 10px 18px;
  }
`

const LogoText = styled.a`
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-text);
  letter-spacing: 0.02em;
  white-space: nowrap;
`

const DesktopLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 4px;

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
  white-space: nowrap;

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

  @media (max-width: 750px) {
    display: none;
  }
`

const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;

  span {
    display: block;
    width: 20px;
    height: 1.5px;
    background: var(--color-text);
    border-radius: 2px;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  ${({ $open }) => $open && `
    span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
    span:nth-child(2) { opacity: 0; transform: scaleX(0); }
    span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }
  `}

  @media (max-width: 750px) {
    display: flex;
  }
`

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: rgba(10, 10, 10, 0.97);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    z-index: 999;
    justify-content: center;
    align-items: center;
    gap: 4px;
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    pointer-events: ${({ $open }) => ($open ? 'all' : 'none')};
    transition: opacity 0.3s ease;
  }
`

const MobileLink = styled.a`
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--color-text);
  padding: 10px 20px;
  transition: color var(--transition);

  &:hover {
    color: var(--color-accent);
  }
`

const MobileCTA = styled.a`
  margin-top: 28px;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-bg);
  background: var(--color-accent);
  padding: 14px 36px;
  border-radius: var(--radius-pill);
  transition: background var(--transition);

  &:hover {
    background: var(--color-accent-light);
  }
`

const links = [
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#galeria', label: 'Galería' },
  { href: '#contacto', label: 'Contacto' },
]

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <Nav $scrolled={scrolled}>
        <LogoText href="#inicio" onClick={close}>Servi Land Rover</LogoText>

        <DesktopLinks>
          {links.map((l) => (
            <li key={l.href}>
              <NavLink href={l.href}>{l.label}</NavLink>
            </li>
          ))}
        </DesktopLinks>

        <CTAButton href="https://wa.me/573187407550" target="_blank" rel="noopener noreferrer">
          Agendar cita
        </CTAButton>

        <Hamburger
          $open={open}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span />
          <span />
          <span />
        </Hamburger>
      </Nav>

      <MobileMenu $open={open}>
        {links.map((l) => (
          <MobileLink key={l.href} href={l.href} onClick={close}>
            {l.label}
          </MobileLink>
        ))}
        <MobileCTA
          href="https://wa.me/573187407550"
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
        >
          Agendar cita
        </MobileCTA>
      </MobileMenu>
    </>
  )
}

export default Header