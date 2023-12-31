    //BANDAs eliminar
    function borrarD(id) {
        id = parseInt (id);
        let endPoint= 'http://127.0.0.1:8000/api/bands/' +id;
        fetch( endPoint, {
        method: "DELETE"
        })
       .then(res => res.json())
       .then(data => {
        console.log(data);
        });
        alert("banda eliminada");
        location.reload();
        mostrarD();
    }
    //BANDAs crear
    function crear() {
        let nombreBanda = document.getElementById('nombreBanda').value
        let endPoint = 'http://127.0.0.1:8000/api/bands'; 
        const data = {
            name: nombreBanda
        };
    
        fetch(endPoint, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log("Band created:", data);
        })
        alert("banda creada");
        location.reload();
    }   
    //BANDAs leer 
    function mostrarD() {
        let tabla = document.getElementById('tabla');
        let endPoint = 'http://127.0.0.1:8000/api/bands';
        tabla.innerHTML = '';
        
        fetch(endPoint)
            .then(respuesta => respuesta.json())
            .then(data => {
                let html = '';
                data.forEach(element => {
                    html += `
                        <tr>
                            <td>${element.name}</td>
                            <td><button class="boton" onclick="borrarD(${element.id})">Eliminar</button></td>
                        </tr>
                    `;
                });
                tabla.innerHTML = html;
            });
    }      