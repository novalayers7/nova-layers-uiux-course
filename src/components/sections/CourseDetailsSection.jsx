import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '../shared/Reveal';
import './CourseDetailsSection.css';

function CourseDetailsSection() {
  const [selectedTime, setSelectedTime] = React.useState(0);
  const journey = [
    ['01', 'Foundations'], ['02', 'UX'], ['03', 'UI'],
    ['04', 'Prototyping'], ['05', 'AI workflow'], ['06', 'Portfolio'],
  ];
  const topics = ['UI/UX fundamentals', 'User research', 'Wireframing', 'Design systems', 'Prototyping', 'Responsive design', 'AI-assisted workflow', 'Portfolio projects'];

  return <section className="course-details-section" id="course-details" aria-labelledby="course-journey-title">
    <div className="course-editorial-top">
      <Reveal className="course-editorial-copy">
        <p className="eyebrow dark"><span className="eyebrow-line"></span> THE LEARNING JOURNEY</p>
        <h2 id="course-journey-title">18 classes.<br /><em>One complete<br />UI/UX journey.</em></h2>
        <p className="course-editorial-description">A beginner-friendly path from design fundamentals to practical product work. Learn by making, build real-world skills, use AI tools with intention, and shape a portfolio that shows what you can do.</p>
        <div className="course-editorial-meta"><span>BEGINNER FRIENDLY</span><i></i><span>PROJECT BASED</span><i></i><span>PORTFOLIO FOCUSED</span></div>
      </Reveal>
      <div className="course-editorial-visual">
        <Reveal className="course-number-reveal"><div className="course-number-stage"><span className="course-number-label">THE COURSE / 01—18</span><span className="course-number">18</span><span className="course-number-caption">CLASSES<br />ONE PRACTICE</span><span className="course-number-orbit orbit-a"></span><span className="course-number-orbit orbit-b"></span><span className="course-number-cross">+</span></div></Reveal>
        <div className="course-topic-list" aria-label="What you will learn">{topics.map((topic, index) => <Reveal key={topic} delay={index * .045}><span className="course-topic"><small>0{index + 1}</small>{topic}<ArrowUpRight size={13} /></span></Reveal>)}</div>
      </div>
    </div>
    <div className="course-journey-track">
      <div className="course-journey-steps">{journey.map(([number, label], index) => <Reveal key={number} delay={index * .07}><div className="course-journey-step"><span className="course-step-number">{number}</span><span className="course-step-name">{label}</span><span className="course-step-dot"></span></div></Reveal>)}</div>
    </div>
    <div className="course-class-info" aria-label="Class schedule and information">
      <Reveal className="course-class-count">
        <span className="course-info-kicker">COURSE STRUCTURE</span>
        <div className="course-class-number">18</div>
        <div className="course-class-label">CLASSES</div>
        <p>Every Tuesday + Friday</p>
      </Reveal>
      <Reveal className="course-schedule-info" delay={.08}>
        <div className="course-info-heading"><span className="course-info-kicker">WEEKLY SCHEDULE</span><span className="course-weekdays"><i>TU</i><i>FR</i><b>Tuesday + Friday</b></span></div>
        <div className="course-time-heading"><span>CHOOSE YOUR TIMING</span><span>Choose the timing that suits you best.</span></div>
        <div className="course-time-options" role="group" aria-label="Choose your class timing">
          {['4:45 PM – 6:15 PM', '6:45 PM – 8:15 PM'].map((time, index) => <button className={`course-time-option ${selectedTime === index ? 'is-selected' : ''}`} type="button" key={time} aria-pressed={selectedTime === index} onClick={() => setSelectedTime(index)}><small>OPTION 0{index + 1}</small><strong>{time}</strong><span className="course-time-indicator" aria-hidden="true"></span></button>)}
        </div>
      </Reveal>
      <Reveal className="course-mode-info" delay={.16}>
        <div className="course-mode-heading"><span className="course-info-kicker">CLASS MODE</span><span className="course-mode-note">TWO WAYS TO JOIN</span></div>
        <div className="course-mode-options">
          <div className="course-mode-option course-mode-online"><span className="course-mode-indicator online"></span><div><span className="course-mode-label">ONLINE</span><h3>Online Classes</h3><p>Live interactive sessions</p></div></div>
          <div className="course-mode-option course-mode-offline"><span className="course-mode-indicator offline"></span><div><span className="course-mode-label">OFFLINE</span><h3>Offline Classes</h3><p>Contact us for fee details.</p><a className="course-contact-link" href="#enroll">Contact Us <ArrowUpRight size={13} /></a></div></div>
        </div>
      </Reveal>
      <Reveal className="course-fee-info" delay={.22}>
        <div className="course-online-fee"><span className="course-info-kicker">ONLINE CLASS</span><strong>₹20,000</strong><span className="course-total-label">TOTAL COURSE FEE</span></div>
        <div className="course-payment-timeline" aria-label="Online class payment timeline">
          <div className="course-payment-step"><strong>₹10,000</strong><span className="course-payment-share">50% ADVANCE</span><p>Pay ₹10,000 in advance to confirm enrollment.</p></div>
          <i aria-hidden="true"></i>
          <div className="course-payment-step course-payment-classes"><strong>CLASSES 1–11</strong></div>
          <i aria-hidden="true"></i>
          <div className="course-payment-step"><strong>₹10,000</strong><span className="course-payment-share">REMAINING 50%</span><p>Pay the remaining ₹10,000 before the 12th or 13th class.</p></div>
        </div>
      </Reveal>
    </div>
  </section>;
}

export default CourseDetailsSection;
