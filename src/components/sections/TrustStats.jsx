import Reveal from '../shared/Reveal';
import './TrustStats.css';

const stats = [
  { value: '10k+', label: 'designers in Nova' },
  { value: '4.9/5', label: 'student rating' },
  { value: '50+', label: 'real-world projects' },
  { value: '8', label: 'AI tools' },
];

function TrustStats() {
  return <section className="trust section-light"><Reveal><p className="eyebrow dark"><span className="eyebrow-line"></span> made for the next wave</p><h2>For people who see<br /><em>possibility</em> everywhere.</h2></Reveal><div className="stats-grid">{stats.map((stat, i) => <Reveal key={stat.label} delay={i * .08}><div className="stat"><strong>{stat.value}</strong><span>{stat.label}</span></div></Reveal>)}</div></section>;
}

export default TrustStats;
