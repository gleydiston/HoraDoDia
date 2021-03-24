function carregar(){

    var msg = window.document.querySelector("#msg")
    var img = window.document.querySelector("#imagem")
    var data = new Date()
    var hora = data.getHours()
    //var hora = 14

    msg.innerHTML = `Agora são ${hora} horas.`

    


    if(hora >= 6 && hora <12){ //manhã ddd4c2
        console.log("manhã")
        document.body.style.background = "#ddd4c2"
        img.src = 'manha.png' 

    }else if (hora >= 12 && hora <= 18){//tarde c46f27
        console.log("tarde")
        document.body.style.background = "#c46f27"

        img.src = 'tarde.png' 

    }else { // noite 064792
        console.log("noite")
        document.body.style.background = "#064792"

        img.src = 'fotonoite.png' 
    }

}
