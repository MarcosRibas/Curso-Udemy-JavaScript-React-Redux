// Função em JS é First-Class Object ou (Citizens)
// Também chamado de Higher-order function

// Criar de forma literal
function funcao1(){}

// Armazenar em uma variável
const funcao2 = function () {}

// Armazenar em um array
const array= [function (a, b) {return a + b}, funcao1, funcao2]
console.log(array[0](1,4))

// Armazenar em um atributo de objeto
const objeto = {}
objeto.falar = function () {return 'Olá mundo'}
console.log(objeto.falar())

// Passar função com paramentro
function run(fun) {
    fun()
}

run(function () { console.log('Executando...')})

// Uma função pode retornar/conter uma função
function soma(a, b){
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)