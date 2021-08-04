/* eslint-disable no-unreachable */
import "./Card.css"
import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const estilo = {
        backgroundColor: props.color || '#F00'
    }
    return (
        <div className="Card" style={estilo}>
            <div className="Titulo"><strong>{props.titulo}</strong></div>
            <div className="Conteudo">
                {props.children}
            </div>
        </div>)
}