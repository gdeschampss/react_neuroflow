import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsArrowRight, BsArrowLeft, BsCheck, BsRobot, BsLaptop, BsCpu, BsHddNetwork, BsWhatsapp, BsSend, BsDiagram3, BsGraphUpArrow } from 'react-icons/bs';
import styles from './ProjectConfigurator.module.css';

const services = [
  { id: 'CRM & Funis de Vendas', title: 'CRM & Funis de Vendas', desc: 'CRM configurado de ponta a ponta com treinamento completo para o seu time comercial.', icon: <BsDiagram3 /> },
  { id: 'Agente de IA WhatsApp', title: 'Agente de IA WhatsApp', desc: 'Qualificação de leads e fechamentos humanizados rodando 24/7 no seu WhatsApp.', icon: <BsCpu /> },
  { id: 'Automações Personalizadas', title: 'Automações Personalizadas', desc: 'Respostas de Instagram ("eu quero"), disparos de mensagens e fluxos de trabalho.', icon: <BsRobot /> },
  { id: 'Sites & Landing Pages', title: 'Sites & Landing Pages', desc: 'Páginas premium e de alta velocidade focadas em gerar autoridade e leads.', icon: <BsLaptop /> },
  { id: 'Operação Completa', title: 'Operação Completa (Sugerido)', desc: 'Solução premium definitiva: CRM configurado + Automações + Agente de IA integrados.', icon: <BsGraphUpArrow /> }
];

const operations = [
  { id: 'Startup', title: 'Startup / Inicial', desc: 'Solução focada em validação rápida e agilidade.' },
  { id: 'Média', title: 'Média Empresa', desc: 'Escalar processos existentes e otimizar operação.' },
  { id: 'Enterprise', title: 'Grande Empresa / Enterprise', desc: 'Alta performance, segurança rígida e integrações robustas.' }
];

const extraFeatures = [
  { id: 'whatsapp', title: 'Integração WhatsApp IA', desc: 'Robô conversacional conectado ao CRM' },
  { id: 'dashboard', title: 'Painel de Controle (Dashboard)', desc: 'Métricas e gráficos em tempo real' },
  { id: 'suporte', title: 'Suporte Automatizado 24/7', desc: 'IA de auto-atendimento de incidentes' },
  { id: 'seo', title: 'Otimização Extrema SEO', desc: 'Indexação máxima no Google Lighthouse' }
];

