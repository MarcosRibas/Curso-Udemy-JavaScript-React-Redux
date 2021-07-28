function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => { //resolve quando a promessa é atendida, e reject quando não
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })

}

falarDepoisDe(3, 'Que legal!')
    .then(frease => frease.concat('?!?!'))
    .then(outraFrase => console.log(outraFrase))