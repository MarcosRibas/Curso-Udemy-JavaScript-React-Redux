// é uma função que serve para transformar um elemento utilizando um parametro acomulador, que acumula a chamada chamada.//
 

const alunos = [
    {nome: 'Maria', nota: 7.3, bolsista: false},
    {nome: 'Enzo', nota: 5.4, bolsista: true},
    {nome: 'Ana', nota: 9.5, bolsista: false},
    {nome: 'Roger', nota: 7.0, bolsista: true}
]

const resultado = alunos.map((n) => n.nota).reduce(function(acumulador, atual){ // somando todas as notas
    console.log(acumulador, atual)
    return acumulador + atual
})
console.log(resultado)
