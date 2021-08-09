import React, { useState } from 'react'
import './input.css'
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const [valor, setValor] = useState('Inicial')
    function quandoMudar(evento) {
        setValor(evento.target.value)
    }
    return(
        <div className = "Input">
            <p>{valor}</p>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>              
            
            <input value = {valor} onChange = {quandoMudar}/>
            <input value = {valor} readOnly />
            <input value = {undefined} />
            </div>
        </div>
    )
}