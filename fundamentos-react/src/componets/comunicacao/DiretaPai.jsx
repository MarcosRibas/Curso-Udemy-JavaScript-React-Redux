import React from 'react'
import DiretaFilho from './DiretaFilho'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>
            <DiretaFilho nome="Lucio" idade={20} nerd= {true}/>
            <DiretaFilho nome="Luana" idade={29} nerd= {false}/>
            <DiretaFilho nome="Cezar" idade={16} nerd= {true}/>

        </div>
    )
}