import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Workbox } from 'workbox-window';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

if ('serviceWorker' in navigator) {
  // Проверяем, поддерживает ли браузер service worker'ы
  const wb = new Workbox('/sw.js'); // Укажите путь к вашему service worker'у

  wb.addEventListener('installed', (event) => {
    if (event.isUpdate) {
      console.log('Новый service worker установлен');
    } else {
      console.log('Service Worker впервые установлен');
    }
  });

  wb.addEventListener('activated', () => {
    console.log('Service Worker активирован');
  });

  wb.addEventListener('controlling', () => {
    console.log('Service Worker теперь контролирует страницу');
  });

  wb.register(); // Регистрируем service worker
}
