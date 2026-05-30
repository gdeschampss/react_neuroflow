import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsWhatsapp, BsInstagram, BsGeoAlt, BsEnvelope } from 'react-icons/bs';
import DarkVeilBackground from '../components/DarkVeilBackground/DarkVeilBackground';
import ProjectConfigurator from '../components/ProjectConfigurator/ProjectConfigurator';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  useEffect(() => {
    if (window.location.hash === '#contact-section') {
      const element = document.getElementById('contact-section');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      }
    }
  }, []);

  return (
    <div className={styles.contactPage}>
      {/* Seção Superior - Sobre a Neuro Flow */}
      <section className={styles.topSection}>
        <DarkVeilBackground />

        <div className={styles.contentWrapper}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>
              Sua <span className="text-gradient-accent">operação</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: '700px', margin: '0 auto' }}>
              A NeuroFlow é mais que uma agência. Somos seus parceiros estratégicos em tecnologia.
              Unimos design premium, automação avançada e inteligência artificial para elevar o patamar da sua empresa.
            </p>
          </motion.div>

          {/* Imagem em ascensão */}
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          >
            <img
              src="/imgs/aboutusimg.png"
              alt="Sobre a Neuro Flow"
              className={styles.aboutImage}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Seção do Simulador de Projetos */}
      <section className={styles.configuratorSection}>
        <ProjectConfigurator />
      </section>

      {/* Seção Inferior - Contatos e Mapa */}
      <section id="contact-section" className={styles.bottomSection}>
        <div className={styles.contactGrid}>
          {/* Informações de Contato */}
          <div className={styles.contactInfo}>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ fontSize: '2.5rem', marginBottom: '1rem' }}
            >
              Vamos Iniciar um <span className="text-gradient-accent">Projeto?</span>
            </motion.h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
              Nossa equipe está pronta para entender seus desafios e propor as melhores soluções tecnológicas.
            </p>

            <motion.a
              href="https://api.whatsapp.com/send/?phone=554796732918&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.contactCard} glass`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className={styles.iconBox}><BsWhatsapp /></div>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>WhatsApp</h3>
                <p style={{ color: 'var(--text-muted)' }}>Fale diretamente com um especialista</p>
              </div>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/ianeuroflow/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.contactCard} glass`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className={styles.iconBox}><BsInstagram /></div>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Instagram</h3>
                <p style={{ color: 'var(--text-muted)' }}>Acompanhe nossas inovações diárias</p>
              </div>
            </motion.a>

            <motion.div
              className={`${styles.contactCard} glass`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className={styles.iconBox}><BsGeoAlt /></div>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Nosso Escritório</h3>
                <p style={{ color: 'var(--text-muted)' }}>R. Uganda, 190 - Nações, Balneário Camboriú - SC</p>
              </div>
            </motion.div>
          </div>

          {/* Mapa */}
          <motion.div
            className={styles.mapContainer}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              src="https://maps.google.com/maps?q=R.%20Uganda,%20190%20-%20Na%C3%A7%C3%B5es,%20Balne%C3%A1rio%20Cambori%C3%BA%20-%20SC,%2088338-160&t=&z=15&ie=UTF8&iwloc=&output=embed"
              title="Localização NeuroFlow"
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
