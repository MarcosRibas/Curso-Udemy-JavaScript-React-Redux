const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]
// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const objeto = carrinho.map(paraObjeto)
const apenasPreco = (e) => e.preco
const paraDinheiro = (e) => `R$${parseFloat(e).toFixed(2).replace('.',',')}`

let precos = carrinho.map(paraObjeto).map(apenasPreco).map(paraDinheiro)
precos.forEach((e) => {
    console.log(e)
})