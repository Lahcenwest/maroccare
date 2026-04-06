import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const Checkout = () => {
  return (
    <div style={{ paddingTop: '100px', minHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
      <section className="section" style={{ flexGrow: 1 }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '40px', color: 'var(--color-dark)' }}>Jouw Winkelwagen</h1>
          
          <div style={{ padding: '40px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
              <div style={{ padding: '20px', borderRadius: '50%', backgroundColor: 'var(--color-sand)', opacity: 0.8 }}>
                <ShoppingBag size={40} color="var(--color-dark)" />
              </div>
            </div>
            
            <p style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '40px', color: '#555' }}>
              Je winkelwagen is momenteel nog leeg. Laten we hem vullen met luxe!
            </p>

            <div style={{ borderTop: '1px solid #eee', paddingTop: '30px', marginTop: '30px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', textAlign: 'center' }}>Hoe wil je betalen?</h3>
              <p style={{ textAlign: 'center', color: '#777', marginBottom: '30px', fontSize: '0.95rem' }}>
                Om de beste en veiligste ervaring te bieden, werken wij samen met <strong>Klarna</strong> voor achteraf betalen en bieden we <strong>iDEAL</strong> voor snelle, directe verwerking.
              </p>
              
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                {/* Mock Klarna Button */}
                <button style={{ 
                  backgroundColor: '#ffb3c7', 
                  color: '#0a0b09', 
                  padding: '16px 32px', 
                  borderRadius: '25px', 
                  fontWeight: 'bold', 
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  Betaal met Klarna <ArrowRight size={18} />
                </button>
                
                 {/* Mock iDEAL Button */}
                 <button style={{ 
                  backgroundColor: '#00cc66', 
                  color: '#fff', 
                  padding: '16px 32px', 
                  borderRadius: '25px', 
                  fontWeight: 'bold', 
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  Betaal met iDEAL <ArrowRight size={18} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
