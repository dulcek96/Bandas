//Conciertos eliminar
function borrarC(id) {
    id = parseInt (id);
    let endPoint2= 'http://127.0.0.1:8000/api/concerts/' +id;
    fetch( endPoint2, {
    method: "DELETE"
    })
   .then(res => res.json())
   .then(datos2 => {
    console.log(datos2);
    });
    alert("concierto eliminada");
    location.reload();
    mostrarC();
}
//Conciertos crear
function crearC() {
    let nombre = document.getElementById('nombre').value
    let fecha = document.getElementById('fecha').value
    let tiempo = document.getElementById('tiempo').value
    let lugar = document.getElementById('lugar').value
    let endPoint2 = 'http://127.0.0.1:8000/api/concerts'; 
    const datos2 = {
        name: nombre,
        date: fecha,
        time: tiempo,
        place: lugar
    };

    fetch(endPoint2, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos2)
    })
    .then(res => res.json())
    .then(datos2 => {
        console.log("concert created:", datos2);
    })
    alert("concierto creado");
    location.reload();
}   
//Conciertos leer 
function mostrarC() {
    let tabla1 = document.getElementById('tabla1');
    let endPoint2 = 'http://127.0.0.1:8000/api/concerts';
    tabla1.innerHTML = '';
    
    fetch(endPoint2)
        .then(respuesta => respuesta.json())
        .then(datos2 => {
            let html = '';
            datos2.forEach(element => {
                html += `
                    <tr>
                        <td>${element.name}</td>
                        <td>${element.date}</td>
                        <td>${element.time}</td>
                        <td>${element.place}</td>
                        <td><button class="boton" onclick="borrarC(${element.id})">Eliminar</button></td>
                    </tr>
                `;
            });
            tabla1.innerHTML = html;
        });
}      