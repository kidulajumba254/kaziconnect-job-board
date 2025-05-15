
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Apply dark mode immediately if needed
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('vite-ui-theme');

if (savedTheme === 'dark' || (savedTheme !== 'light' && prefersDarkMode)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

createRoot(document.getElementById("root")!).render(<App />);
