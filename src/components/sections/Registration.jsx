import React from 'react';
import { ArrowRight } from 'lucide-react';
import Reveal from '../shared/Reveal';
import './Registration.css';

function Registration() {
  const [timing, setTiming] = React.useState('04:45 PM — 06:15 PM');
  const timings = ['04:45 PM — 06:15 PM', '06:45 PM — 08:15 PM'];

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent('Nova Layers UI·UX program registration');
    const body = encodeURIComponent([
      `Name: ${formData.get('name')}`,
      `Phone number: ${formData.get('phone')}`,
      `Address: ${formData.get('address')}`,
      `District: ${formData.get('district')}`,
      `Timing: ${timing}`,
    ].join('\\n'));
    window.location.href = `mailto:hello@novalayers.studio?subject=${subject}&body=${body}`;
  }

  return <section className="registration section-dark" id="enroll" aria-labelledby="registration-title">
    <span className="registration-backdrop" aria-hidden="true">START</span>
    <div className="registration-inner">
      <Reveal className="registration-copy">
        <p className="registration-eyebrow">NOVA LAYERS / UI·UX PROGRAM</p>
        <h2 id="registration-title">THE NEXT<br />MOVE IS<br /><span>YOURS.</span></h2>
        <p className="registration-description">Choose your preferred batch and take the first step into UI/UX.</p>
        <span className="registration-index">01 / YOUR NEXT CHAPTER</span>
      </Reveal>
      <Reveal className="registration-panel" delay={.12}>
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="registration-fields">
            <label className="registration-field"><span>NAME</span><input name="name" type="text" placeholder="Enter your name" autoComplete="name" required /></label>
            <label className="registration-field"><span>PHONE NUMBER</span><input name="phone" type="tel" placeholder="Enter your phone number" autoComplete="tel" required /></label>
            <label className="registration-field"><span>ADDRESS</span><input name="address" type="text" placeholder="Enter your address" autoComplete="street-address" required /></label>
            <label className="registration-field"><span>DISTRICT</span><input name="district" type="text" placeholder="Enter your district" required /></label>
          </div>
          <fieldset className="registration-timing">
            <legend>TIMING <span>CHOOSE ONE BATCH</span></legend>
            <div className="registration-time-options">{timings.map((option, index) => <label className={`registration-time-option ${timing === option ? 'selected' : ''}`} key={option}>
              <input type="radio" name="timing" value={option} checked={timing === option} onChange={() => setTiming(option)} />
              <span className="registration-time-index">0{index + 1}</span><span>{option}</span><i aria-hidden="true">✓</i>
            </label>)}</div>
          </fieldset>
          <button className="registration-submit" type="submit"><span>RESERVE MY SLOT</span><ArrowRight size={17} /></button>
          <p className="registration-microcopy">Limited seats per batch.</p>
        </form>
      </Reveal>
    </div>
  </section>;
}

export default Registration;
