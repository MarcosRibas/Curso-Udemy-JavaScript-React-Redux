import React, {useState} from 'react'
import ('./mega.css')

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    function gerarNumeros(qtde) {
        const numeros = Array(qtde)
        .fill(0)
        .reduce((nums) => {
            const novoNumero = gerarNumeroNaoContido(1, 60, nums)
            return [ ...nums, novoNumero]
        }, [])
        .sort((n1, n2) => n1 - n2)
        return numeros
    }
    
    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
        return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio
    }
    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = gerarNumeros(qtde)
    const [numeros, setNumeros] = useState(numerosIniciais)
    
    return (
        <div className="Mega">
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label>Quantidade de números</label>
                <input type="number" value={qtde}
                    onChange={ e => setQtde(+e.target.value)}/>
            </div>
            <button onClick = { evento => setNumeros(gerarNumeros(qtde))}>
                Gerar Núumeros
            </button>          

        </div>
    )
}

