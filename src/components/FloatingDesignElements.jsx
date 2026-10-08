import React from 'react';
import './FloatingDesignElements.css';

const artifacts = [
	{ kind: 'cursor', x: 9, y: 16, speed: .08, rotate: -2 },
	{ kind: 'wireframe', x: 82, y: 25, speed: .12, rotate: 1 },
	{ kind: 'selection', x: 8, y: 47, speed: .1, rotate: -1 },
	{ kind: 'grid', x: 88, y: 57, speed: .07, rotate: 1 },
	{ kind: 'component', x: 15, y: 70, speed: .14, rotate: 2 },
	{ kind: 'type', x: 82, y: 78, speed: .09, rotate: -2 },
	{ kind: 'nodes', x: 8, y: 89, speed: .11, rotate: 2 },
];

function Artifact({ kind }) {
	if (kind === 'cursor') return <div className="fx-cursor"><span /></div>;
	if (kind === 'wireframe') return <div className="fx-wireframe"><i /><i /><i /><b /><em /></div>;
	if (kind === 'selection') return <div className="fx-selection"><i /><i /><i /><i /></div>;
	if (kind === 'grid') return <div className="fx-grid"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>;
	if (kind === 'component') return <div className="fx-component"><span>BUTTON</span><b>Continue</b></div>;
	if (kind === 'type') return <div className="fx-type">UI<small>/ 01</small></div>;
	return <div className="fx-nodes"><i /><i /><i /><b /><em /></div>;
}

export default function FloatingDesignElements() {
	const itemRefs = React.useRef([]);
	const [heroVisible, setHeroVisible] = React.useState(true);

	React.useEffect(() => {
		const hero = document.querySelector('.hero-section');
		if (!hero) return;
		const observer = new IntersectionObserver(([entry]) => setHeroVisible(entry.isIntersecting), { threshold: 0 });
		observer.observe(hero);
		return () => observer.disconnect();
	}, []);

	React.useEffect(() => {
		const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		let frame = 0;
		let scrollY = window.scrollY;
		const render = () => {
			frame = 0;
			itemRefs.current.forEach((element, index) => {
				if (!element) return;
				const artifact = artifacts[index];
				const drift = reducedMotion ? 0 : Math.sin(scrollY * .0007 + index) * 4;
				const y = reducedMotion ? 0 : -scrollY * artifact.speed;
				const rotation = reducedMotion ? artifact.rotate : artifact.rotate + Math.sin(scrollY * .0004 + index) * 1.5;
				element.style.transform = `translate3d(${drift}px,${y}px,0) rotate(${rotation}deg)`;
			});
		};
		const onScroll = () => { scrollY = window.scrollY; if (!frame) frame = requestAnimationFrame(render); };
		render();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', onScroll); };
	}, []);

	return <div className={`floating-design-layer${heroVisible ? ' hero-visible' : ''}`} aria-hidden="true">{artifacts.map((artifact, index) => <div key={artifact.kind} className={`fx-artifact fx-${artifact.kind}`} data-speed={artifact.speed} ref={element => { itemRefs.current[index] = element; }} style={{ left: `${artifact.x}%`, top: `${artifact.y}%`, '--fx-delay': `${index * -.9}s` }}><Artifact kind={artifact.kind} /></div>)}</div>;
}
