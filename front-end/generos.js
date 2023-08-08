//Géneros eliminar
function borrarG(id) {
    id = parseInt (id);
    let endPoint4= 'http://127.0.0.1:8000/api/genres/' + id;
    fetch( endPoint4, {
    method: "DELETE"
    })
   .then(res => res.json())
   .then(data4 => {
    console.log(data4);
    });
    alert("género eliminado");
    location.reload();
    mostrarG();
}
//Genéro crear
function crearG() {
    let nombreGenero = document.getElementById('nombre').value
    let endPoint4 = 'http://127.0.0.1:8000/api/genres'; 
    const data4 = {
        name: nombreGenero
    };

    fetch(endPoint4, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data4)
    })
    .then(res => res.json())
    .then(data4 => {
        console.log("Genre created:", data4);
    })
    alert("género creado");
    location.reload();
}   
//BANDAs leer 
function mostrarG() {
    let tabla4 = document.getElementById('tabla4');
    let endPoint4 = 'http://127.0.0.1:8000/api/genres';
    tabla4.innerHTML = '';
    
    fetch(endPoint4)
        .then(respuesta => respuesta.json())
        .then(data4 => {
            let html = '';
            data4.forEach(element => {
                html += `
                    <tr>
                        <td>${element.name}</td>
                        <td><button class="boton" onclick="borrarG(${element.id})">Eliminar</button></td>
                    </tr>
                `;
            });
            tabla4.innerHTML = html;
        });
}