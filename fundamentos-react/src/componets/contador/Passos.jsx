import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return (
        <div>
            <label htmlFor="passoInput">
            <input 
                id="passoInput" 
                type="number" 
                value={props.passo} 
                onChange={evento => props.setPasso(+evento.target.value)}/>                    
            </label>
        </div>

    )
}