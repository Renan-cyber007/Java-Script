let notas = [6.5, 8.0, 7.0, 9.5]
let soma = 0
for (let pos in notas) {
    soma += notas[pos]
}
let media = soma / notas.length

console.log("Sua média foi de " + media)
if (media >= 7.0) {
        console.log("Voce foi APROVADO!")
    }
    else {
        console.log("Voce foi REPROVADO")
    }
