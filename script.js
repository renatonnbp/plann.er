const atividades = [
  {
    nome: "Almoço",
    data: new Date("2024-07-08 10:00"),
    finalizada: true,
  },
  {
    nome: "Academia em grupo",
    data: new Date("2024-07-09 12:00"),
    finalizada: false,
  },
  {
    nome: "Gaming session",
    data: new Date("2024-07-09 16:00"),
    finalizada: false,
  },
];

const criarItemDeAtividade = (atividade) => {
  let input = '<input type="checkbox"';

  if (atividade.finalizada) {
    input += "checked";
  }

  input += ">";

  return `
    <div>
      ${input}
      <span>${atividade.nome}</span>
      <time>${atividade.data}</time>
    </div>
  `;
};

const section = document.querySelector("section");

for (let i of atividades) {
  section.innerHTML += criarItemDeAtividade(i);
}
