const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) 

const nomes = ['Enzo', 'Ronaldo', 'Marcos', 'Ana']

nomes.forEach(function(nome){
    console.log(nome)
})

nomes.forEach((nome)=>{
    console.log(nome)
})