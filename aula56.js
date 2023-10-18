//objeto dentro de um funcao pode ser chamado de metodo

function criaPessoa(nome,sobrenome,altura,peso){
    return{
        nome,
        sobrenome,
        //getter 
        get nomeCompleto(){
            return `${nome} ${sobrenome}`
        },
        fala:function(assunto){
        return `${this.nome} está ${assunto}.`
        }, 
        altura:altura,
        peso:peso,
        //Getter = pega o valor 
        get imc(){
        const indice = this.peso / (this.altura **2)
        return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa ("Pedro","Henrique",1.75,80);
console.log(p1.nomeCompleto)
// quando tem um getter nao precisa da () para mostrar a funcao
console.log(p1.fala("falando sobre JS"))