import React from 'react';
import styles from './Footer.module.css';
import { BsWhatsapp, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <span className={styles.logoText}>Neuro<span className={styles.logoAccent}>Flow</span></span>
            <p className={styles.brandDesc}>
              Soluções digitais modernas e automação inteligente para empresas que desejam escalar.
            </p>
            <div className={styles.socials}>
              <a href="https://www.instagram.com/ianeuroflow/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><BsInstagram /></a>
              <a href="https://api.whatsapp.com/send/?phone=554796732918&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><BsWhatsapp /></a>
            </div>
          </div>
          
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>Soluções</h4>
              <a href="#services">Automação Inteligente</a>
              <a href="#services">Sites Premium</a>
              <a href="#services">Integrações com IA</a>
              <a href="#services">Estratégia Digital</a>
            </div>
            <div className={styles.linkGroup}>
              <h4>Empresa</h4>
              <a href="/about">Sobre Nós</a>
              <a href="/#portfolio">Projetos</a>
              <a href="/#process">Processo</a>
              <a href="/contact">Contato</a>
            </div>
          </div>
        </div>
        
        <div className={styles.bottomSection}>
          <p>&copy; {new Date().getFullYear()} NeuroFlow. Todos os direitos reservados.</p>
          <a href="https://api.whatsapp.com/send/?phone=554796732918&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
            <BsWhatsapp /> Falar com Especialista
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
