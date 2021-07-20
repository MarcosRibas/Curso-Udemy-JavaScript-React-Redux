const soma = function (x, y){
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(6, 4)
imprimirResultado(6, 4, soma)
imprimirResultado(6, 4, function(x, y){
    return x- y
})
imprimirResultado(6, 4, (x, y) => x * y) // arrow function

const pessoa = {
    falar: function(x){
        console.log(x)
    }
}

pessoa.falar('Opa')