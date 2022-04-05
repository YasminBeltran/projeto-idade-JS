function verificar() {
    var data = new Date() 
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano)  {
    window.alert('[ERRO] verfique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            gênero= 'Homem'
            if(idade >=0 && idade < 12){
                //Criança
                img.setAttribute('src', 'menino.jpg') 
            } else if (idade < 30) {
                //jovem
                img.setAttribute('src', 'jovemm.jpg')
            } else if (idade < 55) {
                //Adulto
                img.setAttribute('src', 'adulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (fsex[1].checked) { 
            gênero = 'Mulher'
            if(idade >=0 && idade < 12){
                //Criança
                img.setAttribute('src', 'menina.jpg') 
            } else if (idade < 30) {
                //jovem
                img.setAttribute('src', 'jovemmenina.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulher.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
