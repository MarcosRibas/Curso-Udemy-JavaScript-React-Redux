import React from 'react'

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
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) =>{
    return(
        <div>
            Aqui vão aparecer os números    
            <button onClick={gerarNumeros(5)}>enviar</button> 
        </div>        
    )
}