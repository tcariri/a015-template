// elementos necessarios 
// inicicialização de variavel 
// condição de continuação 
// um conjunto de ações
// uma alteração 

let numero = +prompt("digite um número para somar ou 0 para sair")
let soma=0
while (numero!==0 ) {
soma=soma+numero
numero = +prompt("digite um número para somar ou 0 para sair")
}

console.log(soma);

