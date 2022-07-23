const checkbox = document.getElementById('activador')

checkbox.addEventListener('change',()=>{
    console.log('datos aceptados')
})



checkbox.addEventListener('change',e=>{
    console.log(e)//en le damos click en validacion console target checked false 
})




checkbox.addEventListener('change',e=>{
    if (e.target.checked) {
        console.log('su solicitud es aceptada')//cuando lo marcaos aparece
    }
    else{
        console.log('active la solicitud')//cuando lo desmarcamos aparece
    }
})