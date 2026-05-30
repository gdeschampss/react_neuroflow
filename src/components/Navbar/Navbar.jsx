import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <motion.nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className={`container ${styles.navContainer}`}>
          <Link to="/" className={styles.logo} onClick={closeMenu}>
            <span className={styles.logoText}>Neuro<span className={styles.logoAccent}>Flow</span></span>
          </Link>
          <div className={styles.navLinks}>
            <Link to="/" className={location.pathname === '/' ? styles.active : ''}>Início</Link>
            <Link to="/about" className={location.pathname === '/about' ? styles.active : ''}>Sobre Nós</Link>
            <a href="/#services">Soluções</a>
            <a href="/#portfolio">Projetos</a>
            <Link to="/contact" className={location.pathname === '/contact' ? styles.active : ''}>Contato</Link>
          </div>
          <div className={styles.navAction}>
            <Link to="/contact" className={styles.ctaButton}>Começar Agora</Link>
          </div>
          <div className={styles.hamburger} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <div className={`${styles.line} ${mobileMenuOpen ? styles.line1Open : ''}`}></div>
            <div className={`${styles.line} ${mobileMenuOpen ? styles.line2Open : ''}`}></div>
            <div className={`${styles.line} ${mobileMenuOpen ? styles.line3Open : ''}`}></div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/" onClick={closeMenu}>Início</Link>
            <Link to="/about" onClick={closeMenu}>Sobre Nós</Link>
            <a href="/#services" onClick={closeMenu}>Soluções</a>
            <a href="/#portfolio" onClick={closeMenu}>Projetos</a>
            <Link to="/contact" onClick={closeMenu}>Contato</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
