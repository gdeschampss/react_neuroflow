import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './CTA.module.css';
import AntigravityParticles from './AntigravityParticles';
import BlurText from './BlurText';

const CTA = ({
  titleLines = ["A operação da sua empresa", "pode ser mais inteligente."],
  highlightText = "mais inteligente.",
  subtitle = "Pare de perder tempo com processos manuais e experiências genéricas. Vamos construir um motor digital para a sua empresa.",
  buttonText = "Iniciar Seu Projeto",
  to = "/contact#contact-section"
}) => {
  return (
    <section className={styles.ctaSection}>
      {/* 3D Antigravity Particles Background */}
      <AntigravityParticles />

      {/* Classic backdrop glow */}
      <div className={styles.bgGlow}></div>
      <div className={styles.bgGrid}></div>

      <div className={`container ${styles.ctaContainer}`}>
        <motion.div 
          className={`${styles.content} glass`}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Animated blurred title */}
          <BlurText 
            lines={titleLines}
            highlightText={highlightText}
            highlightClass="text-gradient"
            className={styles.title}
            delay={0.1}
          />

          {/* Subtitle animation */}
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {subtitle}
          </motion.p>

          {/* Button animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Link to={to}>
              <button className={styles.ctaBtn}>
                {buttonText}
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
