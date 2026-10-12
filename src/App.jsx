import { useLayoutEffect } from 'react';
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
  useLayoutEffect(() => {
    const root = document.getElementById('root');
    let contactScrollPending = false;
    let suppressContactPathUntilExit = false;
    let routeCheckFrame = null;
    let scrollIdleTimer = null;

    const setPath = (path, method = 'replaceState') => {
      if (window.location.pathname !== path) {
        window.history[method]({}, '', path);
      }
      if (path === '/') {
        window.history.scrollRestoration = 'auto';
      }
    };

    const scrollToContact = (behavior) => {
      const target = document.getElementById('contact');
      if (!target) return;

      const navbar = document.querySelector('.navbar');
      const offset = navbar instanceof HTMLElement
        ? navbar.offsetTop + navbar.offsetHeight + 24
        : 112;
      const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - offset);
      if (behavior === 'instant') {
        const previousScrollBehavior = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo({ top, behavior: 'auto' });
        document.documentElement.style.scrollBehavior = previousScrollBehavior;
        return;
      }

      window.scrollTo({ top, behavior });
    };

    const syncContactPath = () => {
      routeCheckFrame = null;
      const contact = document.getElementById('contact');
      if (!contact) return;

      const navbar = document.querySelector('.navbar');
      const navbarBottom = navbar instanceof HTMLElement
        ? navbar.offsetTop + navbar.offsetHeight
        : 88;
      const activePoint = (navbarBottom + window.innerHeight) / 2;
      const bounds = contact.getBoundingClientRect();
      const contactIsActive = bounds.top <= activePoint && bounds.bottom > activePoint;

      if (contactIsActive) {
        contactScrollPending = false;
        if (!suppressContactPathUntilExit && window.location.pathname !== '/contact') {
          setPath('/contact');
        }
      } else if (!contactScrollPending && window.location.pathname === '/contact') {
        setPath('/');
        suppressContactPathUntilExit = false;
      } else {
        suppressContactPathUntilExit = false;
      }
    };

    const scheduleRouteCheck = () => {
      if (routeCheckFrame === null) {
        routeCheckFrame = window.requestAnimationFrame(syncContactPath);
      }
    };

    const handleScroll = () => {
      scheduleRouteCheck();
      if (!contactScrollPending) return;

      window.clearTimeout(scrollIdleTimer);
      scrollIdleTimer = window.setTimeout(() => {
        contactScrollPending = false;
        scheduleRouteCheck();
      }, 250);
    };

    const navigateToContact = (method = 'pushState', behavior = 'smooth') => {
      setPath('/contact', method);
      contactScrollPending = true;
      window.clearTimeout(scrollIdleTimer);
      window.requestAnimationFrame(() => {
        scrollToContact(behavior);
        scheduleRouteCheck();
        scrollIdleTimer = window.setTimeout(() => {
          contactScrollPending = false;
          scheduleRouteCheck();
        }, 250);
      });
    };

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
      const contactLink = event.target.closest('a[href="/contact"]');

      if (contactLink instanceof HTMLAnchorElement) {
        event.preventDefault();
        navigateToContact();
        return;
      }

      if (!(link instanceof HTMLAnchorElement)) return;

      const target = document.getElementById(link.hash.slice(1));
      if (!target) return;

      event.preventDefault();
      contactScrollPending = false;
      window.clearTimeout(scrollIdleTimer);
      suppressContactPathUntilExit = target.id !== 'contact' && target.id !== 'enroll';
      if (suppressContactPathUntilExit && window.location.pathname === '/contact') {
        setPath('/');
      }
      window.requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: 'smooth' });
      });
    };

    const handlePopState = () => {
      if (window.location.pathname === '/contact') {
        navigateToContact('replaceState', 'instant');
      } else {
        contactScrollPending = false;
        scheduleRouteCheck();
      }
    };

    const handlePageShow = () => {
      if (window.location.pathname === '/contact') {
        navigateToContact('replaceState', 'instant');
      }
    };

    root.addEventListener('click', handleHashNavigation);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('pageshow', handlePageShow);

    if (window.location.pathname === '/contact') {
      contactScrollPending = true;
      window.requestAnimationFrame(() => {
        scrollToContact('instant');
        contactScrollPending = false;
        scheduleRouteCheck();
      });
    }

    return () => {
      window.cancelAnimationFrame(routeCheckFrame);
      window.clearTimeout(scrollIdleTimer);
      root.removeEventListener('click', handleHashNavigation);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('pageshow', handlePageShow);
    };
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
