/**
 const entrada = document.getElementById('input')
entrada.addEventListener('keydown',function(){
    console.log('tecla presionada')
})


nos relfeja la letra
entrada.addEventListener('keydown',function(e){
    console.log(e)
})


 */
//esta funcion es para que registre el numero de letra al teclear se muestra en consola
const entrada = document.getElementById('input')
entrada.addEventListener('keydown',function(e){
    console.log('presionaste la tecla'+ e.key)
})
