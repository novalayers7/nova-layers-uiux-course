import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Reveal from '../shared/Reveal';
import './Registration.css';

function Registration() {
  const [timing, setTiming] = React.useState('04:45 PM \u2014 06:15 PM');
  const timings = ['04:45 PM \u2014 06:15 PM', '06:45 PM \u2014 08:15 PM'];
  const [status, setStatus] = React.useState('idle');
  const [error, setError] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    setError('');
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch('/api/reservation', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(fields) });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success !== true) {
        const diagnostic = result.diagnostic;
        const message = diagnostic?.category && diagnostic?.message
          ? `We could not send your request. Please try again. (${diagnostic.category}: ${diagnostic.message})`
          : 'We could not send your request. Please try again.';
        throw new Error(message);
      }
      form.reset();
      setStatus('success');
    } catch (submitError) {
      setStatus('idle');
      setError(submitError.message?.startsWith('We could not send your request.')
        ? submitError.message
        : 'We could not send your request. Please try again.');
    }
  }
  return <section className="registration section-dark" id="contact" aria-labelledby="registration-title">
    <span id="enroll" className="registration-anchor" aria-hidden="true"></span><span className="registration-backdrop" aria-hidden="true">START</span>
    <div className="registration-inner">
      <Reveal className="registration-copy">
        <p className="registration-eyebrow">NOVA LAYERS / UI&#183;UX PROGRAM</p>
        <h2 id="registration-title">THE NEXT<br />MOVE IS<br /><span>YOURS.</span></h2>
        <p className="registration-description">Choose your preferred batch and take the first step into UI/UX.</p>
        <span className="registration-index">01 / YOUR NEXT CHAPTER</span>
      </Reveal>
      <Reveal className="registration-panel" delay={.12}>
        {status === 'success' ? <div className="registration-success" role="status" aria-live="polite"><CheckCircle2 size={38} strokeWidth={1.5} /><h3>Successfully Reserved</h3><p>Your reservation has been submitted successfully. We&apos;ll contact you shortly.</p></div> : <form className="registration-form" onSubmit={handleSubmit}>
          <div className="registration-fields">
            <label className="registration-field"><span>NAME</span><input name="name" type="text" placeholder="Enter your name" autoComplete="name" required /></label>
            <label className="registration-field"><span>EMAIL</span><input name="email" type="email" placeholder="Enter your email" autoComplete="email" required /></label>
            <label className="registration-field"><span>PHONE NUMBER</span><input name="phone" type="tel" placeholder="Enter your phone number" autoComplete="tel" required /></label>
            <label className="registration-field"><span>ADDRESS</span><input name="address" type="text" placeholder="Enter your address" autoComplete="street-address" required /></label>
            <label className="registration-field"><span>DISTRICT</span><input name="district" type="text" placeholder="Enter your district" required /></label>
          </div>
          <fieldset className="registration-timing">
            <legend>TIMING <span>CHOOSE ONE BATCH</span></legend>
            <div className="registration-time-options">{timings.map((option, index) => <label className={`registration-time-option ${timing === option ? 'selected' : ''}`} key={option}>
              <input type="radio" name="timing" value={option} checked={timing === option} onChange={() => setTiming(option)} />
              <span className="registration-time-index">0{index + 1}</span><span>{option}</span><i aria-hidden="true">{'\u2713'}</i>
            </label>)}</div>
          </fieldset>
          {error && <p className="registration-error" role="alert">{error}</p>}<button className="registration-submit" type="submit" disabled={status === 'sending'}><span>{status === 'sending' ? 'SENDING REQUEST…' : 'RESERVE MY SLOT'}</span>{status === 'sending' ? <span className="registration-spinner" aria-hidden="true" /> : <ArrowRight size={17} />}</button>
          <p className="registration-microcopy">Limited seats per batch.</p>
        </form>}
      </Reveal>
    </div>
  </section>;
}

export default Registration;


