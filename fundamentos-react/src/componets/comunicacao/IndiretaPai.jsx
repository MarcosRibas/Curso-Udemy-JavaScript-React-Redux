import React from 'react'
import IndiretaFilho from './IndiretaFilho'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    let nome = '?'
    let idade = 0
    let nerd = false 
    function fornecerInfo(nomeParam, idadeParam, nerdParam){
        nome = nomeParam
        idade = idadeParam
        nerd = nerdParam
    }
    return (
        <div>
            <span>Nome: {nome}, </span>
            <span>Idade: {idade}, </span>
            <span>é nerd? {nerd ? 'Verdadeiro': 'Falso'}</span>
            <IndiretaFilho quandoClicar={fornecerInfo}></IndiretaFilho>

        </div>
    )
}