import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RotatingText = ({ words, interval = 3000, className = '' }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <div style={{ display: 'inline-block', position: 'relative', overflow: 'hidden', verticalAlign: 'bottom' }} className={className}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0, rotateX: -90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: -20, opacity: 0, rotateX: 90 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{ display: 'inline-block', transformOrigin: '50% 50%' }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default RotatingText;
