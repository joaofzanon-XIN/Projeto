import { templates } from './templates.js';
import { validateForm } from './formValidation.js';

const app = document.getElementById('app');

function render(route) {
  app.innerHTML = templates[route] || templates['home'];
  if (route === 'contato') {
    const form = document.querySelector('form');
    form.addEventListener('submit', validateForm);
  }
}

document.querySelectorAll('[data-route]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const route = e.target.getAttribute('data-route');
    window.location.hash = route;
  });
});

window.addEventListener('hashchange', () => {
  const route = window.location.hash.replace('#', '');
  render(route);
});

window.addEventListener('DOMContentLoaded', () => {
  const route = window.location.hash.replace('#', '') || 'home';
  render(route);

  // Restaurar modo contraste se estiver ativo
  if (localStorage.getItem('contrastMode') === 'true') {
    document.body.classList.add('high-contrast');
  }

  // Botão de contraste
  const btn = document.createElement('button');
  btn.id = 'toggle-contrast';
  btn.innerText = 'Alto Contraste';
  btn.setAttribute('aria-label', 'Ativar alto contraste');
  document.body.appendChild(btn);

  btn.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
    const active = document.body.classList.contains('high-contrast');
    localStorage.setItem('contrastMode', active);
  });
});