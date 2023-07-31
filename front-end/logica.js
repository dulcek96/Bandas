function consumir() {
    var id_bandas = [];
    var genre_id = [ ];    
    var name_bandas = [];
    var id_generos = [];
    var name_generos = [];
    var id_concert = [];
    var band_id = [];
    var name_concert = [];
    var  date = [];
    var  time = [];
    var place_concert = [];
    var id_albums = [];
    var band_id_albums = [];
    var name_albums = [];
    var place_albums = [];
    var duration = [];
    var release_date = [ ];    
    var copies_sold = [];
    var id

    fetch("http://127.0.0.1:8000/api/bands")
    .then(function(respuesta1) {
      return respuesta1.json();
    })
    fetch("http://127.0.0.1:8000/api/genres")
    .then(function(respuesta2) {
      return respuesta2.json();
    })
    fetch("http://127.0.0.1:8000/api/concerts")
    .then(function(respuesta3) {
      return respuesta3.json();
    })
    fetch("http://127.0.0.1:8000/api/albums")
    .then(function(respuesta4) {
      return respuesta4.json();
    })

    var endPoint = document.getElementById("opcion").value;
    var url;
  
    if (endPoint === "bandas") {
      url = "http://127.0.0.1:8000/api/bands";
    } else if (endPoint === "generos") {
      url = "http://127.0.0.1:8000/api/genres";
    } else if (endPoint === "conciertos") {
      url = "http://127.0.0.1:8000/api/concerts";
    } else if (endPoint === "albumes") {
      url = "http://127.0.0.1:8000/api/albums";
    } else {
      console.log("Selecciona una opción válida");
      return;
    }
  
    fetch(url)
      .then(function(respuesta) {
        return respuesta.json();
      })
    }







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