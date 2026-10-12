import { createRoot } from 'react-dom/client';
import App from './App';

if (window.location.pathname === '/contact') {
  window.history.scrollRestoration = 'manual';
}

createRoot(document.getElementById('root')).render(<App />);
