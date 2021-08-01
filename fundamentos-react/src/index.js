import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import Primeiro from './componets/basicos/primeiro'
import { div } from 'prelude-ls'


const elemento = document.getElementById('root')
const tag = <p>Colocando um elemento em uma tag</p>

ReactDOM.render(<h1>Olá, mundo!</h1>, elemento) // dois parâmetros, sendo o primeiro o que quer renderizado, e o segundo o local
ReactDOM.render(
    <div>
        <strong>Primeira página em React</strong>
    </div>,
    document.getElementById('texto')
)
ReactDOM.render(
    <div>
        { tag }
    </div>,
    document.getElementById('tag')
)
ReactDOM.render( //Chamando uma função
    <div>
        <Primeiro></Primeiro>        
    </div>,
    document.getElementById('primeiro')

)