function verificarmaioridade(idade) {
    if (idade >= 18) {
        return "Maior de Idade"
    } else {
        return "Menor de Idade"
    }
}

function analisarTurma(vetorIdades) {
    let maiores = 0
    let menores = 0

    for(let pos in vetorIdades) {
        let res = verificarmaioridade(vetorIdades[pos])
        if(res == "Maior de Idade") {
            maiores++
        }
        else{
            menores++
        }
    }
    console.log(`Total de maiores: ${maiores}`)
    console.log(`Total de menores: ${menores}`)
}
    let turma = [12, 20, 15, 18, 30]
    analisarTurma(turma)
