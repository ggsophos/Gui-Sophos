// const pessoa = {
//     nome: 'Carlos',
//     apelidos: ['Ca', 'Caca', 'Carlao']
// }
// const pessoa2 = {
//     ...pessoa,
//     apelidos: ['Kaka', 'calvo', 'amante']
// }
// const apresentacao = (pessoa) => {
//     console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos}`)
// }
// apresentacao(pessoa)
// apresentacao(pessoa2)

const carrinho = []
const fruta1 = {
    nome: 'Abacate',
    disponilidade: true
}
const fruta2 = {
    nome: 'Melancia',
    disponilidade: false
}
const fruta3 = {
    nome: 'Bergamota',
    disponilidade: true
}
const alocar = (fruta1, fruta2, fruta3) => {
    carrinho.push(fruta1, fruta2, fruta3)
    return carrinho
}

console.log(alocar(fruta1, fruta2, fruta3))