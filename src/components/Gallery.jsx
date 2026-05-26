import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import image1 from '../imagenes/santanaFrente.jpg'
import image2 from '../imagenes/puma.jpg'
import image3 from '../imagenes/sport.jpeg'
import image4 from '../imagenes/santanadiscovery.jpg'
import image5 from '../imagenes/convertible2.jpg'
import image6 from '../imagenes/santanaLateral.jpg'
import image7 from '../imagenes/pumaFrente.jpg'
import image8 from '../imagenes/discovery3.jpg'

const Section = styled.section`
  padding: var(--spacing-section) 40px;
  max-width: var(--container-max);
  margin: 0 auto;

  @media (max-width: 750px) {
    padding: var(--spacing-section-mobile) 20px;
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
  margin-bottom: 40px;
`

const CarouselWrap = styled.div`
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--color-border);

  .carousel .slide { background: #0D1F16; }

  .carousel .control-dots {
    bottom: 12px;
  }

  .carousel .control-dots .dot {
    background: var(--color-accent);
    box-shadow: none;
    opacity: 0.4;
    width: 6px;
    height: 6px;
    margin: 0 4px;
  }

  .carousel .control-dots .dot.selected { opacity: 1; }

  .carousel .control-arrow {
    background: rgba(10,10,10,0.5) !important;
    opacity: 1 !important;
    padding: 16px;
  }

  .carousel .control-arrow:hover {
    background: rgba(184,153,106,0.6) !important;
  }

  @media (max-width: 750px) {
    .carousel .control-arrow { display: none; }
  }
`

const Slide = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;

  @media (max-width: 750px) {
    aspect-ratio: 4 / 3;
  }
`

const SlideImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const SlideLabel = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  background: rgba(10, 10, 10, 0.8);
  border: 1px solid var(--color-border);
  backdrop-filter: blur(6px);
  padding: 8px 14px;
  border-radius: var(--radius-pill);
  text-align: left;

  p {
    font-size: 12px;
    font-weight: 500;
    color: var(--color-text);
    margin: 0;
    line-height: 1.4;
  }

  span {
    font-size: 11px;
    color: var(--color-accent);
  }

  @media (max-width: 750px) {
    bottom: 12px;
    left: 12px;
    padding: 6px 12px;
  }
`

const images = [
  { src: image1, model: 'Santana', work: 'Restauración exterior' },
  { src: image2, model: 'Defender Puma', work: 'Revisión general' },
  { src: image3, model: 'Range Rover Sport', work: 'Suspensión deportiva' },
  { src: image4, model: 'Santana Discovery', work: 'Motor y transmisión' },
  { src: image5, model: 'Range Rover Convertible', work: 'Detailing' },
  { src: image6, model: 'Santana', work: 'Vista lateral post-restauración' },
  { src: image7, model: 'Defender Puma', work: 'Preparación offroad' },
  { src: image8, model: 'Discovery 3', work: 'Diagnóstico electrónico' },
]

const Gallery = () => (
  <Section id="galeria">
    <Eyebrow>Nuestro trabajo</Eyebrow>
    <Title>Galería de proyectos</Title>
    <CarouselWrap>
      <Carousel
        showArrows
        infiniteLoop
        useKeyboardArrows
        autoPlay
        interval={4500}
        stopOnHover
        showThumbs={false}
        showStatus={false}
        emulateTouch
        swipeable
      >
        {images.map((img) => (
          <Slide key={img.model + img.work}>
            <SlideImage src={img.src} alt={img.model} loading="lazy" />
            <SlideLabel>
              <p>{img.model}</p>
              <span>{img.work}</span>
            </SlideLabel>
          </Slide>
        ))}
      </Carousel>
    </CarouselWrap>
  </Section>
)

export default Gallery