function gerarNumeros(quantidade){
    let numeros = []
    while(numeros.length < (quantidade)){
        let aleatorio = parseInt(Math.random() * 59) + 1
        if(!numeros.includes(aleatorio)){
            numeros.push(aleatorio)
        }        
    }
    return numeros.sort(function(a, b){
        return a - b
    })
}
console.log(gerarNumeros(5))


