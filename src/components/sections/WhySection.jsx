import { ArrowUpRight, BrainCircuit, Layers3, Target, Zap } from 'lucide-react';
import Reveal from '../shared/Reveal';
import './WhySection.css';

const reasons = [
  { number: '01', icon: Target, title: 'Learn by building', text: 'Trade passive tutorials for briefs, critiques, and product decisions that feel like the real thing.' },
  { number: '02', icon: BrainCircuit, title: 'Design + AI', text: 'Use AI as a thinking partner without losing the taste, empathy, and judgment that make work yours.' },
  { number: '03', icon: Layers3, title: 'Portfolio ready', text: 'Leave with case studies that explain your process clearly and give your next opportunity something to remember.' },
  { number: '04', icon: Zap, title: 'Career focused', text: 'Build the habits, language, and confidence modern product teams look for in a designer.' },
];

function WhySection() {
  return <section className="why-section section-dark" id="what-youll-learn"><div className="section-head"><Reveal><p className="eyebrow"><span className="eyebrow-line"></span> the Nova difference</p><h2>Good design is a<br /><span>way of seeing.</span></h2></Reveal><Reveal delay={.12}><p className="section-intro">The tools change. The way you notice, question, and make meaning is what sets great work apart.</p></Reveal></div><div className="reason-grid">{reasons.map(({ number, icon: Icon, title, text }, i) => <Reveal key={number} delay={i * .08}><article className="reason-card"><div className="card-top"><span>{number}</span><Icon size={22} /></div><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight className="card-arrow" size={22} /></article></Reveal>)}</div></section>;
}

export default WhySection;
