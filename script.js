function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    

    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'imagens/Manhã.png'
        document.body.style.backgroundColor = '#FDEFC6'
    }
    else  if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'imagens/Tarde.png'
        document.body.style.backgroundColor = '#C37F74'
    }
    else {
        //BOA NOITE!
        img.src = 'imagens/Noite.png'
        document.body.style.backgroundColor = '#214D69'
    }
}

