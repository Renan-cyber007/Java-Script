function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebe homem.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'JOVEM HOMEM.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'JOVEM HOMEM.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'homem idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebe mulher.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'JOVEM MULHER.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'JOVEM MULHER.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'mulher idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Idade: ${idade} anos. Gênero: ${genero}.`
        res.appendChild(img)
        
}

}
