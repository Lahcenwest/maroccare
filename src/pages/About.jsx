import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '60px' }}>
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{ flex: '1 1 500px' }}
            >
              <img 
                src="/assets/argan_landscape_hero_1775474028006.png" 
                alt="Argan Oogst Marokko" 
                style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ flex: '1 1 500px' }}
            >
              <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: 'var(--color-dark)' }}>Onze Oorsprong</h1>
              <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--color-gold)', marginBottom: '30px' }}></div>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '20px', color: '#555' }}>
                Maroccare is ontstaan uit een diepe waardering voor de eeuwenoude Marokkaanse schoonheidsrituelen. 
                De kern van onze collectie wordt gevormd door de zeldzame Arganboom, die uitsluitend groeit in de 
                woestijnachtige vlaktes van Zuidwest-Marokko.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555' }}>
                Wij werken direct samen met lokale boerengemeenschappen. Zij oogsten de noten met respect voor de natuur en 
                persen deze op ambachtelijke wijze koud. Zo garanderen wij niet alleen de hoogste kwaliteit 'vloeibaar goud', 
                maar dragen we ook bij aan eerlijke handel en duurzame landbouw.
              </p>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
