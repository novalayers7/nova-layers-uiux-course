import { ArrowUpRight } from 'lucide-react';

function Button({ children, secondary = false, href = '#enroll' }) {
  return <a className={`button ${secondary ? 'button-secondary' : ''}`} href={href}>{children}<ArrowUpRight /></a>;
}

export default Button;
