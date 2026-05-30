import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import { BsArrowRight } from 'react-icons/bs';
import AuroraBackground from '../AuroraBackground/AuroraBackground';
import TextType from '../TextType/TextType';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <AuroraBackground />

      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.content}>


          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transforme Sua <br className={styles.desktopBr} />
            <span style={{ color: '#FFFFFF' }}>
              <TextType 
                words={["Operação"]}
              />
            </span>
          </motion.h1>

          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Soluções digitais modernas, automação inteligente e experiências de alta conversão para empresas que desejam escalar.
          </motion.p>

          <motion.div 
            className={styles.actions}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button className={styles.primaryBtn} onClick={() => window.location.href='/contact'}>
              Agendar Reunião <BsArrowRight className={styles.btnIcon} />
            </button>
            <button className={styles.secondaryBtn} onClick={() => window.location.href='/#services'}>
              Explorar Soluções
            </button>
          </motion.div>
        </div>

        <motion.div 
          className={styles.visuals}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className={`${styles.dashboardMockup} glass`}>
            <div className={styles.mockupHeader}>
              <div className={styles.dots}>
                <span></span><span></span><span></span>
              </div>
            </div>
            <div className={styles.mockupBody}>
              <div className={styles.mockupChart}>
                <div className={styles.bar} style={{height: '40%'}}></div>
                <div className={styles.bar} style={{height: '70%'}}></div>
                <div className={styles.bar} style={{height: '50%'}}></div>
                <div className={styles.bar} style={{height: '90%'}}></div>
                <div className={styles.bar} style={{height: '60%'}}></div>
              </div>
              <div className={styles.mockupCards}>
                <div className={styles.mCard}></div>
                <div className={styles.mCard}></div>
              </div>
            </div>
            {/* Floating Elements - Hidden on mobile if too cluttered */}
            <motion.div 
              className={styles.floatingCard1}
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              Conversão +300%
            </motion.div>
            <motion.div 
              className={styles.floatingCard2}
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              Fluxo Inteligente Ativo
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
