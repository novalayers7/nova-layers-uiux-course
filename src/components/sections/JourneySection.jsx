
import React, { useRef, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ArrowUpDown, Hand } from 'lucide-react';
import Reveal from '../shared/Reveal';
import './JourneySection.css';

const chapters = [
  {
    number: '01',
    title: 'Foundations',
    text: 'Build the visual and strategic foundation every UI/UX designer needs.',
    tags: ['Design thinking', 'UI / UX fundamentals', 'Visual principles', 'Human-centered design']
  },
  {
    number: '02',
    title: 'Research',
    text: 'Turn human insight into a clear direction for the product you are designing.',
    tags: ['User research', 'Personas', 'User problems', 'Competitive analysis']
  },
  {
    number: '03',
    title: 'Information architecture',
    text: 'Give content, navigation, and every user flow a purposeful structure.',
    tags: ['User flows', 'Sitemaps', 'Navigation', 'Information hierarchy']
  },
  {
    number: '04',
    title: 'Wireframing',
    text: 'Explore responsive layouts and interaction plans before the polish arrives.',
    tags: ['Low-fidelity wireframes', 'Layouts', 'Responsive structures', 'Interaction planning']
  },
  {
    number: '05',
    title: 'UI design',
    text: 'Shape typography, color, spacing, and components into a consistent interface.',
    tags: ['Typography', 'Color', 'Spacing', 'Visual hierarchy', 'Components']
  },
  {
    number: '06',
    title: 'Figma',
    text: 'Work fluently with frames, Auto Layout, variants, styles, and prototypes.',
    tags: ['Frames', 'Auto Layout', 'Components', 'Variants', 'Prototyping']
  },
  {
    number: '07',
    title: 'Prototyping',
    text: 'Make ideas feel real with transitions, micro-interactions, and usability testing.',
    tags: ['Interactive prototypes', 'Transitions', 'Micro interactions', 'Usability testing']
  },
  {
    number: '08',
    title: 'Design systems',
    text: 'Build reusable foundations that help digital products scale with clarity.',
    tags: ['Components', 'Design tokens', 'Variables', 'Libraries', 'Scalable UI']
  },
  {
    number: '09',
    title: 'AI + UI/UX',
    text: 'Use modern AI workflows to research, ideate, explore, and design with speed.',
    tags: ['AI-assisted research', 'AI ideation', 'AI wireframing', 'AI visual exploration', 'AI workflows']
  },
  {
    number: '10',
    title: 'Real-world products',
    text: 'Bring everything together in client-style work, case studies, and a portfolio.',
    tags: ['Landing pages', 'Web applications', 'Mobile interfaces', 'Client-style projects', 'Portfolio case studies']
  }
];

const STEP = 360 / chapters.length;
const wrap = (n) => ((n % chapters.length) + chapters.length) % chapters.length;

