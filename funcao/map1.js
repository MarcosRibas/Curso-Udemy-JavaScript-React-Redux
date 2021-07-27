/* Existe dentro de um map um laço que será executado. Ele serve para tranformar um array. A ideia é mapear um array para outro array do mesmo tamanho, com a mesma quantidade de elementos, só que com os dados transformados.
Pode ser considerado um ''for com propósito''
O map gera um novo array sem alterar os elementos do array inicial
*/

const numeros = [1, 3, 6, 8, 9]

let resultado = numeros.map(function(e){
    return e * 2
})
console.log(resultado)
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = numeros.map(soma10).map(triplo).map(paraDinheiro) // é possivél encadear maps

console.log(resultado)