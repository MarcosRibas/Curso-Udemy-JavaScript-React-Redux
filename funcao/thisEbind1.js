// o bind é o metodo responsavél por amarrar um determinado objeto para ele ser o dono da execução daquele método sempre que ele for chamado. Em outras palavras, significa que quando você chamar essa função, sempre que você referenciar o this, o this será o objeto que você passou para a função bind.

const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // conflito de paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) 
falarDePessoa()

