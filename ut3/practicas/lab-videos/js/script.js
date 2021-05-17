function videoInfo(videoArr) {
    for (let i = 0; i<videoArr.length; i++) {
        let horas = Math.floor(videoArr[i].duration/(60*60));
        let minutos = Math.floor(videoArr[i].duration/60 - horas*60);
        let segundos = Math.ceil(videoArr[i].duration%60);
        
        videoArr[i].nextElementSibling.innerHTML = '<p><strong>Título: </strong>'+videoArr[i].title+'</p><p><strong>Formato: </strong>'+videoArr[i].currentSrc.split('.').pop()+'</p><p><strong>Dimensiones: </strong>'+videoArr[i].videoWidth+'x'+videoArr[i].videoHeight+'</p><p><strong>Duración: </strong>'+(horas < 10 ? "0" + horas : horas)+':'+(minutos < 10 ? "0" + minutos : minutos)+':'+(segundos < 10 ? "0" + segundos : segundos)+'</p>';
    }
}