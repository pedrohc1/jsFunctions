// argumentos que sustenta todos os argumentos enviados
function funcao() {
  let total = 0;
  for (argumento of arguments) {
    total += argumento;
  }
  console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7);

function funcao1(a, b = 2) {
  // se b nao for enviado o valor padrao e 2
  console.log(a + b);
}

funcao1(2);

function funcao3({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}
funcao3({ nome: "Luiz", sobrenome: "Otavio", idade: 20 });

const conta = (operador, acumulador, ...numeros) => {
  console.log(operador, acumulador, numeros);
};
conta("+", 1, 20, 30, 40, 50);
