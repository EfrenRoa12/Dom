//es para extraer los datos colecciones
// rabajaremos con imagenes ya que es lo que repepite mas 
document.querySelector('img')//9 colecciones de nodos
// 

const lista_nodos = document.querySelectorAll('img')
lista_nodos//nos muestra en consola


lista_nodos.length//nos define el numero de elementos que tiene img

//html coleccion solamente elementos html
const colecciones = document.getElementsByTagName('h1')//ya lo definimos
colecciones//nos muestra los elementos h1 cuantos son
colecciones.length//muestra cuantos h1 hay en nuestro sitio
//----------------------------------------------------------------------
// un html colleccion son las etiquetas
// nodelist coleccion incluye toda la rama


// tomamos lista de nodos que habiamos creado -------- con lasiguiente funcion
const array =[...lista_nodos]//una vez definido
array //ahora nos muestra un array
array.map//ahora nos muestra que si existe la consola como arrays
//----------------------------------------------------------------------
//----------------------------------------------------------------------
//----------------------------------------------------------------------
//----------------------------------------------------------------------
// le damos un nombre
const array2 = Array.from(document.querySelectorAll('img'))
array2//
//se utilizan en el ambito laboral


