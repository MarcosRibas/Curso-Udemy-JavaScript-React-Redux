import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    let [nome, setNome] = useState('?')
    let [idade, setIdade] = useState(0)
    let [nerd, setNerd] = useState(false) 
    function fornecerInfo(nome, idade, nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
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