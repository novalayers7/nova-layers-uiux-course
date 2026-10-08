import { Asterisk } from 'lucide-react';
import novaLogo from '../../assests/nova logo 2.png';
import './Footer.css';

function Footer() {
  return <footer className="footer section-dark" id="contact"><div className="footer-top"><a className="nova-logo" href="#top" aria-label="Nova home"><img src={novaLogo} alt="Nova" /></a><p>A design school for<br />the curious.</p><div className="footer-links"><a href="#what-youll-learn">What you'll learn</a><a href="#learning-process">Learning process</a><a href="#enroll">Enroll</a></div><div className="footer-links"><a href="#">Instagram</a><a href="#">LinkedIn</a><a href="mailto:hello@novalayers.studio">Contact</a><a href="#">Privacy</a></div></div><div className="footer-bottom"><span>© 2026 Nova Layers. Placeholder brand.</span><span>Made for better questions <Asterisk size={13} /></span></div></footer>;
}

export default Footer;
