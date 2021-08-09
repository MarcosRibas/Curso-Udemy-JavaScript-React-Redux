import React from 'react'


// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const nomes = ['João', 'Jair', 'Pedro', 'Daniel', 'Renato', 'Silvio', 'Elton', 'Everton', 'Luiz', 'Moacir']
    const min = 50
    const max = 70
    const gerarIdade = () => parseInt((Math.random() * (max - min)) + max)
    const gerarNerd = () => Math.random() > 0.5
    const gerarNome = () => nomes[parseInt(Math.random() * 10)]
    return (
    
        <div>
            <button onClick={
                function (e){
                    props.quandoClicar(gerarNome(), gerarIdade(), gerarNerd())
                }
            }>
            Fornecer informações
            </button>


        </div>
    )
}