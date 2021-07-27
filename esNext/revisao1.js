// let const
{
    var a = 0 // var é possivel ser acessada fora do bloco
    let b = 0 // let não pode ser acessada fora do bloco
    console.log(b)
}
console.log(a)

// template String
const produto = 'Ipad'
console.log(`${produto} é caro
É possivel pular linhas sem problema` )

// Destructuring
const {nome, idade} = {nome: 'Ana', idade:9} // retirou elementos do objeto, criando duas constantes
console.log(nome, idade)