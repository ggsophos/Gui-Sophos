/*const preto = prompt("Você gosta de preto?")
const azul = prompt("Você gosta de azul?")
const vermelho = prompt("Você gosta de vermelho?")
console.log("Você gosta de preto?", preto)
console.log("Você gosta de azul?", azul)
console.log("Você gosta de vermelho?", vermelho) 
let a = 10
let b = 25
let c = a
a = b
b = c
console.log("O numero do valor de a é:", a)
console.log("O numero do valor de b é:", b)
let d = Number(prompt("Primeiro valor"))
let e = Number(prompt("Segundo valor"))
let f = d + e
console.log("x = ", f)
console.log("y = ", d * e)

function apresentacao(nome, idade, cidade, profissao) {
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
}
let nome = prompt("Escreva seu nome")
let idade = prompt("Escreva sua idade")
let cidade = prompt("Escreva sua cidade")
let profissao = prompt("Escreva sua profissão")
apresentacao(nome, idade, cidade, profissao)*/

//let nome = prompt("Escreva seu nome")
// const apresentacao = (nome) => {
//     console.log(`Meu nome é ${nome}`)
// }
// let num1 = Number(prompt("Primeiro valor"))
// let num2 = Number(prompt("Segundo valor"))
// const soma = (num1, num2) => {
//     // return num1+num2
//     apresentacao(num1 + num2)
// }
// soma(num1, num2)
//     //apresentacao(soma(num1, num2)) precisa de um return dentro da funcao
// const hipotenusa = (num1, num2) => {
//     return Math.sqrt(Math.pow(num1, 2) + Math.pow(num2, 2))
// }
// apresentacao(hipotenusa(num1, num2))
// const hipotenusa= (num1, num2) => {
//    apresentacao(Math.sqrt(Math.pow(num1,2) + Math.pow(num2,2)))
//}
// const cores = () => {
//     let cor1 = prompt("Escreva sua cor preferida")
//     let cor2 = prompt("Escreva a segunda cor que você mais gosta")
//     let cor3 = prompt("Escreva a terceira cor que você mais gosta")
//     const result = [cor1, cor2, cor3]
//     console.log(result)
// }
// cores()

// const tamanhoFrase = (frase1, frase2) => {
//     return frase1.length === frase2.length
// }
// tamanhoFrase("abc", "cba")

// const inverterPalavra = (palavra) => {
//     let palavra2 = palavra
//     const fimPalavra = palavra.length - 1
//     palavra2[0] = palavra[fimPalavra]
//     palavra2[fimPalavra] = palavra[0]
//     console.log(palavra2)
//     return palavra2
// }
// inverterPalavra("abcdef")

// const inverterPalavra = (palavra) => {
//     let palavra2 = palavra
//     const i = palavra2.length
//     console.log(i)
//     const primeiraLetra = palavra2[0]

//     console.log(primeiraLetra)

//     let fimPalavra = palavra2[i - 1]

//     console.log(i - 1)

//     console.log(palavra2)

//     palavra2[0] = fimPalavra
//     palavra2[i - 1] = primeiraLetra
//     return palavra2
// }
// console.log(inverterPalavra([1, 2, 3, 4]))

// const inverterPalavra = (palavra) => {
//     let palavra2 = palavra
//     const fimPalavra = palavra.length - 1
//     const primeiraLetra = palavra[0]
//     const ultimaLetra = palavra[fimPalavra]
//     palavra2 = ultimaLetra + palavra.slice(1, fimPalavra) + primeiraLetra
//     console.log(palavra2)
//     return palavra2
// }
// inverterPalavra("abcdef")

/*let compararData = () => {
    const dataAtual = prompt("Digite a data atual separrada por barras(/), seguindo o padrão (dd/mm/aaaa)")
    const dataNascimento = prompt("Digite a sua data de nascimento separrada por barras(/), seguindo o padrão (dd/mm/aaaa)")
    const dataEmissao = prompt("Digite a data de emissão separrada por barras(/), seguindo o padrão (dd/mm/aaaa)")
    let renovacao = 0

    dataAtual.split("/")
    dataNascimento.split("/")
    dataEmissao.split("/")

    if (dataAtual[2] - dataNascimento[2] > 50) {
        renovacao = 3
    } else if (dataAtual[2] - dataNascimento[2] == 50 && dataAtual[1] - dataNascimento[1] > 0) {
        renovacao = 3
    } else if (dataAtual[2] - dataNascimento[2] == 50 && dataAtual[1] - dataNascimento[1] == 0 && dataAtual[0] - dataNascimento[0] > 0) {
        renovacao = 3
    } else if (dataAtual[2] - dataNascimento[2] < 20) {
        renovacao = 1
    } else if (dataAtual[2] - dataNascimento == 20 && dataAtual[1] - dataNascimento[1] <= 0 && dataAtual - dataNascimento < 0) {
        renovacao = 1
    } else {
        renovacao = 2
    }

    let result = false

    if (renovacao = 0) {
        console.log("Erro")
    } else if (renovacao == 1) {
        if (dataEmissao[2] % 5 == 0) {
            return result = true
        }
    } else if (renovacao == 2) {
        if (dataEmissao[2] % 10 == 0) {
            return result = true
        }
    } else {
        if (dataEmissao[2] % 15 == 0) {
            return result = true
        }
    }
    console.log(result)
}
compararData()*/

const bissexto = (ano) => {
    if (ano % 400 == 0) {
        return true
    } else if (ano % 4 == 0 && ano % 100 == 0 && ano % 400 !== 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    } else {
        return false
    }
}
console.log(bissexto(2024))