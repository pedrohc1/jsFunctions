// IIFE -> funcoes imediatas 
//sao funcoes que sao executadas imediatamente após sua criação e usam apenas 
// seu escopo ignorando a variaveis globais sendo essa a sua vantagem
(function () {
    const sobrenome = "henrique"
    function criaNome(nome){
        return nome + ' ' + sobrenome
    }
 

function falaNome() {
    console.log(criaNome("Luiz"))
}
falaNome();
})();