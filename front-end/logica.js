// function consumir() {
//   var id_bandas = [];
//   var genre_id = [];
//   var name_bandas = [];
//   var id_generos = [];
//   var name_generos = [];
//   var id_concert = [];
//   var band_id = [];
//   var name_concert = [];
//   var date = [];
//   var time = [];
//   var place_concert = [];
//   var id_albums = [];
//   var band_id_albums = [];
//   var name_albums = [];
//   var place_albums = [];
//   var duration = [];
//   var release_date = [];
//   var copies_sold = [];

//   // Fetch para obtener datos de las bandas
//   fetch("http://127.0.0.1:8000/api/bands")
//     .then(function (respuesta1) {
//       return respuesta1.json();
//     })
//     .then(function (DatosBandas) {
//       DatosBandas.forEach((banda) => {
//         id_bandas.push(banda.id);
//         name_bandas.push(banda.name);
//         genre_id.push(banda.genre_id);
//       });
//     })
//     .then(function () {
//       var tabla1 = document.getElementById('tablaBands');
//       var contenido1 = '';
//       for (var i = 0; i < id_bandas.length; i++) {
//         contenido1 += '<tr><td>' + id_bandas[i] + '</td><td>' + name_bandas[i] + '</td><td>' + genre_id[i] + '</td></tr>';
//       }
//       tabla1.innerHTML = contenido1;
//     });

//   // Fetch para obtener datos de los géneros
//   fetch("http://127.0.0.1:8000/api/genres")
//     .then(function (respuesta2) {
//       return respuesta2.json();
//     })
//     .then(function (DatosGeneros) {
//       DatosGeneros.forEach((genero) => {
//         id_generos.push(genero.id);
//         name_generos.push(genero.name);
//       });
//     })
//     .then(function () {
//       var tabla2 = document.getElementById('tablaGenres');
//       var contenido2 = '';
//       for (var i = 0; i < id_generos.length; i++) {
//         contenido2 += '<tr><td>' + id_generos[i] + '</td><td>' + name_generos[i] + '</td></tr>';
//       }
//       tabla2.innerHTML = contenido2;
//     });

//   // Fetch para obtener datos de los conciertos
//   fetch("http://127.0.0.1:8000/api/concerts")
//     .then(function (respuesta3) {
//       return respuesta3.json();
//     })
//     .then(function (DatosConciertos) {
//       DatosConciertos.forEach((concierto) => {
//         id_concert.push(concierto.id);
//         band_id.push(concierto.band_id);
//         name_concert.push(concierto.name);
//         date.push(concierto.date);
//         time.push(concierto.time);
//         place_concert.push(concierto.place);
//       });
//     })
//     .then(function () {
//       var tabla3 = document.getElementById('tablaConcerts');
//       var contenido3 = '';
//       for (var i = 0; i < id_concert.length; i++) {
//         contenido3 += '<tr><td>' + id_concert[i] + '</td><td>' + band_id[i] + '</td><td>' + name_concert[i] + '</td><td>' + date[i] + '</td><td>' + time[i] + '</td><td>' + place_concert[i] + '</td></tr>';
//       }
//       tabla3.innerHTML = contenido3;
//     });

//   // Fetch para obtener datos de los álbumes
//   fetch("http://127.0.0.1:8000/api/albums")
//     .then(function (respuesta4) {
//       return respuesta4.json();
//     })
//     .then(function (DatosAlbumes) {
//       DatosAlbumes.forEach((album) => {
//         id_albums.push(album.id);
//         band_id_albums.push(album.band_id);
//         name_albums.push(album.name);
//         duration.push(album.duration);
//         copies_sold.push(album.copies_sold);
//         place_albums.push(album.place);
//         release_date.push(album.release_date);
//       });
//     })
//     .then(function () {
//       var tabla4 = document.getElementById('tablaAlbums');
//       var contenido4 = '';
//       for (var i = 0; i < id_albums.length; i++) {
//         contenido4 += '<tr><td>' + id_albums[i] + '</td><td>' + band_id_albums[i] + '</td><td>' + name_albums[i] + '</td><td>' + duration[i] + '</td><td>' + copies_sold[i] + '</td></tr>';
//       }
//       tabla4.innerHTML = contenido4;
//     });
// }

