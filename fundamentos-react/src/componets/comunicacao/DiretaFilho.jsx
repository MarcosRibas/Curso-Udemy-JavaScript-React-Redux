import React from 'react' 

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>
            <span>Nome: {props.nome}, </span> 
            <span>Idade: {props.idade}, </span>
            <span>É Nerd?: {props.nerd ? 'Sim': 'Não'}!</span>
            
        </div>
    )
}