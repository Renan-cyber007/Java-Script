let numeros = [5, 8, 2, 9, 3, 14, 1]

let maior = numeros[0]

for (let pos in numeros) { 
  if (numeros[pos] > maior)
    maior = numeros[pos]
}
console.log(maior)
