import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const min = props.min
    const max = props.max    
    const aleatorio = parseInt(Math.random() * (max - min)) + min
    
    return(
        <div>        
            <h2>Valor aleatório</h2>
            <p><strong>Valor Minimo: </strong> {min}</p>
            <p><strong>Valor maximo: </strong> {max}</p> 
            <p><strong>Valor escolhido: </strong>{aleatorio}</p>
        </div>
    )

}