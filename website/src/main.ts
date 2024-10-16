import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    ngZoneEventCoalescing: true,
  })
  .catch((err) => console.error(err));

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/ngsw-worker.js')
    .then((registration) => {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch((err) => {
      console.error('Service Worker registration failed:', err);
    });
}

// Adiciona o evento 'beforeinstallprompt'
let deferredPrompt: any;

window.addEventListener('beforeinstallprompt', (event) => {
  // Impede que o Chrome mostre o prompt automaticamente
  event.preventDefault();
  deferredPrompt = event;
  console.log('beforeinstallprompt event fired');

  // Exibe um botão para o usuário instalar o app
  const installButton = document.createElement('button');
  installButton.textContent = 'Instalar App';
  installButton.style.position = 'fixed';
  installButton.style.bottom = '20px';
  installButton.style.right = '20px';
  installButton.style.padding = '10px 20px';
  installButton.style.backgroundColor = '#1976d2';
  installButton.style.color = '#fff';
  installButton.style.border = 'none';
  installButton.style.borderRadius = '5px';
  document.body.appendChild(installButton);

  installButton.addEventListener('click', () => {
    // Mostra o prompt de instalação
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult: any) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Usuário aceitou a instalação');
      } else {
        console.log('Usuário rejeitou a instalação');
      }
      deferredPrompt = null;
      installButton.remove(); // Remove o botão após o clique
    });
  });
});
