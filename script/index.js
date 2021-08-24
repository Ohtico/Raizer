

document.addEventListener('DOMContentLoaded', () => {
  pintarIndex('http://localhost:4000/computadores')
})
let container = document.getElementById('pintar')
const pintarIndex = async (url) =>{

    const resp = await fetch(url)
    const data = await resp.json();
    console.log(data)

    data.forEach(desktop => {
        const {nombre, img, precio} = desktop;
        container.innerHTML += `
                                <div class="card m-3" style="width: 17rem;"> 
                                <div class="card h-100" style="width: 17rem;">
                                <img src="${img}" width="80px" height="200px" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">${nombre}</h5>
                                <p class="card-text">${precio}</p>
                                </div>
                                </div>
                                </div>`

    })
    
}

