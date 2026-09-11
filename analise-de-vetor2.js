let idades = [12, 18, 25, 10, 30]
let soma = 0
let totmaior = 0
for (let pos in idades) {
    console.log(`Na posição ${pos} temos o valor ${idades[pos]}`)
    soma += idades[pos]
    if(idades[pos] >= 18) {
        totmaior++
    }
}
console.log(`A soma de todas as idades é ${soma}`)
console.log(`Total de pessoas maiores de idade: ${totmaior}`)
