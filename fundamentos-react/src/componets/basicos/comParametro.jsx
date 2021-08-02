import React from "react"

export default function ComParametro(props){ // props de propriedade
    const situacao = props.nota >= 7 ? 'Aprovado':'Reprovado'
    return (<div>
        <h3>{ props.situacao }</h3>
       <p><strong>{props.aluno}</strong> tem a nota <strong>{props.nota}</strong> e está <strong>{situacao}</strong></p>

    </div>)
}