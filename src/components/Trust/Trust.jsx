import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Trust.module.css';

// Reusable CountUp component with high performance visibility-based triggering
const CountUp = ({ to, duration = 1.6 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;

    // Robust parsing of any digits inside the string
    const match = to.match(/\d+/);
    if (!match) {
      setCount(to);
      return;
    }
    
    const endVal = parseInt(match[0], 10);
    const startVal = 0;
    
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Calculate current value
      const currentVal = Math.floor(progress * (endVal - startVal) + startVal);
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endVal);
      }
    };

    requestAnimationFrame(animate);
  }, [to, duration, isInView]);

  const formattedCount = () => {
    if (typeof count !== 'number') return to;
    
    const match = to.match(/\d+/);
    if (!match) return to;

    const prefix = to.substring(0, to.indexOf(match[0]));
    const suffix = to.substring(to.indexOf(match[0]) + match[0].length);

    return `${prefix}${count}${suffix}`;
  };

  return <span ref={ref}>{formattedCount()}</span>;
};

const Trust = () => {
  const metrics = [
    { value: '+40', label: 'NEGÓCIOS OTIMIZADOS' },
    { value: '3x', label: 'MAIS VELOCIDADE NO ATENDIMENTO' },
    { value: '-70%', label: 'DE TAREFAS MANUAIS' },
    { value: '24H', label: 'OPERAÇÃO FUNCIONANDO' }
  ];

  return (
    <section className={styles.trustSection}>
      <div className={`container ${styles.trustContainer}`}>
        <div className={styles.divider}></div>
        
        <div className={styles.metricsGrid}>
          {metrics.map((metric, index) => (
            <motion.div 
              key={index} 
              className={styles.metricItem}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -8, scale: 1.04, transition: { duration: 0.2 } }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "spring",
                stiffness: 70,
                damping: 14,
                delay: index * 0.15 
              }}
              style={{ cursor: 'pointer' }}
            >
              <h3 className="text-gradient">
                <CountUp to={metric.value} />
              </h3>
              <p>{metric.label}</p>
            </motion.div>
          ))}
        </div>

        <div className={styles.divider}></div>
      </div>
    </section>
  );
};

export default Trust;
