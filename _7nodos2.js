// crearemos un nodo -- dentro de sectio  hay h1 h2 h3 etc otras etiquetas que serian los hijos de section
const padre = document.createElement('section.detalle');
// imprime undefine

// nuevo nodo es undefied
const nuevo_nodo = document.createElement('div');
// para crear un nuevo nodo y forme parte de la pagina haremos lo siguiente
// llamamos padre
padre.appendChild('nuevo_nodo');//el nodo que creamos es el que vamos a agregar aqui

// para agregar un texto vamos a hacer esto
const texto = document.createTextNode('descripcion');
// ya se encuentrs en el aire ahora para que el texto se introduzca en el nodo vamos a hacer esto:
nuevo_nodo.appendChild(texto);

// todo lo que hicimos es muy largo ahora lo haremos en una sola linea de codigo
// claro vamos a declararlo primero el padre
padre.append('nuevo modelo',document.createElement('button'));
// imprime undefined

// vamos a agregar un nodo antes de agregarlo
padre //le damos enter y se despliega lo que hemos estado haciendo
const nuevo = document.createElement('h2')
//imprime undefined generamos el nodo que es nuevo

//lo que hacemos es que llamamos al div de las tres cajas o sea como el padre
const final = document.querySelector('div.caja-contenedor')
// imprime undefined
final //enter debe identificar el div de final que creamos

// llamamos al padre e insetamos al elemento
padre.insertBefore(nuevo.final);//el hijo final ya tenemos h2

//crearemos el texto
const text = document.createTextNode('nuevo nodo creado')
//undefined
//ahora o vincularemos a nuestro nodo
nuevo.appendChild(text);
// ya estara disponible
//-----------------------------------------------------------
const ndo = document.createElement('p')
ndo 
//verificamos nuestro punto final un antes y despues
final.insertAdjacentElement('beforebegin', ndo) //hemos añadido
final.insertAdjacentElement('afterbegin', ndo) //hemos añadido

final.insertAdjacentElement('beforeend', ndo) //despues añadido la parte final
final.insertAdjacentElement('afterend', ndo) //despues del final del nodo