import { salvarVoluntario } from './storage.js';

// Regras de Validação com Expressões Regulares
const rules = {
  nome: {
    regex: /^[A-Za-zÀ-ÖØ-öø-ÿ]+(\s+[A-Za-zÀ-ÖØ-öø-ÿ]+)+$/,
    message: "Insira nome e sobrenome."
  },
  cpf: {
    regex: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
    message: "CPF deve ser no formato 000.000.000-00"
  },
  email: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Digite um e-mail válido."
  },
  telefone: {
    regex: /^\(\d{2}\)\s?\d{4,5}-\d{4}$/,
    message: "Telefone inválido."
  }
};

// Aplica máscaras com a biblioteca IMask.js
export function aplicarMascaras() {
  const cpfInput = document.getElementById('cpf');
  const telInput = document.getElementById('telefone');

  if (cpfInput && window.IMask) {
    window.IMask(cpfInput, { mask: '000.000.000-00' });
  }
  if (telInput && window.IMask) {
    window.IMask(telInput, {
      mask: [{ mask: '(00) 0000-0000' }, { mask: '(00) 00000-0000' }]
    });
  }
}

// Valida um campo individual
export function validarCampo(input) {
  const rule = rules[input.id];
  if (!rule) return true;

  const isValid = rule.regex.test(input.value.trim());
  const parent = input.parentElement;
  let errorMessage = parent.querySelector('.error-message');

  if (!isValid) {
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
    if (!errorMessage) {
      errorMessage = document.createElement('small');
      errorMessage.className = 'error-message';
      parent.appendChild(errorMessage);
    }
    errorMessage.textContent = rule.message;
    return false;
  } else {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    if (errorMessage) errorMessage.remove();
    return true;
  }
}

// Inicializa os ouvintes de evento do formulário
export function initFormValidation() {
  const form = document.getElementById('form-cadastro');
  if (!form) return;

  aplicarMascaras();

  const inputs = form.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('blur', () => validarCampo(input));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede reload do navegador

    let formValido = true;
    inputs.forEach(input => {
      if (!validarCampo(input)) formValido = false;
    });

    if (formValido) {
      salvarVoluntario(form);

      // Feedback com a biblioteca SweetAlert2
      if (window.Swal) {
        window.Swal.fire({
          title: 'Cadastro Concluído!',
          text: 'Obrigado por se voluntariar na ONG Esperança Viva!',
          icon: 'success',
          confirmButtonColor: '#1b4d3e'
        });
      } else {
        alert('Cadastro realizado com sucesso!');
      }

      form.reset();
      inputs.forEach(i => i.classList.remove('is-valid'));
      
      // Atualiza a visualização sem recarregar
      window.location.hash = '#cadastro';
    }
  });
}