let idade = prompt("Digite a sua idade.")
let produto = ("digite o valor do produto.")
var desconto
if(idade < 18){
    deconto = 0.9
    console.log("Possuí desconto.")
}
else if(idade >= 18){
    desconto = 1
    console.log("Não possuí desconto.")
}
var ValorFinal = (idade * desconto)
console.log("O valor do produto é", ValorFinal)
