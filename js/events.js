// Registra os ouvintes críticos do formulário e da aplicação
export function initEventListeners() {
  const form = document.getElementById('form-cadastro');

  if (form) {
    // 1. Interceptação do envio do formulário
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Impede a atualização da página
      
      if (validarFormulario(form)) {
        salvarNoLocalStorage(form);
        exibirToast("Cadastro de voluntário realizado com sucesso!");
        form.reset();
      }
    });

    // 2. Validação em tempo real (Feedback imediato ao usuário)
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
      input.addEventListener('blur', () => validarCampoIndividual(input));
    });
  }
}