// // ... (código JavaScript existente) ...

// // Fetch para obtener datos de las bandas
// fetch("http://127.0.0.1:8000/api/bands")
//     .then(function (respuesta1) {
//         return respuesta1.json();
//     })
//     .then(function (DatosBandas) {
//         DatosBandas.forEach((banda) => {
//             id_bandas.push(banda.id);
//             name_bandas.push(banda.name);
//             genre_id.push(banda.genre_id);
//         });
//     })
//     .then(function () {
//         var tabla1 = document.getElementById('tablaBands');
//         var contenido1 = '';
//         for (var i = 0; i < id_bandas.length; i++) {
//             contenido1 += '<tr><td>' + id_bandas[i] + '</td><td>' + name_bandas[i] + '</td><td>' + genre_id[i] + '</td>';
//             contenido1 += '<td><button onclick="editarBanda(' + id_bandas[i] + ')" class="btn btn-primary btn-sm" title="Editar"><i class="fas fa-pencil-alt"></i></button>';
//             contenido1 += '<button onclick="eliminarBanda(' + id_bandas[i] + ')" class="btn btn-danger btn-sm" title="Eliminar"><i class="fas fa-trash-alt"></i></button></td></tr>';
//         }
//         tabla1.innerHTML = contenido1;
//     });
//     function fetchTableData(url, tableId, headers, rowData) {
//       fetch(url)
//           .then(function (response) {
//               return response.json();
//           })
//           .then(function (data) {
//               var table = document.getElementById(tableId);
//               var tableBody = table.querySelector("tbody");
//               tableBody.innerHTML = "";
  
//               data.forEach(function (item) {
//                   var row = document.createElement("tr");
//                   headers.forEach(function (header) {
//                       var cell = document.createElement("td");
//                       cell.textContent = item[header];
//                       row.appendChild(cell);
//                   });
//                   tableBody.appendChild(row);
//               });
  
//               rowData[tableId] = data; // Store the data for further use (if needed)
//           })
//           .catch(function (error) {
//               console.error("Error fetching data:", error);
//           });
//   }
  
//   function consumir() {
//       var rowData = {}; // Store the fetched data for each table
  
//       fetchTableData("http://127.0.0.1:8000/api/bands",
//           "tablaBands",
//           ["id", "name", "genre_id"],
//           rowData
//       );
  
//       fetchTableData("http://127.0.0.1:8000/api/genres",
//           "tablaGenres",
//           ["id", "name"],
//           rowData
//       );
  
//       fetchTableData("http://127.0.0.1:8000/api/concerts",
//           "tablaConcerts",
//           ["id", "band_id", "name", "date", "time", "place"],
//           rowData
//       );
  
//       fetchTableData("http://127.0.0.1:8000/api/albums",
//           "tablaAlbums",
//           ["id", "band_id", "name", "duration", "copies_sold"],
//           rowData
//       );
//   }
  
  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////77
  

