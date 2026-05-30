import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import styles from './Services.module.css';
import { BsRobot, BsWindowSidebar, BsFileEarmarkCode, BsCpu, BsDiagram3, BsGraphUpArrow } from 'react-icons/bs';

const servicesData = [
  { icon: <BsDiagram3 />, title: 'CRM & Funis de Vendas', desc: 'Configuração completa do seu CRM comercial, criação de funis inteligentes e treinamento prático para toda a sua equipe.' },
  { icon: <BsCpu />, title: 'Agente de IA (WhatsApp)', desc: 'Atendimento humanizado e qualificação inteligente de leads 24h por dia no WhatsApp, fechando negócios no piloto automático.' },
  { icon: <BsRobot />, title: 'Automações de Vendas', desc: 'Respostas instantâneas no Instagram (ex: comentários "eu quero"), disparos direcionados e fluxos automatizados de trabalho.' },
  { icon: <BsWindowSidebar />, title: 'Sites & Landing Pages', desc: 'Páginas premium de altíssima velocidade e conversão, desenhadas para reter o tráfego e transformá-lo em clientes.' },
  { icon: <BsGraphUpArrow />, title: 'Operação Completa', desc: 'Nossa solução premium definitiva: CRM configurado, automações avançadas e Agente de IA integrados para escala máxima.' }
];

const Services = () => {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={`container ${styles.servicesContainer}`}>
        <div className={styles.header}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Soluções <span className="text-gradient-accent">Digitais</span>
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Implantamos tecnologia avançada para que você possa focar em escalar.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ width: '100%', padding: '2rem 0' }}
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="services-swiper"
            style={{ paddingBottom: '3rem' }}
          >
            {servicesData.map((service, index) => (
              <SwiperSlide key={index} style={{ width: '300px' }}>
                <div className={`${styles.card} glass`} style={{ height: '100%', margin: '0 10px' }}>
                  <div className={styles.iconWrapper}>
                    {service.icon}
                  </div>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.desc}</p>
                  <div className={styles.cardGlow}></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
