import { StrictMode } from 'react';
import '@app/index.css';
import { init, miniApp } from '@telegram-apps/sdk-react';
import { createRoot } from 'react-dom/client';
import App from '@/app/App';

const initializeTelegramSDK = async () => {
  try {
    await init();

    if (miniApp.ready.isAvailable()) {
      await miniApp.ready();
      console.log('Mini App готово');
    }
  } catch (error) {
    console.error('Ошибка инициализации:', error);
  }
};

initializeTelegramSDK();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
