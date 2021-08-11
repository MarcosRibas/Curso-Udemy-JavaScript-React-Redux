import React from "react"
import "./contador.css"

export default class Contador extends React.Component{
    state = {
            numero: this.props.numeroInicial || 0,
            passo: this.props.passoInicial || 5,
    }
    incluir = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }
    diminuir = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }
    setPasso = (evento) =>{
        this.setState({
            passo: +evento.target.value,
        })
 
    }


    render() {
        
        return (
            <div className="contador">
                <p>Valor inicial: {this.state.numero}</p>
                <label htmlFor="passoInput">
                    <input id="passoInput" type="number" 
                    value={this.state.passo} onChange={this.setPasso}/>
                </label>
                <button onClick={this.incluir}>+</button>
                <button onClick={this.diminuir}>-</button>
            </div>
        )
    }

}