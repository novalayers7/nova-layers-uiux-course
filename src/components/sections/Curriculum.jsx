import Reveal from '../shared/Reveal';
import AccordionList from '../shared/AccordionList';
import './Curriculum.css';

const curriculum = [
  ['UI/UX foundations', 'The mental models, principles, and vocabulary behind clear digital products.'],
  ['Research & human insight', 'Ask better questions, map behavior, and turn messy signals into useful direction.'],
  ['Flows & information architecture', 'Give every screen a job and every journey a natural next step.'],
  ['Wireframing & prototyping', 'Explore quickly, test early, and make ideas tangible before the polish.'],
  ['Visual design systems', 'Create a distinctive visual language that scales from a button to a product.'],
  ['Responsive & accessible design', 'Design for real people, real devices, and the realities between the pixels.'],
  ['AI-assisted design workflows', 'Research, ideate, write, and iterate with a focused toolkit of AI methods.'],
  ['Portfolio & career preparation', 'Turn your process into a story that makes your capability easy to see.'],
];

function Curriculum() {
  return <section className="curriculum section-dark" id="curriculum"><div className="curriculum-head"><Reveal><p className="eyebrow"><span className="eyebrow-line"></span> the curriculum</p><h2>Every layer<br /><span>counts.</span></h2></Reveal><Reveal delay={.1}><p>A clear path from the first question to the final case study. Follow it end-to-end or return to the layer your work needs next.</p><span className="curriculum-duration"><span className="pulse-dot"></span> 8 weeks / 18 Classes </span></Reveal></div><Reveal delay={.15}><AccordionList items={curriculum} /></Reveal></section>;
}

export default Curriculum;
