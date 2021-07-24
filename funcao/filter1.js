// Serve para filtrar um array, cria um sub array com uma quantidade de elementos filtrada baseado em algum critério de filtro, diferente do map, ele não necessáriamente retorna todos os elementos para o array final

const produtos = [
    {nome: "notebook", preco: 2499, fragil: true},
    {nome: "Ipad Pro", preco: 4199, fragil: true},
    {nome: "Copo de Vidro", preco: 12.49, fragil: true},
    {nome: "Copo de Vlástico", preco: 18.99, fragil: false}
]
// com arrow
let frageis = produtos.filter(e => e.fragil) // retornando apenas os produtos frageis
let caros = produtos.filter(e => e.preco>1000) // retornando apenas os produtos com valores maiores que mil
console.log(frageis)
console.log(caros)

// com funções anonimas
let baratas = produtos.filter(function(e){
    return e.preco < 1000
})
console.log(baratas)
let resistente = produtos.filter(function(e){
    return !e.fragil
})
console.log(resistente)

let caros_frageis = produtos.filter(function(e){
    return e.fragil && e.preco>1000
})

console.log(caros_frageis)