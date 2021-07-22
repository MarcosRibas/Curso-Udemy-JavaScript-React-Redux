const contaBanco = require("./contabanco") // import do tipo commonjs

const c1 = new contaBanco(111, 'Marcos Ribas', 150, true)
c1.status()
c1.abrirConta()
c1.depositar(200)
c1.pagarMensalidade()
c1.status()
c1.fecharConta()
c1.sacar(450)
c1.sacar(335)
c1.fecharConta()
