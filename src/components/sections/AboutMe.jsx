import { ArrowUpRight } from 'lucide-react';
import Reveal from '../shared/Reveal';
import founderImage from '../../assests/founder.png';
import './AboutMe.css';

function AboutMeSection() {
  const mastery = [
    'UX fundamentals', 'User research', 'Information architecture', 'Wireframing', 'UI design',
    'Design systems', 'Prototyping', 'Responsive design', 'Interaction design', 'AI-assisted design',
  ];
  return <section className="about-profile section-dark" id="about-me" aria-labelledby="about-profile-title">
    <div className="about-profile-backdrop" aria-hidden="true"><Reveal><span>GURU</span></Reveal></div>
    <div className="about-profile-topline"><span>FOUNDER / NOVA LAYERS</span><span>UI/UX DESIGN + AI</span></div>
    <div className="about-profile-composition">
      <Reveal className="about-profile-portrait-wrap" delay={.08}>
        <div className="about-profile-portrait"><img src={founderImage} alt="Guru, founder and creative director of Nova Layers" /></div>
        <span className="about-profile-image-index">NOVA LAYERS / FOUNDER</span>
      </Reveal>
      <Reveal className="about-profile-note" delay={.16}>
        <p className="eyebrow"><span className="eyebrow-line"></span> FOUNDER’S NOTE</p>
        <h2 id="about-profile-title">FOUNDER OF<br /><em>NOVA LAYERS</em></h2>
        <p>Guru is the Founder &amp; Creative Director of Nova Layers, combining UI/UX design, creative thinking and modern digital technology.</p>
        <div className="about-profile-specialties"><span>UI/UX DESIGN</span><span>CREATIVE DIRECTION</span><span>DIGITAL EXPERIENCE</span><span>AI-ASSISTED DESIGN</span></div>
      </Reveal>
      <Reveal className="about-profile-mastery" delay={.22}>
        <p className="eyebrow"><span className="eyebrow-line"></span> UI/UX MASTERY</p>
        <div className="about-profile-mastery-list">{mastery.map((item, index) => <Reveal key={item} delay={.28 + index * .035}><span><small>{String(index + 1).padStart(2, '0')}</small>{item}<ArrowUpRight size={13} /></span></Reveal>)}</div>
      </Reveal>
      <Reveal className="about-profile-signature" delay={.3}>
        <span>FOUNDER</span><strong>GURU</strong><div><b>FOUNDER &amp; CREATIVE DIRECTOR</b><i></i><b>NOVA LAYERS</b></div>
      </Reveal>
    </div>
  </section>;
}

export default AboutMeSection;
