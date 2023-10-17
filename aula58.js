//funcao construtora
//funcao -> Pessoa (new)

function Pessoa(nome,sobrenome){
    //metodos privados(só podem ser acessados dentro da function)
    const ID = 123456
    const metodoInterno = () => {
        
    }
    //publicos
    this.nome = nome
    this.sobrenome = sobrenome
    this.metodo = () => {
        console.log(this.nome + ": sou um metodo")
        // metodo é uma funcao associada a objetos em JS
    }
}

const p1 = new Pessoa("Pedro","Henrique")
const p2 = new Pessoa("Lucas","Silva")
p1.metodo()