import React from "react"
import "./contador.css"
import Display from "./Display"
import Botoes from "./Botoes"
import Passos from "./Passos"

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
    setPasso = (novoPasso) =>{
        this.setState({
            passo: novoPasso,
        })
 
    }


    render() {
        
        return (
            <div className="contador">
                <Display numero={this.state.numero}></Display>
                <Passos passo={this.state.passo} setPasso = {this.setPasso}></Passos>               
                <Botoes setInc={this.incluir} setDim={this.diminuir}></Botoes>

            </div>
        )
    }

}