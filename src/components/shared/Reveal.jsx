import React from 'react';
import { motion, useInView } from 'framer-motion';

function Reveal({ children, className = '', delay = 0 }) {
  const ref = React.useRef(null);
  const visible = useInView(ref, { once: true, margin: '-80px' });
  return <motion.div ref={ref} className={className} initial={{ opacity: 0, y: 28 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export default Reveal;
