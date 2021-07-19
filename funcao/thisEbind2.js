function Pessoa() {
    this.idade = 0

    
    setInterval(function() { // setInterval dispara uma outra função a partir de um determinado interválo de tempo
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) // representado em milisegundos, ou seja está representando 1 segundo
}

new Pessoa 
