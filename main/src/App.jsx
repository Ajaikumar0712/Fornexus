import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import AIAgent from './components/AIAgent';
import './App.css';

function App() {
  useEffect(() => {
    // Scroll Reveal Animation
    function reveal() {
      const reveals = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }

    window.addEventListener("scroll", reveal);
    reveal(); // Run on load

    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div className="antialiased">
      <ParticlesBackground />
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <HowItWorks />
      <About />
      <Contact />
      <Footer />
      <AIAgent />
    </div>
  );
}

export default App;
