document.addEventListener('DOMContentLoaded', () => {
  const projetosGrid = document.getElementById('projetosGrid');
  const projetosWrapper = document.getElementById('projetosWrapper');
  const btnToggle = document.getElementById('btnVerMais');

  const projetos = [
    {
      titulo: "To Do List",
      descricao: "Lista de tarefas criada em React, com adição e remoção de itens, focada em prática de hooks e componentes.",
      imagem: "images/toDoList.png",
      linkProjeto: "https://to-do-list-alpha-khaki-28.vercel.app/",
      linkCodigo: "https://github.com/lucasSperb/toDoList"
    },
    {
      titulo: "Jogo Número Secreto",
      descricao: "Jogo interativo em JavaScript onde o usuário tenta adivinhar um número secreto entre 1 e 100 usando comandos de voz pelo microfone. O sistema dá dicas se o número é maior ou menor até acertar.",
      imagem: "images/numeroSecreto.png",
      linkProjeto: "https://vercel.com/lucas-projects-6ff942f3/jogo-numero-secreto",
      linkCodigo: "https://github.com/lucasSperb/jogo-numero-secreto"
    },
    {
      titulo: "Projeto 3",
      descricao: "Descrição do projeto 3.",
      imagem: "images/projeto3.png",
      linkProjeto: "#",
      linkCodigo: "#"
    },
    {
      titulo: "Projeto 4",
      descricao: "Descrição do projeto 4.",
      imagem: "images/projeto4.png",
      linkProjeto: "#",
      linkCodigo: "#"
    }
  ];

  const visibleCount = 2;
  let expanded = false;

  function renderProjects(count) {
    projetosGrid.innerHTML = '';
    for (let i = 0; i < count; i++) {
      projetosGrid.appendChild(createCard(projetos[i]));
    }
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
      projetosWrapper.style.maxHeight = projetosWrapper.scrollHeight + 'px';
      projetosWrapper.style.opacity = '1';
      btnToggle.textContent = 'Mostrar Menos';
      expanded = true;
    } else {
      projetosWrapper.style.opacity = '0';
      projetosWrapper.addEventListener('transitionend', function onTransitionEnd(event) {
        if (event.propertyName === 'opacity') {
          projetosWrapper.removeEventListener('transitionend', onTransitionEnd);
          renderProjects(visibleCount);
          projetosWrapper.style.maxHeight = '600px';
          projetosWrapper.style.opacity = '1';
          btnToggle.textContent = 'Ver Mais';
          expanded = false;
        }
      });
    }
  });

  renderProjects(visibleCount);
  projetosWrapper.style.maxHeight = '600px';
  projetosWrapper.style.opacity = '1';
});
