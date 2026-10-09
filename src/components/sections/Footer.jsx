
import { useEffect, useState } from 'react';
import {
  Asterisk,
  ArrowUpRight,
  Phone,
  X,
  ShieldCheck,
} from 'lucide-react';

import novaLogo from '../../assests/nova logo 2.png';
import './Footer.css';

const INSTAGRAM_URL =
  'https://www.instagram.com/_nova_layers_?stkn=MXR6dmY0NTNzeG9kaQ==';

const PHONE_NUMBER = '+917811022879';

function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  useEffect(() => {
    if (!privacyOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setPrivacyOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleEscape);
    };
  }, [privacyOpen]);

  const closePrivacy = () => setPrivacyOpen(false);

  return (
    <>
      <footer className="footer section-dark">
        <div className="footer-top">
          <a
            className="nova-logo"
            href="#top"
            aria-label="Nova Layers home"
          >
            <img src={novaLogo} alt="Nova Layers" />
          </a>

          <p>
            A design school for
            <br />
            the curious.
            <span className="footer-description">
              Learn UI/UX, explore AI-powered design,
              and build experiences that matter.
            </span>
          </p>

          <nav
            className="footer-links"
            aria-label="Course links"
          >
            <span className="footer-link-title">Explore</span>

            <a href="#what-youll-learn">
              What you'll learn
            </a>

            <a href="#learning-process">
              Learning process
            </a>

            <a href="#contact">
              Enroll now
            </a>
          </nav>

          <nav
            className="footer-links"
            aria-label="Contact and information"
          >
            <span className="footer-link-title">
              Connect
            </span>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
              <ArrowUpRight size={12} />
            </a>

            <a href="#contact">
              Contact
            </a>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="footer-phone"
            >
              <Phone size={12} />
              78110 22879
            </a>

            <button
              type="button"
              className="footer-privacy-trigger"
              onClick={() => setPrivacyOpen(true)}
            >
              Privacy Policy
            </button>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Nova Layers.
            All rights reserved.
          </span>

          <span>
            Designed for curious minds
            <Asterisk size={13} />
          </span>
        </div>
      </footer>

      {privacyOpen && (
        <div
          className="privacy-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closePrivacy();
            }
          }}
        >
          <section
            className="privacy-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="privacy-title"
            aria-describedby="privacy-intro"
          >
            <div className="privacy-modal-header">
              <div className="privacy-heading-group">
                <span className="privacy-eyebrow">
                  <ShieldCheck size={14} />
                  YOUR PRIVACY MATTERS
                </span>

                <h2 id="privacy-title">
                  PRIVACY <span>POLICY.</span>
                </h2>
              </div>

              <button
                type="button"
                className="privacy-close"
                onClick={closePrivacy}
                aria-label="Close privacy policy"
                autoFocus
              >
                <X size={20} />
              </button>
            </div>

            <div className="privacy-modal-content">
              <p
                id="privacy-intro"
                className="privacy-intro"
              >
                At Nova Layers, we respect your privacy.
                This policy explains how information
                submitted through our UI/UX + AI course
                website may be collected, used, and
                protected.
              </p>

              <div className="privacy-section">
                <span className="privacy-number">01 /</span>
                <div>
                  <h3>Information We Collect</h3>
                  <p>
                    When you submit a course enquiry or
                    reservation form, we may collect
                    information such as your name, email
                    address, phone number, selected course,
                    and any additional details you provide.
                  </p>
                </div>
              </div>

              <div className="privacy-section">
                <span className="privacy-number">02 /</span>
                <div>
                  <h3>How We Use Your Information</h3>
                  <p>
                    We use the information you submit to
                    respond to enquiries, share course
                    details, explain schedules and fees,
                    assist with enrolment, and communicate
                    relevant updates about your enquiry.
                  </p>
                </div>
              </div>

              <div className="privacy-section">
                <span className="privacy-number">03 /</span>
                <div>
                  <h3>Enquiry Notifications</h3>
                  <p>
                    Our website uses an email delivery
                    service, Resend, to send course
                    enquiry notifications to the Nova
                    Layers team. Information submitted
                    through the form may be included in
                    these notifications so our team can
                    contact you.
                  </p>
                </div>
              </div>

              <div className="privacy-section">
                <span className="privacy-number">04 /</span>
                <div>
                  <h3>Cookies & Analytics</h3>
                  <p>
                    Our website uses Meta Pixel to help
                    measure website visits, understand
                    advertising performance, and improve
                    our course promotions. Meta Pixel may
                    use cookies or similar technologies
                    and process browsing information
                    according to Meta's applicable
                    policies.
                  </p>
                  <p>
                    You may manage browser cookies through
                    your browser settings. Where consent
                    is legally required, tracking should
                    only operate after the appropriate
                    consent has been obtained.
                  </p>
                </div>
              </div>

              <div className="privacy-section">
                <span className="privacy-number">05 /</span>
                <div>
                  <h3>Information Sharing</h3>
                  <p>
                    We do not sell your submitted contact
                    information. Information may be
                    processed by service providers that
                    support our website, email delivery,
                    analytics, or advertising, and may
                    also be disclosed where legally
                    required.
                  </p>
                </div>
              </div>

              <div className="privacy-section">
                <span className="privacy-number">06 /</span>
                <div>
                  <h3>Data Security & Retention</h3>
                  <p>
                    We aim to take reasonable measures to
                    protect enquiry information from
                    unauthorized access, loss, or misuse.
                    We retain personal information only
                    as long as reasonably necessary for
                    the purposes described here or as
                    required by applicable law.
                  </p>
                </div>
              </div>

              <div className="privacy-section">
                <span className="privacy-number">07 /</span>
                <div>
                  <h3>Your Privacy Choices</h3>
                  <p>
                    You can contact Nova Layers to request
                    access to, correction of, or deletion
                    of personal information you have
                    submitted, subject to applicable
                    legal requirements and exceptions.
                  </p>
                </div>
              </div>

              <div className="privacy-section">
                <span className="privacy-number">08 /</span>
                <div>
                  <h3>External Platforms</h3>
                  <p>
                    Our website may link to external
                    platforms such as Instagram. Their
                    privacy practices are governed by
                    their own policies, and we encourage
                    you to review them when visiting
                    those services.
                  </p>
                </div>
              </div>

              <div className="privacy-section">
                <span className="privacy-number">09 /</span>
                <div>
                  <h3>Policy Updates</h3>
                  <p>
                    We may update this policy when our
                    services, technology, or applicable
                    requirements change. The latest
                    version will be made available
                    through this website.
                  </p>
                </div>
              </div>

              <div className="privacy-section">
                <span className="privacy-number">10 /</span>
                <div>
                  <h3>Contact Us</h3>
                  <p>
                    For privacy questions or requests,
                    contact the Nova Layers team using
                    the details below.
                  </p>

                  <a
                    className="privacy-contact-link"
                    href={`tel:${PHONE_NUMBER}`}
                  >
                    +91 78110 22879
                    <ArrowUpRight size={15} />
                  </a>

                  <a
                    className="privacy-contact-link"
                    href="mailto:novalayersteam@gmail.com"
                  >
                    novalayersteam@gmail.com
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </div>

            <div className="privacy-modal-footer">
              <span>
                NOVA LAYERS / PRIVACY & TRUST
              </span>

              <button
                type="button"
                className="privacy-done"
                onClick={closePrivacy}
              >
                CLOSE POLICY
                <X size={13} />
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default Footer;
