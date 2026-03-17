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
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingZalo from './components/FloatingZalo';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 selection:bg-blue-200">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <CaseStudies />
        <Process />
        <Pricing />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingZalo />
    </div>
  );
}

export default App;
