let numeros = [15, 8, 22, 3, 40, 11]

numeros.push(27)

numeros.sort((a, b) => a - b)

console.log("O vetor tem " + numeros.length + " elementos.")

for (let pos in numeros) {
    console.log("A posição " + pos + " tem o valor " + numeros[pos])
}

let menor = numeros[0]
let maior = numeros[numeros.length - 1]

let soma = 0
for (let pos in numeros) {
    soma += numeros[pos]
}

console.log("O menor valor é: " + menor)
console.log("O maior valor é: " + maior)
console.log("A soma de todos os valores é: " + soma)

let pos22 = numeros.indexOf(22)
console.log("O valor 22 está na posição: " + pos22)

let pos99 = numeros.indexOf(99)
if (pos99 === -1) {
    console.log("O valor 99 não foi encontrado no vetor!")
} else {
    console.log("O valor 99 está na posição: " + pos99)
}
