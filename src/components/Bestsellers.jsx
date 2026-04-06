import React from 'react';
import { motion } from 'framer-motion';

const Bestsellers = () => {
  const products = [
    {
      id: 1,
      name: 'Pure Argan Elixir',
      price: '€ 34,95',
      image: '/assets/pure_argan_oil_bottle_1775474057753.png',
      tag: 'Bestseller'
    },
    {
      id: 2,
      name: 'Hydraterende Dagcrème',
      price: '€ 42,50',
      image: '/assets/skincare_clay_mask_1775474070056.png',
      tag: ''
    },
    {
      id: 3,
      name: 'Moroccan Rhassoul Masker',
      price: '€ 29,95',
      image: '/assets/skincare_clay_mask_1775474070056.png',
      tag: 'Nieuw'
    },
    {
      id: 4,
      name: 'Gouden Lichaamsolie',
      price: '€ 39,00',
      image: '/assets/pure_argan_oil_bottle_1775474057753.png',
      tag: ''
    }
  ];

  return (
    <section className="section bg-light">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Onze Bestsellers</h2>
          <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--color-gold)', margin: '0 auto' }}></div>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '40px' 
        }}>
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ cursor: 'pointer', group: 'product-card' }}
            >
              <div style={{ 
                position: 'relative', 
                backgroundColor: '#fff', 
                padding: '20px',
                height: '350px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                {product.tag && (
                  <span style={{
                    position: 'absolute',
                    top: '15px',
                    left: '15px',
                    backgroundColor: 'var(--color-dark)',
                    color: 'var(--color-white)',
                    padding: '5px 12px',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    zIndex: 2
                  }}>
                    {product.tag}
                  </span>
                )}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  style={{ 
                    maxHeight: '100%', 
                    maxWidth: '100%', 
                    objectFit: 'contain',
                    transition: 'transform 0.5s ease',
                  }} 
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '20px 0', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{product.name}</h3>
                <p style={{ color: 'var(--color-gold-dark)', fontWeight: '500', marginBottom: '20px' }}>{product.price}</p>
                <button className="btn-outline" style={{ width: '100%', padding: '10px' }}>
                  In Winkelwagen
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