// ... (continuar con el código JavaScript existente) ...




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
///////////////////////////////////////////////////////////////////////////////////////
function consumir() {
  // Arrays para almacenar los datos
  var id_bandas = [];
  var genre_id = [];
  var name_bandas = [];
  var id_generos = [];
  var name_generos = [];
  var id_concert = [];
  var band_id = [];
  var name_concert = [];
  var date = [];
  var time = [];
  var place_concert = [];
  var id_albums = [];
  var band_id_albums = [];
  var name_albums = [];
  var place_albums = [];
  var duration = [];
  var release_date = [];
  var copies_sold = [];

  // Fetch para obtener datos de las bandas
  fetch("http://127.0.0.1:8000/api/bands")
    .then(function (respuesta1) {
      return respuesta1.json();
    })
    .then(function (DatosBandas) {
      DatosBandas.forEach((banda) => {
        id_bandas.push(banda.id);
        name_bandas.push(banda.name);
        genre_id.push(banda.genre_id);
      });
    })
    .then(function () {
      var tabla1 = document.getElementById('tablaBands');
      var contenido1 = '';
      for (var i = 0; i < id_bandas.length; i++) {
        contenido1 += '<tr><td>' + id_bandas[i] + '</td><td>' + name_bandas[i] + '</td><td>' + genre_id[i] + '</td>';
        contenido1 += '<td><button onclick="editarBanda(' + id_bandas[i] + ')" class="btn btn-primary btn-sm" title="Editar"><i class="fas fa-pencil-alt"></i></button>';
        contenido1 += '<button onclick="eliminarBanda(' + id_bandas[i] + ')" class="btn btn-danger btn-sm" title="Eliminar"><i class="fas fa-trash-alt"></i></button></td></tr>';
      }
      tabla1.innerHTML = contenido1;
    });

  // Fetch para obtener datos de los géneros
  fetch("http://127.0.0.1:8000/api/genres")
    .then(function (respuesta2) {
      return respuesta2.json();
    })
    .then(function (DatosGeneros) {
      DatosGeneros.forEach((genero) => {
        id_generos.push(genero.id);
        name_generos.push(genero.name);
      });
    })
    .then(function () {
      var tabla2 = document.getElementById('tablaGenres');
      var contenido2 = '';
      for (var i = 0; i < id_generos.length; i++) {
        contenido2 += '<tr><td>' + id_generos[i] + '</td><td>' + name_generos[i] + '</td></tr>';
      }
      tabla2.innerHTML = contenido2;
    });

  // Fetch para obtener datos de los conciertos
  fetch("http://127.0.0.1:8000/api/concerts")
    .then(function (respuesta3) {
      return respuesta3.json();
    })
    .then(function (DatosConciertos) {
      DatosConciertos.forEach((concierto) => {
        id_concert.push(concierto.id);
        band_id.push(concierto.band_id);
        name_concert.push(concierto.name);
        date.push(concierto.date);
        time.push(concierto.time);
        place_concert.push(concierto.place);
      });
    })
    .then(function () {
      var tabla3 = document.getElementById('tablaConcerts');
      var contenido3 = '';
      for (var i = 0; i < id_concert.length; i++) {
        contenido3 += '<tr><td>' + id_concert[i] + '</td><td>' + band_id[i] + '</td><td>' + name_concert[i] + '</td><td>' + date[i] + '</td><td>' + time[i] + '</td><td>' + place_concert[i] + '</td></tr>';
      }
      tabla3.innerHTML = contenido3;
    });

  // Fetch para obtener datos de los álbumes
  fetch("http://127.0.0.1:8000/api/albums")
    .then(function (respuesta4) {
      return respuesta4.json();
    })
    .then(function (DatosAlbumes) {
      DatosAlbumes.forEach((album) => {
        id_albums.push(album.id);
        band_id_albums.push(album.band_id);
        name_albums.push(album.name);
        duration.push(album.duration);
        copies_sold.push(album.copies_sold);
        place_albums.push(album.place);
        release_date.push(album.release_date);
      });
    })
    .then(function () {
      var tabla4 = document.getElementById('tablaAlbums');
      var contenido4 = '';
      for (var i = 0; i < id_albums.length; i++) {
        contenido4 += '<tr><td>' + id_albums[i] + '</td><td>' + band_id_albums[i] + '</td><td>' + name_albums[i] + '</td><td>' + duration[i] + '</td><td>' + copies_sold[i] + '</td></tr>';
      }
      tabla4.innerHTML = contenido4;
    })
    .then(function () {
      // Después de obtener los datos y actualizar las tablas, generas las gráficas
      generarGrafica1();
      generarGrafica2();
      // Genera las demás gráficas que necesites
    });
}

// function generarGrafica1() {
//   // Código para generar la gráfica 1
//   // ...

