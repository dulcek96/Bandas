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

    fetch("http://127.0.0.1:8000/api/bands")
    .then(function(respuesta1) {
      return respuesta1.json();
    })
    .then(function(DatosBandas) {
      id_bandas.push(DatosBandas['id']);
      name_bandas.push(DatosBandas['name']);
      genre_id.push(DatosBandas['genre_id ']);
      })

      Promise.all()
      .then (function() {
        var tabla1 = document.getElementById('tbody');
        var contenido1 = '';
        for (var i = 0; i < id_bandas.length; i++) {
          contenido += '<tr><td>' + id_bandas[i] + '</td><td>' + name_bandas[i] + '</td><td>' + genre_id[i] + '</td></tr>';
        }
        tabla1.innerHTML = contenido1;


    fetch("http://127.0.0.1:8000/api/genres")
    .then(function(respuesta2) {
      return respuesta2.json();
    })
    .then(function(DatosGeneros) {
      id_generos.push(DatosGeneros['id']);
      name_generos.push(DatosGeneros['name']);
      })

      Promise.all()
      .then (function() {
        var tabla2 = document.getElementById('tbody');
        var contenido2 = '';
        for (var i = 0; i < urls.length; i++) {
          contenido += '<tr><td>' + id_generos[i] + '</td><td>' + name_generos[i] + '</td></tr>';
        }
        tabla2.innerHTML = contenido2;


    fetch("http://127.0.0.1:8000/api/concerts")
    .then(function(respuesta3) {
      return respuesta3.json();
    })
    .then(function(DatosConciertos) {
      id_concert.push(DatosConcierto['id']);
      band_id.push(DatosConciertos['band_id']);
      name_concert.push(DatosConciertos['name']);
      date.push(DatosConciertos['date']);
      time.push(DatosConciertos['time']);
      place_concert.push(DatosConciertos['place']);
      })

      Promise.all(promesas)
      .then (function() {
        var tabla3 = document.getElementById('tbody');
        var contenido3 = '';
        for (var i = 0; i < urls.length; i++) {
          contenido += '<tr><td>' + id_concert[i] + '</td><td>' + band_id[i] + '</td><td>' + name_concert[i] + '</td><td>' + date[i] + '</td><td>' + time[i] + '</td><td>' + place_concert[i] + '</td></tr>';
        }
        tabla3.innerHTML = contenido3;


    fetch("http://127.0.0.1:8000/api/albums")
    .then(function(respuesta4) {
      return respuesta4.json();
    });
    .then(function(DatosAlbumes) {
      id_albums.push(DatosAlbumes['id']);
      band_id_albums.push(DatosAlbumes['band_id']);
      name_albums.push(DatosAlbumes['name']);
      duration.push(DatosAlbumes['duration']);
      copies_sold.push(DatosAlbumes['copies_sold']);
      place_albums.push(DatosAlbumes['place']);
      release_date.push(DatosAlbumes['release_date']);
      })


      Promise.all(promesas)
      .then (function() {
        var tabla4 = document.getElementById('tbody');
        var contenido4 = '';
        for (var i = 0; i < urls.length; i++) {
          contenido += '<tr><td>' + id_albums[i] + '</td><td>' + band_id_albums[i] + '</td><td>' + name_albums[i] + '</td><td>' + duration[i] + '</td><td>' + copies_sold[i] + '</td><td>' + place_albums[i] + '</td><td>' + release_date[i] + '</td></tr>';
        }
        tabla4.innerHTML = contenido4;




// function post() {

//     document.getElementById("myform").addEventListener("submit", function (event) {
//         event.preventDefault();
//         var datos = {
//             band_id: document.getElementById("banda").value,
//             name: document.getElementById("nombre").value,
//             release_date: document.getElementById("fecha").value,
//             place: document.getElementById("lugar").value
//             duration: document.getElementById("duracion").value
//             copies_sold: document.getElementById("copias").value
//         }
//         fetch('http://127.0.0.1:8000/api/bands', {
//             method: "POST",
//             headers: {'Content-Type': 'application/json'
//         },
//             body: JSON.stringify(datos)
//         })
//             .then(res => res.json())
//             .then(json => console.log(json))
//     })
// }

// id
// band_id 
// name
// release_date
// pleace
// duration
// copies_sould
// created_at
// updated_at