function JourneySection() {
  const [activeChapter, setActiveChapter] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [dragging, setDragging] = useState(false);

  const wheelRef = useRef(null);
  const rotationRef = useRef(0);
  const dragRef = useRef({
    active: false,
    pointerId: null,
    lastAngle: 0,
    moved: false
  });
  const wheelCooldown = useRef(0);

  const updateRotation = useCallback((value) => {
    rotationRef.current = value;
    setRotation(value);
    setActiveChapter(wrap(Math.round(-value / STEP)));
  }, []);

  const selectChapter = useCallback((index) => {
    const next = wrap(index);
    const base = -next * STEP;
    const turns = Math.round((rotationRef.current - base) / 360);
    updateRotation(base + turns * 360);
  }, [updateRotation]);

  const getAngle = (event) => {
    const rect = wheelRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    return Math.atan2(y, x) * 180 / Math.PI;
  };

  const startDrag = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    dragRef.current = {
      active: true,
      pointerId: event.pointerId,
      lastAngle: getAngle(event),
      moved: false
    };
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const moveDrag = (event) => {
    const drag = dragRef.current;
    if (!drag.active || drag.pointerId !== event.pointerId) return;

    const angle = getAngle(event);
    let delta = angle - drag.lastAngle;

    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;

    drag.lastAngle = angle;
    if (Math.abs(delta) > 0.2) drag.moved = true;

    updateRotation(rotationRef.current + delta);
  };

  const endDrag = (event) => {
    const drag = dragRef.current;
    if (!drag.active || drag.pointerId !== event.pointerId) return;

    drag.active = false;
    setDragging(false);
    selectChapter(Math.round(-rotationRef.current / STEP));

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handleWheel = (event) => {
    if (Math.abs(event.deltaY) < 3) return;
    const now = performance.now();
    if (now - wheelCooldown.current < 400) return;
    wheelCooldown.current = now;

    selectChapter(activeChapter + (event.deltaY > 0 ? 1 : -1));
  };

  const chapter = chapters[activeChapter];

  return (
    <section className="journey az-journey section-light" id="learning-process">
      <Reveal>
        <p className="eyebrow dark">
          <span className="eyebrow-line" />
          the Nova Layers method
        </p>

        <h2 className="az-title">
          <span>FROM</span>
          <span className="az-title-sequence">
            <span>A</span>
            <em>→</em>
            <span>Z</span>
          </span>
        </h2>

        <h3 className="az-subheading">
          Everything you need to become a modern UI/UX designer.
        </h3>

        <p className="az-description">
          From your first sketch to a complete digital product, learn the strategy,
          research, interface design, Figma, prototyping, design systems,
          AI workflows and real-world product thinking behind professional UI/UX.
        </p>

        <a className="az-cta" href="#curriculum">
          Explore the journey <ArrowRight size={15} />
        </a>
      </Reveal>

      <div className="az-interactive-layout">
        <div className="az-wheel-column">
          <div className="az-wheel-hint">
            DRAG TO EXPLORE <span>↕</span>
          </div>

          <div
            ref={wheelRef}
            className={`az-wheel-stage ${dragging ? 'is-dragging' : ''}`}
            onPointerDown={startDrag}
            onPointerMove={moveDrag}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onWheel={handleWheel}
            role="group"
            aria-label="Interactive course chapter wheel"
          >
            <div
              className="az-wheel"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: dragging
                  ? 'none'
                  : 'transform .5s cubic-bezier(.22,1,.36,1)'
              }}
            >
              {chapters.map((item, index) => {
                const angle = index * STEP;
                const active = activeChapter === index;

                return (
                  <button
                    type="button"
                    key={item.number}
                    className={`az-wheel-label ${active ? 'active' : ''}`}
                    style={{
                      transform: `rotate(${angle}deg) translateY(calc(var(--wheel-radius) * -1)) rotate(${-angle - rotation}deg)`
                    }}
                    onPointerDown={(event) => event.stopPropagation()}
                    onClick={(event) => {
                      event.stopPropagation();
                      selectChapter(index);
                    }}
                    aria-pressed={active}
                  >
                    <span>{item.number}</span>
                    {item.title}
                  </button>
                );
              })}

              <div className="az-wheel-center">
                <span>A</span><i /><span>Z</span>
              </div>
            </div>
          </div>

          <div className="az-wheel-caption">
            10 chapters / one complete practice
          </div>

          <button
            type="button"
            className="az-mobile-guide"
            onClick={() => selectChapter(activeChapter + 1)}
            aria-label="View next course chapter"
          >
            <span className="az-guide-icon"><Hand size={16} /></span>
            <span className="az-guide-copy">
              <strong>DRAG WHEEL TO EXPLORE</strong>
              <small>View chapter details below</small>
            </span>
            <ArrowUpDown className="az-guide-arrow" size={17} />
          </button>
        </div>

        <div className="az-chapter-panel" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.article
              key={chapter.number}
              className="az-active-chapter"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: .24, ease: 'easeOut' }}
            >
              <div className="az-chapter-top">
                <span className="az-chapter-number">CHAPTER {chapter.number}</span>
                <span className="az-chapter-label">NOVA LAYERS / A–Z</span>
              </div>

              <h3>{chapter.title}</h3>
              <p>{chapter.text}</p>

              <div className="az-learn-label">WHAT YOU'LL LEARN</div>

              <div className="az-tags">
                {chapter.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>

              <div className="az-panel-footer">
                <span>UI/UX DESIGN + AI</span>
                <ArrowRight size={16} />
              </div>

              <div className="az-rotate-hint">
                <span>↕</span><small>ROTATE TO EXPLORE</small>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default JourneySection;
