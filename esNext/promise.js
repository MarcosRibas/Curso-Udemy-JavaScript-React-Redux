function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => { //resolve quando a promessa é atendida, e reject quando não
        setTimeout(() => {
            resolve(frase, 'abc')
        }, segundos * 1000)
    })

}
console.log('oi')
falarDepoisDe(3, 'Que legal!')
    .then((frease) => frease.concat('?!?!'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) // catch é a forma de tratar um erro em promises