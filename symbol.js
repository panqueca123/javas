const chave1 = Symbol('chave1')
const chave2 = Symbol('chave2')


console.log(chave1 === chave2)


let usuario = {}


usuario[chave1] = 'Valor da propriedade com chave1'


console.log(usuario[chave1])