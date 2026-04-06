import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      image: '/assets/argan_landscape_hero_1775474028006.png',
      title: 'De Oorsprong van Schoonheid',
      subtitle: 'Ontdek onze ambachtelijke Argan landbouw in Marokko',
    },
    {
      id: 2,
      image: '/assets/pure_argan_oil_bottle_1775474057753.png',
      title: 'Puur Argan Elixir',
      subtitle: '100% biologisch en koudgeperst voor optimale verzorging',
    },
    {
      id: 3,
      image: '/assets/skincare_clay_mask_1775474070056.png',
      title: 'Moroccan Clay Collection',
      subtitle: 'Diepe reiniging met authentieke Rhassoul klei',
    }
  ];

  return (
    <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        style={{ height: '100%', width: '100%' }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
              {/* Overlay for text readability */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.35)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                textAlign: 'center',
                padding: '0 20px'
              }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', letterSpacing: '0.05em' }}>
                    {slide.title}
                  </h1>
                  <p style={{ fontSize: '1.2rem', fontFamily: 'var(--font-sans)', maxWidth: '600px', margin: '0 auto 30px', fontWeight: 300, letterSpacing: '0.05em' }}>
                    {slide.subtitle}
                  </p>
                  <button className="btn-primary" style={{ backgroundColor: 'var(--color-gold)', color: 'white', border: '1px solid var(--color-gold)' }}>
                    Ontdek de Collectie
                  </button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
