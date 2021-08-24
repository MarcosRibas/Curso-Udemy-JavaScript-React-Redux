/*function gerarNumeros(quantidade){
    let numeros = []
    while(numeros.length < (quantidade)){
        let aleatorio = parseInt(Math.random() * 59) + 1
        if(!numeros.includes(aleatorio)){
            numeros.push(aleatorio)
        }        
    }
    return numeros.sort((a, b) => a - b)
}
console.log(gerarNumeros(5))
*/
function gerarNumeros(qtde) {
    const numeros = Array(qtde)
    .fill(0)
    .reduce((nums) => {
        const novoNumero = gerarNumeroNaoContido(1, 60, nums)
        return [ ...nums, novoNumero]
    }, [])
    .sort((n1, n2) => n1 - n2)
    return numeros
}

function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
    return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio
}

console.log(gerarNumeros(7))
