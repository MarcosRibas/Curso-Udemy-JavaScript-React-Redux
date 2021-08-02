import React from 'react'

export default function Aleatorio(props){
    const max = props.max
    const min = props.min
    const aleatorio = parseInt(Math.random() * (max - min)) + min
    
    return(
        <div>        
            <h2>Valor aleatório</h2>
            <p><strong>Valor Minimo</strong> {min}</p>
            <p><strong>Valor maximo</strong> {max}</p> 
            <p><strong>Valor escolhido</strong>{aleatorio}</p>
        </div>
    )

}