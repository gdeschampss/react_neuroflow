import React from 'react';
import { motion } from 'framer-motion';
import styles from './Process.module.css';

const steps = [
  { id: '01', title: 'Estratégia', desc: 'Analisamos sua operação e mapeamos o fluxo digital perfeito.' },
  { id: '02', title: 'Estrutura', desc: 'Construímos a base, as interfaces e a arquitetura necessária.' },
  { id: '03', title: 'Automação', desc: 'Integramos sistemas inteligentes para reduzir o trabalho manual.' },
  { id: '04', title: 'Escala', desc: 'Monitoramos, otimizamos e ajudamos seu negócio a crescer.' }
];

const Process = () => {
  return (
    <section id="process" className={styles.processSection}>
      <div className={`container ${styles.processContainer}`}>
        <div className={styles.header}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Como <span className="text-gradient-accent">Trabalhamos</span>
          </motion.h2>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              className={styles.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles.stepNumber}>{step.id}</div>
              <div className={styles.stepContent}>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              {index !== steps.length - 1 && (
                <div className={styles.line}></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
