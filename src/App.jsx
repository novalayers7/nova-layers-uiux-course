import { useEffect } from 'react';
import './styles.css';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import TrustStats from './components/sections/TrustStats';
import WhySection from './components/sections/WhySection';
import JourneySection from './components/sections/JourneySection';
import CourseOverview from './components/sections/CourseOverview';
import CourseDetailsSection from './components/sections/CourseDetailsSection';
import Projects from './components/sections/Projects';
import Curriculum from './components/sections/Curriculum';
import FAQ from './components/sections/FAQ';
import AboutMe from './components/sections/AboutMe';
import Registration from './components/sections/Registration';
import Footer from './components/sections/Footer';
import FloatingDesignElements from './components/FloatingDesignElements';

export default function App() {
  useEffect(() => {
    const root = document.getElementById('root');

    const handleHashNavigation = (event) => {
      if (
        event.defaultPrevented
        || event.button !== 0
        || event.metaKey
        || event.ctrlKey
        || event.shiftKey
        || event.altKey
        || !(event.target instanceof Element)
      ) {
        return;
      }

      const link = event.target.closest('a[href^="#"]');
      if (!(link instanceof HTMLAnchorElement)) return;

      const target = document.getElementById(link.hash.slice(1));
      if (!target) return;

      event.preventDefault();
      window.requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: 'smooth' });
      });
    };

    root.addEventListener('click', handleHashNavigation);
    return () => root.removeEventListener('click', handleHashNavigation);
  }, []);

  return (
    <>
      <FloatingDesignElements />
      <Navbar />
      <main>
        <Hero />
        <TrustStats />
        <WhySection />
        <JourneySection />
        <CourseOverview />
        <CourseDetailsSection />
        <Projects />
        <Curriculum />
        <FAQ />
        <Registration />
        <AboutMe />
      </main>
      <Footer />
    </>
  );
}
