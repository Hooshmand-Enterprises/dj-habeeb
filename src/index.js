import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Cache busting old ServiceWorker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.ready.then(registration => {
    registration.unregister();

    if (caches) {
      // Service worker cache should be cleared with caches.delete()
      caches.keys().then(async (names) => {
        await Promise.all(names.map(name => caches.delete(name)));
      });
    }
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
