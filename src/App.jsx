import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingZalo from './components/FloatingZalo';

function App() {
  return (
    <div className="font-sans text-slate-800 bg-slate-50 dark:bg-slate-900 dark:text-slate-200 transition-colors antialiased selection:bg-primary/20">
      <Header />
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <Process />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
      <FloatingZalo />
    </div>
  );
}

export default App;
