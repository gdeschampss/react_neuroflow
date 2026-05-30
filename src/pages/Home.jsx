import React from 'react';
import Hero from '../components/Hero/Hero';
import Trust from '../components/Trust/Trust';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import FeaturedSolution from '../components/FeaturedSolution/FeaturedSolution';
import Portfolio from '../components/Portfolio/Portfolio';
import Process from '../components/Process/Process';
import CTA from '../components/CTA/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <Trust />
      <About />
      <Services />
      <FeaturedSolution />
      <Portfolio />
      <Process />
      <CTA 
        titleLines={["Pronto para escalar sua", "operação digital?"]}
        highlightText="operação digital?"
        subtitle="Chega de processos lentos e sistemas ultrapassados. Desenvolvemos soluções de automação e experiências de alta conversão sob medida para o seu negócio."
        buttonText="Iniciar Meu Projeto"
      />
    </>
  );
};

export default Home;
