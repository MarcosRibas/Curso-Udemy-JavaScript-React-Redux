import React from "react"

export default class Contador extends React.Component{
    state = {
            numero: this.props.numeroInicial,
        
    }
    incluir() {
        this.setState()
    }
    render() {
        
        return (
            <div>
                <p>Valor inicial: {this.state.numero}</p>
            </div>
        )
    }

}