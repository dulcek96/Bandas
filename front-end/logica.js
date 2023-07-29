function post() {
    document.getElementById("myform").addEventListener("submit", function (event) {
        event.preventDefault();
        var datos = {
            band_id: document.getElementById("banda").value,
            name: document.getElementById("nombre").value,
            release_date: document.getElementById("fecha").value,
            place: document.getElementById("lugar").value
            duration: document.getElementById("duracion").value
            copies_sold: document.getElementById("copias").value
        }
        fetch('http://127.0.0.1:8000/api/bands', {
            method: "POST",
            headers: {'Content-Type': 'application/json'
        },
            body: JSON.stringify(datos)
        })
            .then(res => res.json())
            .then(json => console.log(json))
    })
}