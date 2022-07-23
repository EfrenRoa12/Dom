//seleccionamos e signo de enviar 
const enviar = $0
enviar

const evento = ()=>{
    console.log('numero de clicks')
}

enviar.addEventListener('click',evento)//ya lo hemos generado
// sile damos un click en enviar aparecera el nuero de registros
//------------------------------------------------------------------ejercicios hechos en pagina web


// seleccionamos el nombre 
const nombre =$0
nombre //lo verificamos


const evento_dos = ()=>{
    console.log('numero de letras')
}
//lo determinamos con imput
nombre.addEventListener('input',evento_dos)
//al escribir en nombre seleccionado ya empieza a registrar cuantos letrras escribimos

// para elmiinar el evento hacemos lo siguiente
nombre.removeEventListener('input',evento_dos)//es para que deje de registrar las letras ---- no es tan recomendable hacerlo

//****--------------------------------------------------------------------------- */
enviar.removeEventListener('click',evento)


//primero definimo la funcion que es lo que va a hacer
//segundo ejecutarlo
const evento_tres = function accion(){
    console.log('numero de envios')
}

enviar.addEventListener('click',evento_tres)
