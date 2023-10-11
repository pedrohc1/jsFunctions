const nome = "Luiz";

function falaNome() {
  console.log(nome);
}
//ele vai procurando a variavel nome em outros escopos
falaNome();

function usaFalaNome() {
  const nome = "Otavio";
  falaNome();
}
//ela ignora o otavio pois ele relembra do escopo quando a funcao foi criada e pega "luiz"
usaFalaNome();
