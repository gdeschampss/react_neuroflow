import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';
import { BsLightningCharge, BsShieldCheck } from 'react-icons/bs';

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`container ${styles.aboutContainer}`}>
        <motion.div
          className={styles.visualSide}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.imageGrid}>
            {/* Imagem de Integração CRM Kommo */}
            <img
              src="/imgs/kommosection.png"
              alt="Integração CRM Kommo"
              className={styles.kommoImage}
            />

            <motion.div
              className={`${styles.imgCard} ${styles.img1} glass`}
              animate={{ y: [-8, 8, -8] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut"
              }}
            >
              <BsLightningCharge className={styles.cardIcon} />
              <h4>CRM estruturado e treinamento completo para sua equipe comercial.</h4>
            </motion.div>
            <motion.div
              className={`${styles.imgCard} ${styles.img2} glass`}
              animate={{ y: [8, -8, 8] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut"
              }}
            >
              <BsShieldCheck className={styles.cardIcon} />
              <h4>Integramos agentes de IA no WhatsApp e automações de vendas.</h4>
            </motion.div>
            <div className={styles.glowBg}></div>
          </div>
        </motion.div>

        <motion.div
          className={styles.contentSide}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>
            Inteligência Comercial para <br />
            <span className="text-gradient-accent">Impulsionar o Crescimento</span>
          </h2>
          <p className={`${styles.description} ${styles.desktopDesc}`}>
            A NeuroFlow ajuda sua empresa a vender mais e atender melhor sem processos confusos. Nós estruturamos e configuramos o seu CRM de vendas com funis bem desenhados, capacitamos o seu time comercial com treinamentos práticos e conectamos agentes de IA inteligentes que atendem 24/7 no WhatsApp, criando um fluxo comercial altamente lucrativo.
          </p>
          <p className={`${styles.description} ${styles.mobileDesc}`}>
            Estruturamos seu CRM de vendas com funis inteligentes, capacitamos seu time comercial com treinamentos práticos e integramos agentes de IA que atendem 24/7 no WhatsApp, criando um fluxo comercial altamente lucrativo.
          </p>

          <ul className={styles.featureList}>
            <li>
              <span className={styles.check}></span>
              CRM configurado de ponta a ponta com treinamento do seu time
            </li>
            <li>
              <span className={styles.check}></span>
              Agente de IA no WhatsApp para qualificar leads e vender 24h
            </li>
            <li>
              <span className={styles.check}></span>
              Automações personalizadas e sites premium de alta conversão
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
