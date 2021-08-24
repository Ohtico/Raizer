let url_computer = 'http://localhost:4000/computadores';
let url2 = 'http://localhost:4001/gadges';
let url3 = 'http://localhost:4002/laptos';

let formulario = document.getElementById('formulario')
let btnProducto = document.getElementById('btnProducto')
let btnEditar = document.getElementById('btnEditar')
let btnEliminar = document.getElementById('btnEliminar')

// window.addEventListener('DOMContentLoaded', async () => {
// })

formulario.addEventListener('submit', async (e) => {
    console.log(formulario)
    e.preventDefault()
    let nombre = document.getElementById('nombre').value;
    let precio = document.getElementById('precio').value;
    let url = document.getElementById('url').value
    
    let resp = await fetch(url_computer, {
        method: 'POST',
        body: JSON.stringify({
            nombre: nombre,
            precio: precio,
            url: url
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
})


btnProducto.addEventListener('click', async () => {
    let nombreInput = document.getElementById('nombre').value;

    let resp = await fetch(url_computer)
    let data = await resp.json()

    let modificar = data.find(producto => producto.nombre === nombreInput)

    const {nombre, precio, img} = modificar;

    document.getElementById('nombre').value = nombre;
    document.getElementById('precio').value = precio
    document.getElementById('url').value = img
})

btnEditar.addEventListener('clicl', async() => {
    let idModificar = document.getElementById('id').value;
    let nameMod = document.getElementById('name').value;
    let precio = document.getElementById('precio').value

    let resp = await fetch(`${url_computer}/${idModificar}`, {
        method: 'PUT',
        body: JSON.stringify({
            id:idModificar,
            nombre:nameMod,
            precio:precio
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
})

btnEliminar.addEventListener('click', async() => {

    let idModificar = document.getElementById('id').value;
    let resp = await fetch(`${url}/${idModificar}`, {
        method: 'DELETE',
    })
})