//return
//retorna um valor
//termina a funcao

function soma(a, b) {
  return a + b;
}

function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
  };
}
const p1 = criaPessoa("luiz", "Otavio");

const p2 = {
  nome: "Joao",
  sobrenome: "Oliveira",
};
//os 2 criam o mesmo objeto
