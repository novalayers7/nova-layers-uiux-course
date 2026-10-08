import { Layers3 } from 'lucide-react';
import Reveal from '../shared/Reveal';
import './CourseOverview.css';

function CourseOverview() {
  return <section className="overview section-dark"><div className="overview-heading"><Reveal><p className="eyebrow"><span className="eyebrow-line"></span> the full picture</p><h2>Everything you need<br />to <span>make an impact.</span></h2></Reveal><Reveal delay={.12}><p>One deliberate, practical curriculum that takes you from instinct to interface, with enough room to make the work yours.</p></Reveal></div><div className="orbit-diagram"><div className="diagram-ring ring-one"></div><div className="diagram-ring ring-two"></div><div className="diagram-core"><Layers3 size={26} /><span>your<br /><b>point of view</b></span></div>{['research', 'systems', 'prototype', 'visual craft'].map((item, i) => <div key={item} className={`diagram-label label-${i + 1}`}><span></span>{item}</div>)}</div></section>;
}

export default CourseOverview;
