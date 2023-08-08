//Albums eliminar
function borrarA(id) {
    id = parseInt (id);
    let endPoint3= 'http://127.0.0.1:8000/api/albums/' +id;
    fetch( endPoint3, {
    method: "DELETE"
    })
   .then(res => res.json())
   .then(data3 => {
    console.log(data3);
    });
    alert("albums eliminada");
    location.reload();
    mostrarA();
}
//Albums crear
function crearA() {
    let nombre = document.getElementById('nombre').value
    let endPoint3 = 'http://127.0.0.1:8000/api/albums'; 
    const data3 = {
        name: nombre,
        release_date: fecha,
        place: lugar,
        duration: duracion,
        copies_sold: copias
    };

    fetch(endPoint3, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data3)
    })
    .then(res => res.json())
    .then(data3 => {
        console.log("album created:", data3);
    })
    alert("album creada");
    location.reload();
}   
//Albumss leer 
function mostrarA() {
    let tabla3 = document.getElementById('tabla3');
    let endPoint3 = 'http://127.0.0.1:8000/api/albums';
    tabla3.innerHTML = '';
    
    fetch(endPoint3)
        .then(respuesta => respuesta.json())
        .then(data3 => {
            let html = '';
            data3.forEach(element => {
                html += `
                    <tr>
                        <td>${element.name}</td>
                        <td>${element.release_date}</td>
                        <td>${element.place}</td>
                        <td>${element.duration}</td>
                        <td>${element.copies_sold}</td>
                        <td><button class="boton" onclick="borrarA(${element.id})">Eliminar</button></td>
                    </tr>
                `;
            });
            tabla3.innerHTML = html;
        });
}      