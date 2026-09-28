import { obterVoluntariosSalvos } from './storage.js';

// Dados dinâmicos dos projetos
const projetosData = [
  {
    titulo: "Oficina de Robótica Comunitária",
    status: "Inscrições Abertas",
    badgeClass: "badge-info",
    descricao: "Aulas gratuitas de lógica de programação, robótica e tecnologia para jovens da rede pública.",
    linkText: "Quero Apoiar"
  },
  {
    titulo: "Horta e Alimentação Saudável",
    status: "Vagas Limitadas",
    badgeClass: "badge-warning",
    descricao: "Cultivo orgânico comunitário que garante alimentos frescos para famílias em vulnerabilidade.",
    linkText: "Quero Apoiar"
  }
];

// Componente: Tela Inicial
export function renderInicioTemplate() {
  return `
    <h1>ONG Esperança Viva</h1>
    <div class="alert alert-warning">
      <strong>Campanha de Inverno:</strong> Estamos arrecadando agasalhos e alimentos até o final deste mês!
    </div>
    <section id="sobre">
      <h2>Sobre a Nossa Organização <span class="badge badge-success">Institucional</span></h2>
      <br>
      <p>A ONG Esperança Viva atua desde 2018 promovendo a inclusão social, a educação tecnológica e o desenvolvimento comunitário em regiões de vulnerabilidade.</p>
    </section>
    <section id="destaque">
      <h2>Nossa Atuação</h2>
      <br>
      <img src="imagens/voluntarios-acao.jpg" alt="Voluntários da ONG" style="width: 100%; border-radius: 6px;" onerror="this.src='https://via.placeholder.com/350x200?text=Voluntarios+em+Acao'">
    </section>
    <section id="contato" class="full-width">
      <h2>Entre em Contato</h2>
      <br>
      <ul>
        <li><strong>Endereço:</strong> Av. Central, 1000 - Bragança Paulista, SP</li>
        <li><strong>E-mail:</strong> contato@esperancaviva.org.br</li>
        <li><strong>Telefone:</strong> (11) 98765-4321</li>
      </ul>
    </section>
  `;
}

// Componente: Tela de Projetos
export function renderProjetosTemplate() {
  const cardsHTML = projetosData.map(projeto => `
    <article style="grid-column: span 6;">
      <h3>${projeto.titulo} <span class="badge ${projeto.badgeClass}">${projeto.status}</span></h3>
      <br>
      <p>${projeto.descricao}</p>
      <br>
      <a href="#cadastro" class="btn">${projeto.linkText}</a>
    </article>
  `).join('');

  return `
    <h1>Nossos Projetos Sociais</h1>
    <section id="projetos" class="full-width" style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 1rem; background: none; box-shadow: none; padding: 0;">
      ${cardsHTML}
    </section>
  `;
}

// Componente: Tela de Cadastro + Lista de Cadastrados via localStorage
export function renderCadastroTemplate() {
  const voluntariosSalvos = obterVoluntariosSalvos();
  const listaVoluntariosHTML = voluntariosSalvos.length === 0
    ? '<p>Nenhum voluntário cadastrado até o momento.</p>'
    : voluntariosSalvos.map(v => `
        <div style="padding: 0.5rem 0; border-bottom: 1px solid #eee;">
          <strong>${v.nome}</strong> (${v.email}) - Tel: ${v.telefone}
        </div>
      `).join('');

  return `
    <h1>Formulário de Cadastro para Voluntariado</h1>
    <div class="alert alert-success">
      <strong>Tudo certo!</strong> Preencha os campos abaixo para concluir a sua inscrição.
    </div>

    <form id="form-cadastro" style="grid-column: span 12; display: grid; grid-template-columns: repeat(12, 1fr); gap: 1rem;">
      <fieldset>
        <legend style="padding: 0 0.5rem; font-weight: bold;">Dados Pessoais</legend>
        <br>
        <p>
          <label for="nome">Nome Completo:</label>
          <input type="text" id="nome" name="nome" required>
        </p>
        <br>
        <p>
          <label for="cpf">CPF:</label>
          <input type="text" id="cpf" name="cpf" required placeholder="000.000.000-00">
        </p>
      </fieldset>

      <fieldset>
        <legend style="padding: 0 0.5rem; font-weight: bold;">Informações de Contato</legend>
        <br>
        <p>
          <label for="email">E-mail:</label>
          <input type="email" id="email" name="email" required>
        </p>
        <br>
        <p>
          <label for="telefone">Telefone:</label>
          <input type="tel" id="telefone" name="telefone" required placeholder="(00) 00000-0000">
        </p>
      </fieldset>

      <div style="grid-column: span 12; text-align: center; margin-top: 1rem;">
        <button type="submit">Enviar Cadastro</button>
      </div>
    </form>

    <section class="full-width" style="margin-top: 2rem;">
      <h2>Voluntários Cadastrados (Recuperados do LocalStorage)</h2>
      <br>
      <div id="lista-voluntarios">${listaVoluntariosHTML}</div>
    </section>
  `;
}