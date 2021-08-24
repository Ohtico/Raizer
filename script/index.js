let url1 = 'http://localhost:4000/computadores';
let url2 = 'http://localhost:4001/gadges';
let url3 = 'http://localhost:4002/laptos';


document.addEventListener('DOMContentLoaded', () => {
  pintarIndex(url1, url2, url3);
})
let container = document.getElementById('pintar')
const pintarIndex = async (url1, url2, url3) =>{

    const resp = await fetch(url1)
    const data = await resp.json();
    // console.log(data)
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

    const resp2 = await fetch(url2)
    const data2 = await resp2.json();
    // console.log(data)
    data2.forEach(gadgets => {
        const {nombre, img, precio} = gadgets;
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

    const resp3 = await fetch(url3)
    const data3 = await resp3.json();
    // console.log(data)
    data3.forEach(laptop => {
        const {nombre, img, precio} = laptop;
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