const ProjectConfigurator = () => {
  const [step, setStep] = useState(1);
  const [service, setService] = useState(null);
  const [operation, setOperation] = useState(null);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadDesc, setLeadDesc] = useState('');
  const [toastMessage, setToastMessage] = useState(null);

  const toggleFeature = (id) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const getComplexity = () => {
    if (operation === 'Enterprise') return 'Alta';
    if (service === 'Sistema' || service === 'IA') return 'Média-Alta';
    return 'Média';
  };

  const getDuration = () => {
    if (operation === 'Enterprise') return '6 a 8 semanas';
    if (operation === 'Média') return '4 a 6 semanas';
    return '2 a 4 semanas';
  };

  const getWhatsAppMessage = () => {
    const featureTitles = extraFeatures
      .filter(f => selectedFeatures.includes(f.id))
      .map(f => f.title)
      .join(', ');

    const text = `Olá NeuroFlow! Montei meu projeto no Simulador:\n\n` +
      `- Serviço: ${service}\n` +
      `- Operação: ${operation}\n` +
      `${featureTitles ? `- Recursos: ${featureTitles}\n` : ''}` +
      `- Complexidade estimada: ${getComplexity()}\n` +
      `- Prazo estimado: ${getDuration()}\n\n` +
      `Meu nome é ${leadName || 'Interessado'}. Gostaria de agendar uma apresentação comercial!`;

    return `https://api.whatsapp.com/send/?phone=554796732918&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!leadName || !leadEmail) {
      triggerToast('Por favor, preencha os campos obrigatórios.');
      return;
    }
    
    // Simulate submission success
    triggerToast('Simulação salva com sucesso! Entraremos em contato em breve.');
    setTimeout(() => {
      window.open(getWhatsAppMessage(), '_blank');
    }, 1500);
  };

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const nextStep = () => {
    if (step === 1 && !service) {
      triggerToast('Selecione uma opção de serviço para continuar.');
      return;
    }
    if (step === 2 && !operation) {
      triggerToast('Selecione o tamanho da sua operação para continuar.');
      return;
    }
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  return (
    <div className={styles.configuratorContainer}>
      <div className={styles.header}>
        <span className={styles.badge}>Simulador de Projetos</span>
        <h2 className={styles.title}>Configure Sua <span className="text-gradient-accent">Solução</span></h2>
        <p className={styles.subtitle}>Responda às etapas abaixo para simular a complexidade, prazo e falar direto com um especialista.</p>
      </div>

      {/* Steps Indicator */}
      <div className={styles.indicatorContainer}>
        {[1, 2, 3, 4].map(s => (
          <div key={s} className={`${styles.indicatorItem} ${step >= s ? styles.active : ''} ${step === s ? styles.current : ''}`}>
            <span className={styles.stepNum}>{s}</span>
            <span className={styles.stepLabel}>
              {s === 1 ? 'Serviço' : s === 2 ? 'Operação' : s === 3 ? 'Recursos' : 'Resultado'}
            </span>
          </div>
        ))}
        <div className={styles.progressBar} style={{ width: `${((step - 1) / 3) * 100}%` }}></div>
      </div>

      {/* Main Wizard Card */}
      <div className={`${styles.wizardCard} glass`}>
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className={styles.stepContent}
            >
              <h3>O que você precisa desenvolver?</h3>
              <p className={styles.stepIntro}>Selecione a categoria principal que melhor descreve o seu objetivo.</p>
              
              <div className={styles.optionsGrid}>
                {services.map((s, index) => (
                  <motion.div
                    key={s.id}
                    className={`${styles.optionCard} ${service === s.id ? styles.selected : ''} ${index === 4 ? styles.fullWidthOption : ''}`}
                    onClick={() => setService(s.id)}
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={styles.iconBox}>{s.icon}</div>
                    <div className={styles.optionText}>
                      <h4>{s.title}</h4>
                      <p>{s.desc}</p>
                    </div>
                    {service === s.id && <div className={styles.checkBadge}><BsCheck /></div>}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className={styles.stepContent}
            >
              <h3>Qual o tamanho da sua operação?</h3>
              <p className={styles.stepIntro}>Isso nos ajuda a calibrar a robustez e integrações necessárias.</p>
              
              <div className={styles.verticalGrid}>
                {operations.map(o => (
                  <motion.div
                    key={o.id}
                    className={`${styles.optionRow} ${operation === o.id ? styles.selected : ''}`}
                    onClick={() => setOperation(o.id)}
                    whileHover={{ x: 6 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className={styles.optionRowText}>
                      <h4>{o.title}</h4>
                      <p>{o.desc}</p>
                    </div>
                    <div className={styles.rowRadio}>
                      <div className={styles.radioInner}></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className={styles.stepContent}
            >
              <h3>Recursos adicionais recomendados</h3>
              <p className={styles.stepIntro}>Adicione componentes extras que potencializam o crescimento do projeto.</p>
              
              <div className={styles.verticalGrid}>
                {extraFeatures.map(f => (
                  <motion.div
                    key={f.id}
                    className={`${styles.optionRow} ${selectedFeatures.includes(f.id) ? styles.selected : ''}`}
                    onClick={() => toggleFeature(f.id)}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className={styles.optionRowText}>
                      <h4>{f.title}</h4>
                      <p>{f.desc}</p>
                    </div>
                    <div className={`${styles.rowCheckbox} ${selectedFeatures.includes(f.id) ? styles.checked : ''}`}>
                      <BsCheck />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className={styles.stepContent}
            >
              <h3>Estimativa de Escopo e Prazos</h3>
              
              <div className={styles.resultsGrid}>
                {/* Result Statistics */}
                <div className={styles.resultsPanel}>
                  <div className={styles.resCard}>
                    <span>COMPLEXIDADE</span>
                    <h4>{getComplexity()}</h4>
                  </div>
                  <div className={styles.resCard}>
                    <span>PRAZO ESTIMADO</span>
                    <h4>{getDuration()}</h4>
                  </div>
                  <div className={styles.resSummary}>
                    <h5>Resumo de Escolhas:</h5>
                    <p>• Categoria: {service}</p>
                    <p>• Escopo: {operation}</p>
                    <p>• Recursos: {extraFeatures.filter(f => selectedFeatures.includes(f.id)).map(f => f.title).join(', ') || 'Nenhum adicional'}</p>
                  </div>
                </div>

                {/* Lead Form */}
                <form className={styles.leadForm} onSubmit={handleSubmit}>
                  <h4>Fale com nossos especialistas</h4>
                  <p>Informe seus dados abaixo para salvar a simulação e abrir o chat comercial.</p>
                  
                  <div className={styles.formGroup}>
                    <input 
                      type="text" 
                      placeholder="Seu Nome *" 
                      required 
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <input 
                      type="email" 
                      placeholder="Seu E-mail *" 
                      required 
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <textarea 
                      placeholder="Fale brevemente sobre o seu negócio (Opcional)" 
                      value={leadDesc}
                      onChange={(e) => setLeadDesc(e.target.value)}
                    />
                  </div>

                  <div className={styles.formActions}>
                    <button type="submit" className={styles.submitBtn}>
                      <BsWhatsapp /> Agendar no WhatsApp
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Wizard Footer Controls */}
        <div className={styles.wizardFooter}>
          {step > 1 && (
            <button className={styles.backBtn} onClick={prevStep}>
              <BsArrowLeft /> Voltar
            </button>
          )}
          {step < 4 ? (
            <button className={styles.nextBtn} onClick={nextStep}>
              Continuar <BsArrowRight />
            </button>
          ) : (
            <button className={styles.directContactBtn} onClick={() => window.open(getWhatsAppMessage(), '_blank')}>
              Conversar Sem Preencher
            </button>
          )}
        </div>
      </div>

      {/* Custom Toast Alert */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={`${styles.toast} glass`}
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectConfigurator;
