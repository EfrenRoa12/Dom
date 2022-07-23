/*la etiqueta h2 con la clase t-cursos es seleccionado desde esta funcion y muestra en consola h2
getElementById ------ se trabaja mediante id desde etiqueta html
*/
const padre = document.querySelector('ul');/*ul es la etiqueta padre lo llamamos desde aqui */
console.log(padre.childElementCount);/*marcara elementos es lo que contiene*/
console.log(padre.children[1]);/*desde posicion 0 y hasta 1 solamente imprime un elemento*/
console.log(padre.firstElementChild);/*muestra el primer elemento*/
console.log(padre.lastElementChild);/*muestra el ultimo elemento*/
 

/*para ver  el abuelo*/
const abuelo = document.querySelector('ul.listas-cursos > li.listas');
console.log(abuelo.parentElement.parentElement);

/*para ver  el hermano mas cercano*/
const hermano = document.querySelector('ul.listas-cursos > li.listas');
console.log(hermano.nextElementSibling);