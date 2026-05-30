import React from 'react';
import { motion } from 'framer-motion';

const BlurText = ({ lines = [], delay = 0, className = "", highlightText = "", highlightClass = "" }) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      }
    }
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      filter: "blur(12px)" 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 14,
        stiffness: 90,
        duration: 0.6
      }
    }
  };

  return (
    <motion.div 
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {lines.map((line, lineIdx) => (
        <div key={lineIdx} style={{ display: 'block', overflow: 'hidden' }}>
          {line.split(" ").map((word, wordIdx) => {
            // Strip punctuation for matching highlight text
            const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
            const isHighlight = highlightText && highlightText.toLowerCase().includes(cleanWord.toLowerCase());

            return (
              <motion.span
                key={wordIdx}
                variants={wordVariants}
                className={isHighlight ? highlightClass : ""}
                style={{ display: "inline-block", marginRight: "0.22em" }}
              >
                {word}
              </motion.span>
            );
          })}
        </div>
      ))}
    </motion.div>
  );
};

export default BlurText;
