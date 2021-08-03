import React from 'react'
import './app.css'
import ComParametro from './componets/basicos/comParametro.jsx'
import Aleatorio from './componets/basicos/aleatorio.jsx'
import Cards from './componets/layout/Card.jsx'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => //função formatada de forma enxuta
    <div className="App">
        <h1>Fundamentos</h1>
        <div className="Exercicios">
        <Cards titulo="Desafio aleatório">
        <Aleatorio min={1} max={100}/>
        

        </Cards>
        <Cards titulo="Alunos">
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

        </Cards>
        </div>


    </div>


