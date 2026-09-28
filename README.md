# 🌍 ONG Esperança Viva — Plataforma Digital Front-End

[![Deploy with Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://ong-esperan-a-viva.vercel.app)
[![WCAG 2.1 AA](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA-blue?style=for-the-badge)](https://www.w3.org/TR/WCAG21/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

Aplicação web interativa para a **ONG Esperança Viva**, desenvolvida como projeto final da disciplina de Experiência Prática IV. A plataforma foi construída com foco em **arquitetura SPA (Single Page Application)**, **acessibilidade web (WCAG 2.1 AA)**, **desempenho otimizado** e **boas práticas de versionamento em equipe**.

---

## 📌 Sumário

1. [Apresentação do Projeto e Funcionalidades](#-apresentação-do-projeto-e-funcionalidades)
2. [Tecnologias Utilizadas e Dependências](#-tecnologias-utilizadas-e-dependências)
3. [Acessibilidade Web (WCAG 2.1 AA)](#-acessibilidade-web-wcag-21-aa)
4. [Estrutura do Projeto](#-estrutura-do-projeto)
5. [Versionamento e Padrões de Código](#-versionamento-e-padrões-de-código)
6. [Guia de Instalação e Execução Local](#-guia-de-instalação-e-execução-local)
7. [Build e Deploy](#-build-e-deploy)
8. [Licença](#-licença)

---

## 🚀 Apresentação do Projeto e Funcionalidades

A plataforma tem como objetivo conectar a ONG Esperança Viva a novos voluntários e doadores, oferecendo uma experiência de navegação fluida, acessível e intuitiva.

### **Principais Funcionalidades:**
* **Roteamento Dinâmico SPA:** Navegação instantânea por hash (`#inicio`, `#projetos`, `#cadastro`) sem recarregar a página.
* **Catálogo de Projetos Sociais:** Exibição detalhada de causas e iniciativas com cartões interativos.
* **Formulário de Cadastro de Voluntários:** Validação avançada de dados em tempo real com expressões regulares (Regex) e máscaras de entrada.
* **Persistência Local:** Salvamento e recuperação de inscrições no `LocalStorage` do navegador.
* **Notificações Dinâmicas:** Alertas acessíveis via regiões WAI-ARIA Live (`aria-live="polite"`).

---

## 🛠️ Tecnologias Utilizadas e Dependências

### **Front-End Base:**
* **HTML5 Semântico:** Uso rigoroso de landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`, `<fieldset>`, `<legend>`).
* **CSS3:** Design responsivo via CSS Grid/Flexbox, variáveis CSS para temas e media queries para alto contraste/dark mode.
* **JavaScript ES6+:** Arquitetura modularizada nativa (`import`/`export`) e manipulação dinâmica do DOM.

### **Ferramentas de Build e Produção:**
* **Vite:** Bundler de alta performance para otimização, empacotamento e minificação de assets.
* **Terser:** Minificação e *mangling* de JavaScript para produção.
* **Vercel:** Hospedagem global em rede Edge com suporte nativo a CI/CD e redirecionamentos SPA.

### **Bibliotecas Externas:**
* **IMask.js:** Formatação e aplicação de máscaras em campos de formulário (CPF, telefone, CEP).
* **SweetAlert2:** Emissão de modais e alertas visuais responsivos e acessíveis.

---

## ♿ Acessibilidade Web (WCAG 2.1 AA)

A aplicação foi rigorosamente auditada para garantir o cumprimento das **Web Content Accessibility Guidelines (WCAG 2.1 Nível AA)**:

* **Navegação por Teclado:** Foco visível preservado e destacado (`:focus-visible`), sem armadilhas de teclado (*keyboard traps*).
* **Leitores de Ecrã:** Implementação de atributos WAI-ARIA (`aria-expanded`, `aria-label`, `aria-invalid`, `aria-describedby`, `aria-live`).
* **Contraste Visual:** Rácio de contraste superior a 4.5:1 para texto normal e 3:1 para componentes de interface gráficos (validado via WebAIM / Lighthouse).
* **Suporte Acessível a Erros:** Erros de preenchimento de formulário são anunciados verbalmente para tecnologias de apoio imediatamente após a validação.

---

## 📁 Estrutura do Projeto

```text
ONG-ESPERAN-A-VIVA/
├── CSS/
│   └── style.css           # Estilos globais, variáveis CSS e temas
├── imagens/                # Imagens e ícones otimizados (WebP, SVG)
├── js/
│   ├── app.js              # Ponto de entrada (Entrypoint) e Roteador SPA
│   ├── components.js       # Templates HTML dinâmicos
│   ├── events.js           # Gerenciamento de eventos do DOM
│   ├── storage.js          # Camada de manipulação do LocalStorage
│   └── validation.js       # Lógica de validação com Regex e IMask
├── index.html              # Ficheiro principal da SPA
├── cadastro.html           # Fallback/Template de formulário
├── projetos.html           # Fallback/Template de catálogo
├── package.json            # Dependências e scripts do projeto
├── vite.config.js          # Configuração do Vite e Terser
├── vercel.json             # Regras de rewrite para rotas SPA na Vercel
└── .gitignore              # Ficheiros ignorados pelo Git
