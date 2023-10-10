// Declaracao de funcao (function hoistin)

falaOi();

function falaOi() {
  console.log("Oie");
}

//first-class objects(Objetos de primeira classe)
// Function expression
const souUmDado = function () {
  console.log("Sou um dado.");
};
//uma funcao para executar outras funcoes
function executaFuncao(funcao) {
  funcao();
}
executaFuncao(souUmDado);

// Arrow function

const funcaoArrow = () => {
  console.log("Sou uma arrow function");
};
funcaoArrow();

//Dentro de um objeto

const obj = {
  falar() {
    console.log("estou falando...");
  },
};

obj.falar();