//   // Ejemplo de código con Plotly
//   var data = [
//     {
//       x: names,
//       y: growth_times,
//       type: 'bar',
//       marker: {
//         color: 'red'
//       }
//     }
//   ];
//   var layout = {
//     title: 'Cantidad de copias vendidas por cada álbum',
//     xaxis: {
//       title: 'Álbumes'
//     },
//     yaxis: {
//       title: 'Copias Vendidas'
//     }
//   };
//   Plotly.newPlot('myDiv1', data, layout);
// }

 {
  // Datos de ejemplo (reemplaza con tus datos reales)
  var albumNames = ['Album A', 'Album B', 'Album C'];
  var copiesSold = [1000, 1500, 800];

  var data = [
    {
      x: albumNames,
      y: copiesSold,
      type: 'bar',
      marker: {
        color: 'blue'
      }
    }
  ];

  var layout = {
    title: 'Cantidad de copias vendidas por cada álbum',
    xaxis: {
      title: 'Álbumes'
    },
    yaxis: {
      title: 'Copias Vendidas'
    }
  };

  Plotly.newPlot('myDiv1', data, layout);
}

 {
  // Datos de ejemplo (reemplaza con tus datos reales)
  var genreNames = ['Rock', 'Pop', 'Jazz'];
  var bandCount = [10, 8, 5];

  var data = [
    {
      labels: genreNames,
      values: bandCount,
      type: 'pie'
    }
  ];

  var layout = {
    title: 'Bandas por Género'
  };

  Plotly.newPlot('myDiv2', data, layout);
}

    // Datos de ejemplo (reemplaza con tus datos reales)
    var countries = ['USA', 'UK', 'Japan', 'Germany'];
    var bandsPerCountry = [20, 15, 12, 10];

    var trace3 = {
      x: countries,
      y: bandsPerCountry,
      type: 'bar',
      marker: {
        color: 'green'
      }
    };

    var data3 = [trace3];

    var layout3 = {
      title: 'Bandas por Países',
      font: {
        family: 'Raleway, sans-serif'
      },
      xaxis: {
        title: 'Países'
      },
      yaxis: {
        title: 'Número de Bandas'
      }
    };

    Plotly.newPlot('myDiv3', data3, layout3);

     // Datos de ejemplo (reemplaza con tus datos reales)
     var genres = ['Rock', 'Pop', 'Jazz', 'Hip-Hop'];
     var genreCounts = [25, 18, 12, 8];
 
     var trace4 = {
       labels: genres,
       values: genreCounts,
       type: 'pie'
     };
 
     var layoutPie4 = {
       height: 500,
       width: 500
     };
 
     Plotly.newPlot('myDiv4', [trace4], layoutPie4);
     
 // Supongamos que tienes los datos en los siguientes arreglos
 var lugares = ['Lugar A', 'Lugar B', 'Lugar C', 'Lugar D', 'Lugar E'];
 var conciertos = [12, 8, 15, 10, 6];

 var trace = {
   x: lugares,
   y: conciertos,
   type: 'bar',
   marker: {
     color: 'orange'
   }
 };

 var data = [trace];
 var layout = {
   title: 'Conciertos por cada lugar',
   xaxis: {
     title: 'Lugar'
   },
   yaxis: {
     title: 'Cantidad de Conciertos'
   },
   showlegend: false
 };

 Plotly.newPlot('myDiv5', data, layout);

        // Suponiendo que tienes los datos en los siguientes arreglos
    var decadas = ['Década de los 80\'s', 'Década de los 90\'s', 'Década de los 70\'s', 'Década de los 00\'s', 'Década de los 10\'s'];
    var cantidad_albumes = [20, 35, 15, 28, 42];

    var trace = {
      x: decadas,
      y: cantidad_albumes,
      type: 'bar',
      marker: {
        color: 'green'
      }
    };

 // Supongamos que tienes los datos en el siguiente arreglo
 var albums_por_decada = [15, 25, 30, 20, 10];

 var decadas = ['80\'s', '90\'s', '70\'s', '00\'s', '10\'s'];

 var trace = {
   x: decadas,
   y: albums_por_decada,
   type: 'bar',
   marker: {
     color: 'purple'
   }
 };

 var data = [trace];

 var layout = {
   title: 'Álbumes por décadas',
   xaxis: {
     title: 'Décadas'
   },
   yaxis: {
     title: 'Cantidad de álbumes'
   }
 };

 Plotly.newPlot('myDiv6', data, layout);

  