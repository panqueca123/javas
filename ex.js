let primeiroNome = "nome"
let ultimoNome = "sobrenome"
let nomeCompleto = primeiroNome + " " + ultimoNome

console.log (nomeCompleto)

// numeros

let = num1 = '10'
let = num2 = 20

let soma = num1 + num2
let subtracao = num1 - num2
let multiplicacao = num1 * num2
let divisao = num1 / num2 

console.log(soma +'\n' + subtracao + '\n' + multiplicacao + '\n' + divisao)

// booleanos
let estaChovendo = true
if(estaChovendo){
    console.log("Esta chovendo")
}else{
    console.log("nao está chovendo")
}

// null e undefined

let resposta = null
let nota 

console.log ("resposta = " + resposta)
console.log("nota = "+ nota)

// sybol
let idUnico = Symbol("id")
let produto = {
    [idUnico]: 123

}
console.log(produto[idUnico])