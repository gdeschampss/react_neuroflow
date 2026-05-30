import React, { useState, useEffect } from 'react';

const TextType = ({ 
  words = ["Operação Digital", "Automação", "Escala Comercial", "Eficiência Inteligente"], 
  typingSpeed = 90, 
  deletingSpeed = 40, 
  delayBetweenWords = 1800, 
  className = "" 
}) => {
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const activeWord = words[currentWordIdx];

    if (isDeleting) {
      // Deleting character
      timer = setTimeout(() => {
        setCurrentText(activeWord.substring(0, currentText.length - 1));
      }, deletingSpeed);
    } else {
      // Typing character
      timer = setTimeout(() => {
        setCurrentText(activeWord.substring(0, currentText.length + 1));
      }, typingSpeed);
    }

    // Handle transition from typing to deleting
    if (!isDeleting && currentText === activeWord) {
      if (words.length > 1) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenWords);
      }
    }

    // Handle transition from deleting to next word
    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIdx((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <span className={className}>
      {currentText}
      <span 
        style={{ 
          marginLeft: '2px', 
          borderRight: '2px solid currentColor', 
          animation: 'blink 0.75s step-end infinite' 
        }} 
      />
      <style>{`
        @keyframes blink {
          from, to { border-color: transparent }
          50% { border-color: currentColor }
        }
      `}</style>
    </span>
  );
};

export default TextType;
