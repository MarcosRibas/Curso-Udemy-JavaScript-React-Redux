// Arrow function

const soma = (a, b) => a + b
console.log(soma(5,7))

// Operador rest - agrupa parâmetros em um Arrey dentro da função
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
        return total    
}
console.log(total(2, 3, 4, 5))