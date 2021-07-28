// quando vai espalhar se chama Spread, e quando vai juntar se chama rest

// usando Spread com objetos
const funcionario = {nome: 'Maria', salario: 12348.90}

let num = [4, 5, 6]
let adicionar = [1, 2, 3,...num]

console.log(adicionar)