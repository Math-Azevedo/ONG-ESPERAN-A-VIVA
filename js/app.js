import { renderInicioTemplate, renderProjetosTemplate, renderCadastroTemplate } from './components.js';
import { initFormValidation } from './validation.js';

// Dicionário de Rotas SPA
const routes = {
  '#inicio': renderInicioTemplate,
  '#projetos': renderProjetosTemplate,
  '#cadastro': renderCadastroTemplate
};

// Gerenciador de Roteamento
function router() {
  const hash = window.location.hash || '#inicio';
  const mainContent = document.getElementById('app-main');
  const renderFn = routes[hash] || routes['#inicio'];

  if (mainContent && renderFn) {
    // Injeta o novo template na div principal
    mainContent.innerHTML = renderFn();

    // Se estiver na tela de cadastro, aciona o manipulador de formulário
    if (hash === '#cadastro') {
      initFormValidation();
    }
  }

  updateActiveMenu(hash);
}

// Destaca o link ativo no cabeçalho
function updateActiveMenu(currentHash) {
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    if (link.getAttribute('href') === currentHash) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Escutadores de EventosGlobais
window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);