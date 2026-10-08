import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import novaLogo from '../assests/nova logo 2.png';
import './Navbar.css';

const links = [
  ['What you\'ll learn', '#what-youll-learn'],
  ['Learning process', '#learning-process'],
  ['About me', '#about-me'],
  ['Contact', '#contact'],
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState(links[0][1]);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const selectLink = (href) => {
    setActive(href);
    setOpen(false);
  };

  return <>
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <a className="nova-logo" href="#top" aria-label="Nova Layers home" onClick={() => selectLink('#top')}>
        <img src={novaLogo} alt="Nova Layers" />
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, href]) => <a className={active === href ? 'active' : ''} key={href} href={href} onClick={() => selectLink(href)}>
          {label}
          {active === href && <motion.span className="nav-indicator" layoutId="nav-indicator" transition={{ type: 'spring', stiffness: 420, damping: 32 }} />}
        </a>)}
      </nav>
      <a className="nav-cta" href="#enroll" onClick={() => selectLink('#enroll')}>Enroll now <ArrowUpRight size={15} /></a>
      <button className={`menu-button ${open ? 'is-open' : ''}`} aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
        <span></span><span></span>
      </button>
    </header>
    <AnimatePresence>
      {open && <motion.div className="mobile-nav-panel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .25 }}>
        <motion.nav className="mobile-nav-links" initial="closed" animate="open" exit="closed" variants={{ open: { transition: { staggerChildren: .07, delayChildren: .08 } }, closed: {} }} aria-label="Mobile navigation">
          {links.map(([label, href], index) => <motion.a key={href} href={href} onClick={() => selectLink(href)} variants={{ open: { opacity: 1, x: 0 }, closed: { opacity: 0, x: -18 } }} transition={{ duration: .35 }}>
            <span>0{index + 1}</span>{label}<ArrowUpRight size={18} />
          </motion.a>)}
          <motion.a className="mobile-enroll" href="#enroll" onClick={() => selectLink('#enroll')} variants={{ open: { opacity: 1, x: 0 }, closed: { opacity: 0, x: -18 } }} transition={{ duration: .35 }}>Enroll now <ArrowUpRight size={17} /></motion.a>
        </motion.nav>
        <div className="mobile-nav-note">UI/UX + AI COURSE / 18 CLASSES</div>
      </motion.div>}
    </AnimatePresence>
  </>;
}
