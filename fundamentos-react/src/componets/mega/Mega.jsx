import React, {useState} from 'react'



// eslint-disable-next-line import/no-anonymous-default-export
export default (props) =>{
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

    const numerosIniciais = Array(props.quantidade || 6).fill(0)
    const [num, setNum] = useState(numerosIniciais)

    return(
        <div>
            <p>{num.join(' ')}</p>    
            <button onClick={gerarNumeros(5)}>enviar</button> 
        </div>        
    )
}