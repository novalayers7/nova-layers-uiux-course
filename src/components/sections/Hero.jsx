import { ArrowDownRight, ArrowRight, Command, Clock, MousePointer2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from '../shared/Reveal';
import Button from '../shared/Button';
import './Hero.css';

function HeroVisual() {
  return <div className="hero-visual" aria-label="Abstract interface design board">
    <motion.div className="design-board" initial={{ opacity: 0, scale: .92, rotate: 5 }} animate={{ opacity: 1, scale: 1, rotate: -4 }} transition={{ duration: 1, delay: .35, ease: [0.22, 1, 0.36, 1] }}>
      <div className="board-top"><span><span className="board-dot pink"></span><span className="board-dot yellow"></span><span className="board-dot cyan"></span></span><span className="board-label">nova / ui systems</span><Command size={13} /></div>
      <div className="board-body"><div className="board-copy"><span className="tiny-kicker">01 / UI/UX</span><strong>Design with<br /><em>intention.</em></strong><div className="board-line"></div><span className="board-note">systems / interaction<br />/ visual language</span></div><div className="board-art"><div className="art-ring"></div><div className="art-square"></div><MousePointer2 className="cursor" size={18} fill="currentColor" /></div></div>
      <div className="board-footer"><span>01 — 04</span><span>scroll to explore <ArrowRight size={12} /></span></div>
    </motion.div>
  </div>;
}

function Hero() {
  return <section className="hero-section" id="top"><div className="hero-noise"></div><div className="hero-content"><div className="hero-copy"><Reveal><p className="eyebrow"><span className="eyebrow-line"></span> UI/UX DESIGN + AI COURSE</p></Reveal><Reveal delay={.08}><h1>MASTER UI/UX.<br /><span>DESIGN WITH <em>AI.</em></span><br />BUILD YOUR FUTURE.</h1></Reveal><Reveal delay={.16}><p className="hero-description">Learn UI/UX from fundamentals to real-world projects, build a professional portfolio, and discover modern AI-powered workflows to design faster and smarter.</p></Reveal><Reveal delay={.22}><div className="hero-actions"><div className="hero-primary-cta"><Button>Enroll now</Button><span className="urgency-arrows" aria-hidden="true"><i /><i /><i /></span><div className="hero-urgency" role="status" aria-label="Hurry up! Limited slots only"><Clock className="urgency-icon" size={20} aria-hidden="true" /><span className="urgency-copy"><strong>Hurry Up!</strong><small>Limited Slots Only</small></span></div></div></div></Reveal><Reveal delay={.3}><div className="hero-meta"><span><strong>18 classes</strong> focused practice</span><span><strong>8 AI tools</strong> modern workflows</span><span><strong>Real projects</strong> portfolio ready</span><span><strong>Portfolio ready</strong> career focused</span></div></Reveal></div><HeroVisual /></div><div className="hero-bottom"><span>SCROLL TO BEGIN</span><ArrowDownRight size={18} /><span className="hero-index">01 — 13</span></div></section>;
}

export default Hero;
