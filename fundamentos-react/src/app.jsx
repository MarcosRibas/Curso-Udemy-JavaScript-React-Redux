import React from 'react'
import Primeiro from './componets/basicos/primeiro.jsx'
import ComParametro from './componets/basicos/comParametro.jsx'
import Fragmento from './componets/basicos/fragmento.jsx'



// eslint-disable-next-line import/no-anonymous-default-export
export default (props) =>
    <div id="App">
        <h1>Fundamentos</h1>
        <Fragmento />
        <ComParametro
            situacao="Situação do aluno"
            aluno="Enzo"
            nota={9.4}
        />
        <ComParametro
            situacao="Situação do aluno"
            aluno="Maria"
            nota={6.1}
        />
        <Primeiro></Primeiro>
    </div>


