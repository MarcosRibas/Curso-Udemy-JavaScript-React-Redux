module.exports = function contaBanco(numConta, dono, saldo, status = false){
    this.abrirConta = function(){
        if(status==true){
            console.log('A conta já está aberta')
        }else{
            status = true
            console.log('Conta aberta com sucesso')
        }
    }
    this.fecharConta = function(){
        if(status == false){
            console.log('A conta já está fechada')
        }else if(saldo > 0){
            console.log(`Você tem o saldo positivo de R$${saldo.toFixed(2)} e precisa saca-lo antes de fechar a conta`)


        }else if(saldo < 0){
            console.log(`Você tem o saldo negativo de R$${saldo.toFixed(2)} e precisa quitá-lo antes de fechar a conta`)
        }
        else{
            console.log('Conta fechada com sucesso.')
            status = false
        }
    }
    this.depositar = function(valor){
        if(status == false){
            console.log('Não é  possivél depositar em uma conta inativa')
        }else{
            saldo += valor
            console.log(`Valor depositado com sucesso, seu novo saldo é de R$${saldo.toFixed(2)}`)
        }
    }
    this.sacar = function(valor){
        if(status == false){
            console.log('Não é  possivél sacar de uma conta inativa')
        }else if(valor > saldo){
            console.log('Saldo insuficiente')
        }
        else{
            saldo -= valor
            console.log(`Valor sacado com sucesso, seu novo saldo é de R$${saldo.toFixed(2)}`)
        }
    }
    this.pagarMensalidade = function(){
        console.log('Mensalidade paga. Valor de R$15,00 descontado com sucesso')
        saldo -= 15
    }
    this.status = function(){
        console.log(`Numero da conta: ${numConta}, dono: ${dono}, saldo R$${saldo.toFixed(2)}`)
    }


}

