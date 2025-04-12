const treinos = {
  "Domingo": ["Descanso"],
  "Segunda": [
    "Supino inclinado com halteres",
    "Supino máquina",
    "Crucifixo na máquina",
    "Tríceps testa na polia",
    "Tríceps na polia"
  ],
  "Terça": [
    "Levantamento terra",
    "Flexora",
    "Extensora",
    "Panturrilha em pé"
  ],
  "Quarta": [
    "Puxada alta na polia",
    "Remada baixa na polia com barra V",
    "Crucifixo invertido",
    "Rosca alternada",
    "Rosca martelo alternada"
  ],
  "Quinta": ["Descanso/Reposição"],
  "Sexta": [
    "Desenvolvimento militar com halteres",
    "Elevação lateral",
    "Elevação frontal pegada pronada",
    "Antebraço na polia"
  ],
  "Sábado": [
    "Flexora unilateral",
    "Panturrilha sentado",
    "Abdutor",
    "Hiperextensão lombar"
  ]
};

const diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

function formatarHora(data) {
  return data.toLocaleTimeString("pt-BR");
}

function atualizarRelogio(elemento) {
  setInterval(() => {
    const agora = new Date();
    elemento.textContent = formatarHora(agora);
  }, 1000);
}

function populateTreinos() {
  const diaAtual = new Date().getDay();

  Object.keys(treinos).forEach((dia, index) => {
    const body = document.querySelector(`#collapse${index} .accordion-body`);
    const listaTreinos = treinos[dia].map(treino => `<li class="li-treino">${treino}</li>`).join('');
    const relogioHTML = `<span id="relogio-${index}" class="relogio"></span>`;
    const header = document.querySelector(`#heading${index} .accordion-button`);

    header.innerHTML = `${dia} ${relogioHTML}`;

    if (index === diaAtual) {
      header.classList.add("dia-atual");
      const divRelogio = document.getElementById(`relogio-${index}`);
      atualizarRelogio(divRelogio);
    }

    body.innerHTML = `<ul>${listaTreinos}</ul>`;
  });
}

populateTreinos();
