// Função Arrow:  tem dois objetivos, ser mais curta (sintaxe reduzida) e ter um this associado ao contexto no qual a função foi incrita

let dobro = function (a) { //função normal
    return 2 * a
}

dobro = (a) => { //arrow
    return 2 * a 
}

dobro = a => 2 * a // Return está implicido, e não precisa de parenteses se for um unico parâmetro
console.log(dobro(5))

let ola = function () {
    return 'olá'
}

ola = () => 'Olá' // também funcionaria: ola = _ => 'olá'

console.log(ola())