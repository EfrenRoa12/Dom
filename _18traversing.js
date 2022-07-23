const padre = document.getElementById('padre')

/**
 *childNodes
 * firstChild -- regresa al primer nodo
 * firstElementChild -- regresa el primer elemento
 * 
 * nextSibling -- regresa al nodo inmediatamente despues del nodo especificado
 * nextElementSibling -- regresa al nodo inmediatamente posterior especificado
 * parentElement -- regresa el elemento padre
 * 
 * 
 */
console.log(padre.parentElement)//impime en consola los nodos que tenemos


/**
 * nextElementSibling -- desde el nieto
 * previousSibling -- regresa el nodo inmediatamente antes del nodo especificado o sea imprime nieto uno
 * previousElementSibling -- regresa un elemento inmediatamente antes especificado 
 * 
 */

//accedemos desde el nieto dos
const nieto = document.getElementById('nieto-dos')
console.log(nieto.previousElementSibling)


