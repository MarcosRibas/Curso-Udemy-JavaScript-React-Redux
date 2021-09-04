import React from 'react'
import './Button.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <div className={`
        button
        ${props.operation ? 'operation' : ''} 
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
    `}>{props.label}</div>

