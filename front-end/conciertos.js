let endPoint='http://127.0.0.1:8000/api/concerts';
//Conciertos eliminar
function borrar(id) {
    id = parseInt (id);
    let endPoint= 'http://127.0.0.1:8000/api/concerts/' +id;
    fetch( endPoint, {
    method: "DELETE"
    })
   .then(res => res.json())
   .then(data => {
    console.log(data);
    });
    alert("concierto eliminada");
    //location.reload();
    mostrarC();
}
//Conciertos crear
function crearC() {
    let nombre = document.getElementById('nombre').value
    let fecha = document.getElementById('fecha').value
    let tiempo = document.getElementById('tiempo').value
    let lugar = document.getElementById('lugar').value
    let endPoint = 'http://127.0.0.1:8000/api/concerts'; 
    const datos = {
        name: nombre,
        date: fecha,
        time: tiempo,
        place: lugar
    };

    fetch(endPoint, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(res => res.json())
    .then(data => {
        console.log("concert created:", data);
    })
    alert("concierto creado");
    location.reload();
}   
//Conciertos leer 
function mostrarC() {
    let tabla = document.getElementById('tabla1');
    let endPoint = 'http://127.0.0.1:8000/api/concerts';
    tabla.innerHTML = '';
    
    fetch(endPoint)
        .then(respuesta => respuesta.json())
        .then(data => {
            let html = '';
            data.forEach(element => {
                html += `
                    <tr>
                        <td>${element.name}</td>
                        <td>${element.date}</td>
                        <td>${element.time}</td>
                        <td>${element.place}</td>
                        <td><button class="boton" onclick="borrar(${element.id})">Eliminar</button></td>
                    </tr>
                `;
            });
            tabla.innerHTML = html;
        });
}      