import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import './AccordionList.css';

function AccordionList({ items, variant = '' }) {
  const [open, setOpen] = React.useState(0);
  return <div className={`accordion-list ${variant}`}>{items.map(([title, text], i) => <div className={`accordion-item ${open === i ? 'active' : ''}`} key={title}><button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}><span className="accordion-index">{String(i + 1).padStart(2, '0')}</span><strong>{title}</strong><ChevronDown /></button><motion.div initial={false} animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }} transition={{ duration: .35 }} className="accordion-answer"><p>{text}</p></motion.div></div>)}</div>;
}

export default AccordionList;
