import React from 'react'
import FamiliaMembro from './FamiliaMembro'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    
    return (
        <div>
            <FamiliaMembro nome="Paulo" sobrenome = {props.sobrenome}/>
            <FamiliaMembro nome="João" {...props}/> {/*Outra forma de usar o props padrão*/}
            <FamiliaMembro nome="Maria" sobrenome = " Clara"/>
        </div>
    )
}