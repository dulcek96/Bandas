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
      generarGrafica1();
      generarGrafica2();
      generarGrafica3();
      generarGrafica4();
      generarGrafica5();
      generarGrafica6();
    });
}
    //Graficas
 {

  var albumNames = ['The Dark Side of the Moon', 'The wall', 'Fear Of The Dark', 'The Number Of The Beast', 'The Rasors Edge', 'Highway to Hell', 'Master of Puppets', 'Metallica', 'Trash', 'Welcome to My Nightmare', 'Lick it Up', 'Destroyer','The Final Countdown','Wings of Tomorrow', 
'Ace of Spades', 'Overkill', 'Pleasure to Kill', 'Endless Pain', 'Kraken I', 'Kraken II' ];
  var copiesSold = [45000000, 30000000, 7000000, 14000000, 5000000, 7000000, 10000000, 30000000, 5000000, 5000000, 3000000, 4000000, 3000000, 100000, 2000000, 1000000,1500000, 2000000, 1000000, 1000000];

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
  var genreNames = ['Progressive Rock', 'Heavy Metal', 'Thrash Metal','Hard Rock'];
  var bandCount = [1, 2, 3, 4];

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

    var countries = ['UK','UK','USA','USA','USA','Sidney','Sweden', 'UK', 'Germany', 'Colombia'];
    var bandsPerCountry = [3, 3, 1, 1, 1, 1];

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

     var genres = ['Progressive Rock', 'Heavy Metal', 'Thrash Metal', 'Hard Rock'];
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
     
 var lugares = ['London', 'Toronto', 'Berlin'];
 var conciertos = [4, 1, 1];

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

    var decadas = ['Década de los 70\'s', 'Década de los 80\'s', 'Década de los 90\'s'];
    var cantidad_albumes = [6, 11, 3];

    var trace = {
      x: decadas,
      y: cantidad_albumes,
      type: 'bar',
      marker: {
        color: 'green'
      }
    };

 var albums_por_decada = [6, 11, 3];

 var decadas = [ '70\'s','80\'s', '90\'s'];

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

 function generarGraficaBandasPorGenero(genres, bands) {
  const bandsByGenre = countBandsByGenre(genres, bands);
  const x = bandsByGenre.map(item => item.genre);
  const y = bandsByGenre.map(item => item.count);

  var data = [{
    x: x,
    y: y,
    type: 'bar'
  }];

  var layout = {
    title: 'Bandas por Género',
    xaxis: { title: 'Género' },
    yaxis: { title: 'Cantidad de Bandas' }
  };

  Plotly.newPlot('myDiv7', data, layout);
}
