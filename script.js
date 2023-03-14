function carregar() { 
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getUTCMinutes()
    msg.innerHTML = 'Agora são ' +hora +" horas e "+minuto +' minutos.' 
   
    if (hora >= 6 && hora < 12) {
        img.src = './img/bomdia.png';
        document.body.style.background ='#fecd78'

      } else if (hora >= 12 && hora <= 18) {
        img.src = './img/boatarde.png';
        document.body.style.background ='#d87623'

      } else {
        img.src = './img/boanoite.png.png';
        document.body.style.background ='#414e57'
      }
    }
