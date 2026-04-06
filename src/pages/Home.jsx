import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import Bestsellers from '../components/Bestsellers';

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <Bestsellers />
      
      {/* Intro section */}
      <section className="section" style={{ backgroundColor: 'var(--color-sand)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Het Geheim van Marokko</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '40px' }}>
            Al eeuwenlang wordt Arganolie geroemd om haar herstellende en voedende eigenschappen. 
            Bij Maroccare brengen we de puurste vorm van dit 'vloeibare goud' direct vanuit 
            de Marokkaanse landbouw naar jouw dagelijkse verzorgingsroutine.
          </p>
          <a href="/about" className="btn-primary">Lees Ons Verhaal</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
