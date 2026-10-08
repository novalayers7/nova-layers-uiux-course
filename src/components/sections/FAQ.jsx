import Reveal from '../shared/Reveal';
import AccordionList from '../shared/AccordionList';
import './FAQ.css';

const faqs = [
  ['What is the Nova Layers UI/UX course?', 'It is a practical course that builds your design fundamentals and UX thinking through UI design, real-world projects, portfolio work, and modern design workflows.'],
  ['Who can join the course?', 'Beginners, students, graduates, working professionals, and anyone looking to start or transition into UI/UX design can join.'],
  ['Do I need previous design experience?', 'No. The course starts with the fundamentals and builds your skills progressively, so prior UI/UX experience is not required.'],
  ['What will I learn?', 'You will explore UI/UX fundamentals, user research, information architecture, user flows, wireframing, UI design, prototyping, design systems, responsive and accessible design, usability, portfolio projects, and AI-assisted workflows.'],
  ['How many classes are included?', 'The course follows an 18-class structure, with focused practice throughout the learning journey.'],
  ['Will I work on real projects?', 'Yes. The course is project-based, giving you practical opportunities to apply what you learn and create work for your portfolio.'],
  ['Will I build a UI/UX portfolio?', 'Yes. You will develop portfolio-ready projects and learn to present your process as clear case studies that show how you approach design problems.'],
  ['What tools will I learn?', 'You will learn Figma for interface design and prototyping, along with the AI tools and workflows featured in the course.'],
  ['Is AI included in the course?', 'Yes. You will explore modern AI-assisted workflows for research, ideation, and design while building the core UI/UX skills needed to make thoughtful decisions.'],
  ['Can beginners join?', 'Absolutely. The learning journey begins with foundations and moves step by step into research, interface design, prototyping, AI workflows, and portfolio work.'],
  ['Is this course suitable for students or fresh graduates?', 'Yes. The practical learning and portfolio-focused projects help you build relevant skills and work you can share when exploring UI/UX opportunities.'],
  ['What will I have after completing the course?', 'You will have practical UI/UX knowledge, project experience, portfolio-ready work, and a stronger understanding of the design process.'],
  ['Is the course only about making designs look good?', 'No. UI/UX also involves understanding user problems, research, structure, usability, and interaction—then using visual design to communicate clearly.'],
  ['How do I enroll?', 'Use the Enroll Now button or the enrollment contact form on the website to get started.'],
];

function FAQ() {
  return <section className="faq section-light" id="faq"><div className="faq-heading"><Reveal><p className="eyebrow dark"><span className="eyebrow-line"></span> questions, answered</p><h2>Before you<br /><em>step in.</em></h2></Reveal></div><Reveal delay={.1}><AccordionList items={faqs} variant="faq-list" /></Reveal></section>;
}

export default FAQ;
