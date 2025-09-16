document.addEventListener('DOMContentLoaded', () => {
  const projetosGrid = document.getElementById('projetosGrid');
  const projetosWrapper = document.getElementById('projetosWrapper');
  const btnToggle = document.getElementById('btnVerMais');

  const projetos = [
    {
      titulo: "Lista de Tarefas",
      descricao: "Aplicação web desenvolvida com React.js e Vite para gerenciar tarefas diárias. Permite adicionar, editar, marcar como concluídas e remover tarefas de forma prática.",
      imagem: "images/listaTarefasReact.png",
      linkProjeto: "https://lista-tarefas-react-eight.vercel.app/",
      linkCodigo: "https://github.com/lucasSperb/lista-tarefas-react"
    },
    {
      titulo: "Dashboard Financeiro",
      descricao: "Aplicação web em HTML, CSS e JavaScript para controle de finanças pessoais. Permite cadastrar receitas e despesas, gerar gráficos interativos e visualizar o saldo de forma intuitiva.",
      imagem: "images/dashboardFinanceiro.png",
      linkProjeto: "https://dashboard-financeiro-liard.vercel.app/",
      linkCodigo: "https://github.com/lucasSperb/dashboard-financeiro"
    },
    {
      titulo: "Jogo Número Secreto",
      descricao: "Jogo interativo em JavaScript onde o usuário tenta adivinhar um número secreto entre 1 e 100 usando comandos de voz. O sistema fornece dicas se o número é maior ou menor até o acerto.",
      imagem: "images/numeroSecreto.png",
      linkProjeto: "https://jogo-numero-secreto-one-blond.vercel.app/",
      linkCodigo: "https://github.com/lucasSperb/jogo-numero-secreto"
    }
  ];

  const visibleCount = 2;
  let expanded = false;

  projetosWrapper.style.transition = 'max-height 0.5s ease';

  function renderProjects(count) {
    projetosGrid.innerHTML = '';
    const limit = Math.min(count, projetos.length);
    for (let i = 0; i < limit; i++) {
      projetosGrid.appendChild(createCard(projetos[i]));
    }

    setTimeout(() => {
      const totalHeight = projetosGrid.scrollHeight;
      projetosWrapper.style.maxHeight = totalHeight + 'px';
    }, 50);
  }

  function createCard(proj) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${proj.imagem}" alt="${proj.titulo}" />
      <h3>${proj.titulo}</h3>
      <p class="descricao">${proj.descricao}</p>
      <a href="${proj.linkProjeto}" target="_blank">Ver projeto</a> |
      <a href="${proj.linkCodigo}" target="_blank">Código no GitHub</a>
    `;
    return card;
  }

  btnToggle.addEventListener('click', () => {
    if (!expanded) {
      renderProjects(projetos.length);
      btnToggle.textContent = 'Mostrar Menos';
    } else {
      renderProjects(visibleCount);
      btnToggle.textContent = 'Ver Mais';
    }
    expanded = !expanded;
  });

  renderProjects(visibleCount);

  if (projetos.length <= visibleCount) {
    btnToggle.style.display = 'none';
  }
});
