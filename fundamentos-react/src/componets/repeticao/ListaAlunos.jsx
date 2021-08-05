import React from 'react'
import alunos from '../../data/alunos'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

    const alunosLI = alunos.map((aluno) =>{
        return (
            <li key={aluno.id}>
                <strong>Id:</strong> {aluno.id} <strong>Nome: </strong> {aluno.nome}: <strong>Nota:</strong>{aluno.nota}
            </li>
        )
    })
    return(
        <div>
            <ul style={{ listStyle: 'None'}}>
                {alunosLI}
            </ul>
        </div>
    )
}