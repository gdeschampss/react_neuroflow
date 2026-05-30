import React from 'react';
import styles from './DarkVeilBackground.module.css';

const DarkVeilBackground = () => {
  return (
    <div className={styles.darkVeilContainer}>
      <div className={styles.veilLayer1}></div>
      <div className={styles.veilLayer2}></div>
      <div className={styles.veilLayer3}></div>
      <div className={styles.gridOverlay}></div>
    </div>
  );
};

export default DarkVeilBackground;
