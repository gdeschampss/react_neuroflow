import React from 'react';
import { motion } from 'framer-motion';
import CTA from '../components/CTA/CTA';

const AboutPage = () => {
  return (
    <main style={{ paddingTop: '100px', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Glow */}
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(0, 190, 173, 0.15) 0%, transparent 70%)', filter: 'blur(100px)', zIndex: -1 }}></div>
      <div style={{ position: 'absolute', bottom: '10%', right: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(2, 89, 89, 0.2) 0%, transparent 70%)', filter: 'blur(100px)', zIndex: -1 }}></div>

      <div className="container" style={{ padding: '6rem 2rem' }}>
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ textAlign: 'center', marginBottom: '8rem', maxWidth: '800px', margin: '0 auto 8rem auto' }}
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'rgba(0, 190, 173, 0.1)', border: '1px solid rgba(0, 190, 173, 0.2)', borderRadius: '50px', color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '2rem' }}
          >
            O Futuro do Digital
          </motion.span>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-2px' }}>
            Nós Somos a <br/>
            <span className="text-gradient-accent">NeuroFlow</span>
          </h1>
          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', color: 'var(--text-muted)', lineHeight: 1.8 }}>
            Uma startup de tecnologia premium focada em automação inteligente, transformação digital e crescimento escalável de negócios. Nós construímos ecossistemas que pensam.
          </p>
        </motion.div>

        {/* Story Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginBottom: '8rem', alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Projetando o <span style={{ color: 'var(--accent-primary)' }}>Impossível</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Nós não construímos apenas sites ou escrevemos scripts. Projetamos experiências digitais premium que impõem autoridade e geram resultados mensuráveis. 
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8 }}>
              Na NeuroFlow, cada pixel e cada linha de código é otimizado para o crescimento inteligente do seu negócio.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass"
            style={{ padding: '3rem', borderRadius: '24px', borderLeft: '4px solid var(--accent-primary)', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(45deg, transparent, rgba(0, 190, 173, 0.05), transparent)', zIndex: 0 }}></div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>Nossa Missão</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, position: 'relative', zIndex: 1 }}>
              Democratizar o acesso a experiências digitais de ponta e automação com inteligência artificial, permitindo que as empresas cresçam rapidamente sem sacrificar a qualidade.
            </p>
          </motion.div>
        </div>

        {/* Vision Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass"
          style={{ padding: '4rem', borderRadius: '24px', textAlign: 'center', borderTop: '4px solid var(--accent-secondary)' }}
        >
          <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Nossa Visão</h3>
          <p style={{ color: 'var(--text-main)', fontSize: '1.2rem', lineHeight: 1.8, maxWidth: '800px', margin: '0 auto' }}>
            "Vislumbramos um futuro onde os ecossistemas digitais são vivos, intuitivos e altamente performáticos — transformando interações simples em conexões emocionais de alta conversão."
          </p>
        </motion.div>

      </div>
      <CTA 
        titleLines={["Vamos projetar o seu", "futuro digital?"]}
        highlightText="futuro digital?"
        subtitle="Nossa missão é alinhar tecnologia premium, automação de ponta e design inovador para colocar sua empresa no topo. Fale com nosso time hoje mesmo."
        buttonText="Entrar em Contato"
      />
    </main>
  );
};

export default AboutPage;
