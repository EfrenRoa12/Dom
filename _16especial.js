/**
 * son las constantes que vamos a definir para que se ejecute
 */

const video_mp4 = document.getElementById('video'),
    boton_play = document.getElementById('play'),
    boton_pause = document.getElementById('pause');

boton_play.addEventListener('click', ()=>{
    video_mp4.play()
})

boton_pause.addEventListener('click', ()=>{
    video_mp4.pause()
})
