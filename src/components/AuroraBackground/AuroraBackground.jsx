import React from 'react';
import styles from './AuroraBackground.module.css';

const AuroraBackground = () => {
  return (
    <div className={styles.auroraContainer}>
      <div className={styles.auroraGradients}></div>
      <div className={styles.auroraGradients2}></div>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default AuroraBackground;
