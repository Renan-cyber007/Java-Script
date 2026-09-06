let soma = [0] 
let notas = [7.5, 4.0, 9.2, 8.0, 6.5]
notas.sort()
for(let pos in notas) {
  soma+= notas[pos]
}
let media = soma / notas.length
console.log(`A Média é ${media.toFixed(2)}`)
