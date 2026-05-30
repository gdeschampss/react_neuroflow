import React from 'react';
import { motion } from 'framer-motion';
import styles from './FeaturedSolution.module.css';
import { BsWhatsapp, BsChatDots, BsArrowRepeat, BsCheck2Circle } from 'react-icons/bs';

const FeaturedSolution = () => {
  return (
    <section className={styles.featuredSection}>
      <div className={styles.bgGlow}></div>
      <div className={`container ${styles.featuredContainer}`}>
        
        <div className={styles.textSide}>
          <motion.div 
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <BsWhatsapp className={styles.badgeIcon} /> Comunicação Inteligente
          </motion.div>
          
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Fluxo de Cliente <br/>
            <span className="text-gradient-accent">Inteligente</span>
          </motion.h2>
          
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Escale seu suporte e vendas de forma integrada. Projetamos sistemas conversacionais automatizados que parecem humanos, rápidos e completamente organizados para sua equipe.
          </motion.p>
          
          <motion.ul 
            className={styles.benefits}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <li><BsCheck2Circle className={styles.checkIcon} /> Conversas Automatizadas 24/7</li>
            <li><BsCheck2Circle className={styles.checkIcon} /> Comunicação Otimizada</li>
            <li><BsCheck2Circle className={styles.checkIcon} /> Suporte Escalável</li>
            <li><BsCheck2Circle className={styles.checkIcon} /> Operação Organizada</li>
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{ marginTop: '2.5rem' }}
          >
            <a 
              href="https://api.whatsapp.com/send/?phone=554796732967&text&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.whatsBtn}
            >
              <BsWhatsapp className={styles.whatsBtnIcon} /> Iniciar Fluxo Inteligente
            </a>
          </motion.div>
        </div>

        <motion.div 
          className={styles.visualSide}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={`${styles.phoneMockup} glass`}>
            <div className={styles.phoneHeader}>
              <div className={styles.contactInfo}>
                <div className={styles.avatar}>N</div>
                <div>
                  <h4>NeuroFlow IA</h4>
                  <span>Online</span>
                </div>
              </div>
            </div>
            
            <div className={styles.chatArea}>
              <motion.div 
                className={`${styles.message} ${styles.received}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Olá! Como podemos ajudar a escalar o seu negócio hoje?
              </motion.div>
              
              <motion.div 
                className={`${styles.message} ${styles.sent}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
              >
                Eu quero automatizar meu fluxo de vendas.
              </motion.div>
              
              <motion.div 
                className={`${styles.message} ${styles.received}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5 }}
              >
                Perfeito! Deixe-me conectar você com nossa equipe de estratégia instantaneamente.
              </motion.div>
            </div>
            
            <div className={styles.floatingWidget1}>
              <BsArrowRepeat className={styles.widgetIcon} /> Sincronizando
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSolution;
