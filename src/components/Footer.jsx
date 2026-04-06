import React from 'react';
import { CreditCard, Truck, ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-dark)', color: 'var(--color-white)', paddingTop: '80px' }}>
      <div className="container" style={{ padding: '0 5%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '50px', marginBottom: '60px' }}>
          
          <div>
            <img src="/assets/media__1775473866247.png" alt="Maroccare Logo" style={{ height: '40px', marginBottom: '20px', filter: 'invert(1) brightness(2)' }} />
            <p style={{ color: '#aaa', lineHeight: 1.6, marginBottom: '20px' }}>
              Luxe verzorgingsproducten op basis van pure Arganolie. Direct vanuit Marokko, speciaal voor jou.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '25px', letterSpacing: '0.05em' }}>Klantenservice</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: '#aaa' }}>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Verzending & Retourneren</a></li>
              <li><a href="#">Veelgestelde Vragen</a></li>
              <li><a href="#">Algemene Voorwaarden</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '25px', letterSpacing: '0.05em' }}>Zekerheden</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: '#aaa' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Truck size={20} color="var(--color-gold)" /> Gratis verzending v.a. €50</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><ShieldCheck size={20} color="var(--color-gold)" /> 100% Biologisch Gecertificeerd</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CreditCard size={20} color="var(--color-gold)" /> Veilig Achteraf Betalen</li>
            </ul>
          </div>

        </div>

        <div style={{ 
          borderTop: '1px solid #333', 
          padding: '30px 0', 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <p style={{ color: '#888', fontSize: '0.9rem' }}>&copy; {new Date().getFullYear()} Maroccare. Alle rechten voorbehouden.</p>
          
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <span style={{ fontSize: '0.9rem', color: '#aaa', marginRight: '10px' }}>Betaal veilig met:</span>
            {/* Mocking the payment method badges using standard text/styling for this demo */}
            <div style={{ backgroundColor: '#ffb3c7', color: '#0a0b09', padding: '5px 12px', borderRadius: '15px', fontWeight: 'bold', fontSize: '0.8rem' }}>
              Klarna.
            </div>
            <div style={{ backgroundColor: '#fff', color: '#000', padding: '5px 12px', borderRadius: '4px', fontWeight: 'bold', fontSize: '0.8rem' }}>
              iDEAL
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
