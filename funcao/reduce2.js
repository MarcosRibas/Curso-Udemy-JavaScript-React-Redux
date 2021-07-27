const alunos = [
    {nome: 'Maria', nota: 7.3, bolsista: false},
    {nome: 'Enzo', nota: 5.4, bolsista: true},
    {nome: 'Ana', nota: 9.5, bolsista: false},
    {nome: 'Roger', nota: 7.0, bolsista: true}
]

// desafio 1: percorrer a lista e perceber se todos aos alunos são bolsistas ou não

// desafio 2: algum aluno é bolsita?
const todosBolsistas = (resultado, bolsistas) => resultado && bolsistas
const algumBolsista = (resultado, bolsistas) => resultado || bolsistas
console.log('Todos são bolsistas?'+ alunos.map(a => a.bolsista).reduce(todosBolsistas))
console.log('Algum é bolsistas?'+ alunos.map(a => a.bolsista).reduce(algumBolsista))





