import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const isPar = props.numero % 2 === 0
    return(
        <div>
            { isPar ?
                <span> Você digitou um número <strong>par</strong></span> :
                <span>Você digitou um número <strong>impar</strong></span>
            }
        </div>
    )
}