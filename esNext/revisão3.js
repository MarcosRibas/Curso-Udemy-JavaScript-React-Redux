/* ES8: 
Object.values - pega os valores de um objeto
Onject.entries - retorna uma matriz
*/

const obj = {a: 1, b: 2, c: 3, d:4}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na Notação Literal
let nome = 'Carla'
const pessoa = {
    nome, // chave e valor já especificado na variavel
    ola(){
        return 'Ola'
    }

}
console.log(pessoa.nome, pessoa.ola())

// Class
class Animal{}
class Cachorro extends Animal{ // herança
    falar(){
        return 'Au Au'
    }
}
const cao = new Cachorro()
cao.falar()
console.log(new Cachorro().falar())