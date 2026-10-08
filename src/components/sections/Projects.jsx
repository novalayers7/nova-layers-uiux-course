import { ArrowRight, ArrowUpRight, Search, ShoppingBag } from 'lucide-react';
import Reveal from '../shared/Reveal';
import './Projects.css';

const concepts = [
  { type: 'UI PRACTICE', title: 'Mobile app interface', text: 'A simple daily wellness app, from overview to activity details.', className: 'practice-mobile' },
  { type: 'WEB UI', title: 'Landing page', text: 'A considered page structure with navigation, content, and a clear CTA.', className: 'practice-web' },
  { type: 'DASHBOARD UI', title: 'Analytics dashboard', text: 'Bring key information, trends, and navigation into one clear workspace.', className: 'practice-dashboard' },
  { type: 'E-COMMERCE UI', title: 'Shopping experience', text: 'A product discovery screen with filters, product details, and a purchase path.', className: 'practice-shop' },
];

function Projects() {
  return <section className="projects section-light" id="work">
    <div className="section-head">
      <Reveal>
        <p className="eyebrow dark"><span className="eyebrow-line"></span> sample UI/UX work</p>
        <h2>Learn UI/UX<br /><em>by building.</em></h2>
      </Reveal>
      <Reveal delay={.12}><p className="section-intro">Explore the kinds of interfaces you’ll learn to design through focused UI/UX practice.</p></Reveal>
    </div>
    <div className="project-grid">
      {concepts.map((concept, index) => <Reveal key={concept.type} delay={index * .08}>
        <article className={`project-card ${concept.className}`}>
          <div className="project-art" aria-label={`${concept.type} sample interface`}>
            {index === 0 && <div className="sample-phone">
              <div className="sample-phone-top"><span>9:41</span><i></i></div>
              <div className="sample-app-greeting"><small>MONDAY, 12 MAY</small><strong>Good morning,<br />Alex</strong></div>
              <div className="sample-wellness-card"><span>YOUR DAILY MOVE</span><b>Keep your<br />rhythm.</b><div className="sample-progress"><i></i></div><small>2,840 <em>/ 6,000 steps</em></small></div>
              <div className="sample-phone-nav"><i>⌂</i><i>◷</i><i>♡</i><i>○</i></div>
            </div>}
            {index === 1 && <div className="sample-web-window">
              <div className="sample-window-bar"><i></i><i></i><i></i><span>studio.example</span></div>
              <div className="sample-web-nav"><b>FORMA</b><span>Journal</span><span>Objects</span><span>About</span><button>Explore <ArrowUpRight size={10} /></button></div>
              <div className="sample-web-hero"><div><small>MADE FOR SLOW LIVING</small><strong>Room to<br /><em>reimagine.</em></strong><p>Thoughtful pieces for the spaces you call home.</p><button>Discover the collection <ArrowRight size={10} /></button></div><div className="sample-web-object"><i></i><b></b><span></span></div></div>
              <div className="sample-web-footer"><span>01 / A MORE CONSIDERED HOME</span><span>SCROLL TO EXPLORE ↓</span></div>
            </div>}
            {index === 2 && <div className="sample-dashboard">
              <aside className="sample-dash-sidebar"><b><i></i> northstar</b><span className="active">◫ &nbsp; Overview</span><span>▤ &nbsp; Reports</span><span>◷ &nbsp; Activity</span><span>⚙ &nbsp; Settings</span><small>WORKSPACE</small><span>＋ &nbsp; Add workspace</span></aside>
              <div className="sample-dash-main"><div className="sample-dash-top"><span>Workspace / Overview</span><i>AM</i></div><div className="sample-dash-heading"><div><small>MONDAY, MAY 12</small><b>Your overview</b></div><button>Last 30 days⌄</button></div><div className="sample-metric-row"><div><small>ACTIVE USERS</small><b>2,840 <em>↗ 12.8%</em></b></div><div><small>SESSIONS</small><b>4,392 <em>↗ 8.2%</em></b></div><div><small>AVG. TIME</small><b>3m 24s</b></div></div><div className="sample-chart"><div><b>Activity</b><small>Users over time</small></div><div className="sample-chart-lines"><i></i><i></i><i></i><svg viewBox="0 0 300 75" preserveAspectRatio="none" aria-hidden="true"><path d="M0 61 C22 56 27 62 47 48 S75 52 91 40 S118 48 138 28 S168 42 186 27 S209 35 231 18 S267 28 300 5" /></svg></div><div className="sample-chart-days"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span></div></div></div>
            </div>}
            {index === 3 && <div className="sample-shop-window">
              <div className="sample-shop-nav"><b>FORM / OBJECT</b><span>Furniture</span><span>Lighting</span><span>Objects</span><Search size={13} /><ShoppingBag size={13} /></div>
              <div className="sample-shop-content"><div className="sample-shop-filters"><small>COLLECTION / 24</small><b>Everyday<br />objects</b><span>All pieces</span><span>Seating</span><span>Lighting</span><span>Accessories</span><div><small>FILTER BY</small><span>Material⌄</span><span>Color⌄</span></div></div><div className="sample-product-grid"><div className="sample-product"><div className="sample-product-art chair"><i></i></div><span>ARC CHAIR</span><b>$420</b></div><div className="sample-product"><div className="sample-product-art lamp"><i></i></div><span>STUDY LAMP</span><b>$185</b></div><div className="sample-product"><div className="sample-product-art table"><i></i></div><span>SIDE TABLE</span><b>$260</b></div><div className="sample-product"><div className="sample-product-art vessel"><i></i></div><span>FORM VASE</span><b>$78</b></div></div></div>
            </div>}
          </div>
          <div className="project-info"><div><span>{concept.type}</span><h3>{concept.title}</h3><p>{concept.text}</p></div><ArrowUpRight aria-hidden="true" /></div>
        </article>
      </Reveal>)}
    </div>
  </section>;
}

export default Projects;
