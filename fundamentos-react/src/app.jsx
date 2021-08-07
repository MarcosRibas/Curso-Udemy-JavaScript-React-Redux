import React from 'react'
import './app.css'
import ComParametro from './componets/basicos/comParametro.jsx'
import Aleatorio from './componets/basicos/aleatorio.jsx'
import Cards from './componets/layout/Card.jsx'
import Familia from './componets/basicos/Familia'
import FamiliaMembro from './componets/basicos/FamiliaMembro'
import ListaAlunos from './componets/repeticao/ListaAlunos'
import TabelaProdutos from './componets/repeticao/TabelaProdutos'
import ParOuImpar from './componets/condicional/ParOuImpar'
import UsuarioInfo from './componets/condicional/usuarioInfo'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => //função formatada de forma enxuta
    <div className="App">
        <h1>Fundamentos</h1>
        <div className="Exercicios">
            <Cards titulo = "Renderização condicional" color="#36E817">
            <UsuarioInfo usuario = {{nome: "Robson"}}/>
                <ParOuImpar numero = {21}></ParOuImpar> 
                
            </Cards>
            <Cards  titulo = "Tabela de Produtos" color = "#921FF2">
                <TabelaProdutos/>
            </Cards>
            <Cards titulo = "Lista de Alunos" color="#51BEF8">
                <ListaAlunos></ListaAlunos>
            </Cards>

            <Cards titulo = "Componentes com filhos">
                <Familia sobrenome=" Ferreira">
                    <FamiliaMembro nome="Paulo" />                    
                    <FamiliaMembro nome="João" />
                    <FamiliaMembro nome="Maria" sobrenome = " Clara"/>
                    
                </Familia>
            </Cards>

            <Cards titulo="Desafio aleatório" color="#FA6900">
                <Aleatorio min={1} max={100} />
            </Cards>
            
            <Cards titulo="Alunos" color="#E94C6F">
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


