const STORAGE_KEY = 'voluntarios_ong';

// Recupera os dados do localStorage convertendo de JSON para Array
export function obterVoluntariosSalvos() {
  const dadosString = localStorage.getItem(STORAGE_KEY);
  if (!dadosString) return [];
  try {
    return JSON.parse(dadosString);
  } catch (error) {
    console.error("Erro ao converter dados do localStorage:", error);
    return [];
  }
}

// Salva um novo voluntário convertendo o Objeto em JSON String
export function salvarVoluntario(dadosFormulario) {
  const listaAtual = obterVoluntariosSalvos();

  const novoVoluntario = {
    nome: dadosFormulario.nome.value,
    cpf: dadosFormulario.cpf.value,
    email: dadosFormulario.email.value,
    telefone: dadosFormulario.telefone.value,
    dataCadastro: new Date().toISOString()
  };

  listaAtual.push(novoVoluntario);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(listaAtual));
}