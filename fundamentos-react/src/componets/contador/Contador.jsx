import React from "react"
import "./contador.css"
import Display from "./Display"
import Botoes from "./Botoes"

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
                <Display numero={this.state.numero}></Display>
                

                <Botoes inc={this.incluir} dim={this.diminuir}></Botoes>

            </div>
        )
    }

}