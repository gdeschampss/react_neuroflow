import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Portfolio.module.css';
import { BsArrowUpRight, BsX } from 'react-icons/bs';

const projects = [
  { 
    id: 1, 
    title: 'CRM & Dashboard Operacional', 
    longTitle: 'CRM Customizado com Dashboard da Operação em Tempo Real',
    category: 'CRM & Vendas', 
    img: '/imgs/project1.png',
    description: 'Um ecossistema sob medida para centralização e controle comercial absoluto. Desenvolvemos a estruturação completa do seu CRM conectando um dashboard operacional dinâmico que exibe métricas-chave em tempo real, facilitando o acompanhamento de metas, a análise de conversão e a tomada de decisão ágil pela liderança.',
    techStack: ['React', 'Framer Motion', 'Recharts', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    metrics: ['+120% de eficiência operacional', 'Funil de vendas 100% unificado', 'Gestão operacional simplificada']
  },
  { 
    id: 2, 
    title: 'Automação de Redes Sociais', 
    longTitle: 'Fluxo Inteligente de Engajamento e Captação de Leads via DM',
    category: 'Fluxo Inteligente', 
    img: '/imgs/project2.png',
    description: 'Sistema avançado de automação de engajamento para Instagram e redes sociais. Quando um potencial cliente comenta palavras-chave como "eu quero" em um post ou Reels, o fluxo de automação inicia imediatamente um atendimento interativo e humanizado via DM, coletando dados essenciais de contato e enviando o link ou formulário ideal para conversão direta no CRM.',
    techStack: ['Meta Graph API', 'Node.js', 'OpenAI API', 'Kommo CRM', 'PostgreSQL'],
    metrics: ['Tempo de resposta de 2 segundos', 'Qualificação imediata de leads', '+180% de conversão em posts orgânicos']
  },
  { 
    id: 3, 
    title: 'Website & Landing Pages', 
    longTitle: 'Landing Pages e Websites Premium de Alta Conversão',
    category: 'Website', 
    img: '/imgs/project3.png',
    description: 'Páginas e sites institucionais desenvolvidos sob medida com foco extremo em conversão, design moderno e velocidade de carregamento excepcional. Otimizados para campanhas de tráfego pago e SEO orgânico de alta performance, garantindo que o seu público tenha uma experiência premium e se converta em cliente desde o primeiro acesso.',
    techStack: ['React 18', 'Vite', 'GSAP', 'CSS Modules', 'Lenis Smooth Scroll'],
    metrics: ['Tempo de carregamento inferior a 0.6s', 'Nota 100 no Lighthouse SEO', '+45% de conversão de visitantes em leads']
  }
];

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="portfolio" className={styles.portfolioSection}>
      <div className={`container ${styles.portfolioContainer}`}>
        <div className={styles.header}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Trabalhos <span className="text-gradient-accent">Destaque</span>
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Experiências premium construídas para conversão.
          </motion.p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onClick={() => setActiveProject(project)}
            >
              <div className={styles.imgWrapper}>
                <img src={project.img} alt={project.title} className={styles.projectImg} />
                <div className={styles.overlay}>
                  <div className={styles.viewBtn}>
                    <BsArrowUpRight />
                  </div>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div 
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div 
              className={`${styles.modalContent} glass`}
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeBtn} onClick={() => setActiveProject(null)} aria-label="Fechar modal">
                <BsX />
              </button>
              
              <div className={styles.modalGrid}>
                <div className={styles.modalImgWrapper}>
                  <img src={activeProject.img} alt={activeProject.title} className={styles.modalImg} />
                </div>
                
                <div className={styles.modalInfo}>
                  <span className={styles.modalCategory}>{activeProject.category}</span>
                  <h3 className={styles.modalTitle}>{activeProject.longTitle}</h3>
                  <p className={styles.modalDescription}>{activeProject.description}</p>
                  
                  <div className={styles.modalSection}>
                    <h4>Métricas Alcançadas</h4>
                    <ul className={styles.modalMetrics}>
                      {activeProject.metrics.map((metric, idx) => (
                        <li key={idx}>
                          <span className={styles.metricCheck}></span>
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.modalSection}>
                    <h4>Tecnologias Utilizadas</h4>
                    <div className={styles.techTags}>
                      {activeProject.techStack.map((tech, idx) => (
                        <span key={idx} className={styles.techTag}>{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <button className={styles.modalCta} onClick={() => { setActiveProject(null); window.location.href='/contact'; }}>
                    Iniciar Projeto Similar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
