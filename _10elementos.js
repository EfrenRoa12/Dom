const nuevo = document.createElement('a');//creamos el elemento nuevo
nuevo//verificamos lo que construimos <a></a>

nuevo.className = 'clase'//creamos la clase de <a></a>
nuevo//visualizamos el resultado

nuevo.id = 'id_nuevo'//agregamos un id
nuevo

//la ruta href y el id que representa #
nuevo.setAttribute('href','#')
nuevo

//realizamos la descripcion
nuevo.textContent = 'nuevo elemento'
nuevo


//marcamos el navbar donde se encentra la barra de navegacion
//para incluirlo debemos colocar
$0.appendChild(nuevo)

// realizamos algunas pruebas