const nodos = []
for (let i = 0; i < 80; i++) {
    const nodo = document.createElement('input');//relacionado con html
    nodos.push(nodo)
}

document.body.append(...nodos)//imprime 80 veces los cuadros