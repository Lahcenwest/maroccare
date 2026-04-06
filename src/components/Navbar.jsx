import React from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    padding: '20px 5%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 100,
    transition: 'all 0.4s ease',
    backgroundColor: (isScrolled || !isHomePage) ? 'var(--color-light)' : 'transparent',
    color: (isScrolled || !isHomePage) ? 'var(--color-dark)' : 'var(--color-white)',
    boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.05)' : 'none'
  };

  const logoStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  };

  const navLinksStyles = {
    display: 'flex',
    gap: '30px',
    alignItems: 'center'
  };

  const menuItemStyles = {
    fontSize: '0.9rem',
    fontWeight: '500',
    letterSpacing: '0.05em',
    textTransform: 'uppercase'
  };

  return (
    <nav style={navStyles}>
      <Link to="/" style={logoStyles}>
        {/* We use the logo image directly since it was provided */}
        <img 
          src="/assets/media__1775473866247.png" 
          alt="Maroccare Logo" 
          style={{ height: '35px', filter: (isScrolled || !isHomePage) ? 'none' : 'invert(1) brightness(2)' }} 
        />
      </Link>
      
      {/* Desktop Menu */}
      <div style={{ ...navLinksStyles, display: 'flex' }} className="desktop-menu">
        <Link to="/" style={menuItemStyles}>Home</Link>
        <Link to="/about" style={menuItemStyles}>Over Ons</Link>
        <Link to="/checkout" style={{...menuItemStyles, display: 'flex', alignItems: 'center', gap: '8px'}}>
          <ShoppingBag size={20} />
          <span>(0)</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
