import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import Primeiro from './componets/basicos/primeiro.jsx'
import ComParametro from './componets/basicos/comParametro.jsx'
import Fragmento from './componets/basicos/fragmento.jsx'
import App from './app'



const elemento = document.getElementById('root')
const tag = <p>Colocando um elemento em uma tag</p>

ReactDOM.render(<h1>Olá, mundo!</h1>, elemento) // dois parâmetros, sendo o primeiro o que quer renderizado, e o segundo o local

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)

