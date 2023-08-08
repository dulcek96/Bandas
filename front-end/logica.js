function mostrarInformacion() {
  var opcionSeleccionada = document.getElementById("opcion").value;
  document.getElementById("bandasDiv").style.display = "none";
  document.getElementById("conciertosDiv").style.display = "none";
  document.getElementById("albumsDiv").style.display = "none";
  document.getElementById("generosDiv").style.display = "none";
  
  
  if (opcionSeleccionada === "opcion1") {
  document.getElementById("bandasDiv").style.display = "block";
  endPoint='http://127.0.0.1:8000/api/bands';
  //BANDAS
  function borrar(id) {
  fetch('http://127.0.0.1:8000/api/bands/' + id, {
  method: "DELETE"
  })
  .then(res => res.json())
  .then(json => {
  console.log(json);
  })
  .catch(error => console.error("Error deleting genre:", error));
  }
  
  
  fetch(endPoint)
  .then(respuesta => respuesta.json())
  .then(datos => {
  var tabla = document.getElementById('tabla');
  var contenido = '<thead><tr><th>Nombre de la Banda</th></tr></thead><tbody>';
  datos.forEach(banda => {
  contenido += `
  <tr>
  <td>${banda.name}</td>
  <td>
  <button class="boton">Editar</button>
  <button class="boton" onclick='borrar("${banda.id}")'>Eliminar</button>
  </td>
  </tr>`;
  });
  contenido += '</tbody>';
  tabla.innerHTML = contenido;
  })
  .catch(error => console.error("Error fetching data:", error));
  
  
  function post() {
  document.getElementById("myform").addEventListener("submit", function (event) {
  event.preventDefault();
  var datos = {
  name: document.getElementById("nombre").value,
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
  
  
  function obtenerDatos() {
  var endPoint = document.getElementById("endpoint").value;
  var tabla = document.getElementById("tbody");
  fetch(endPoint)
  .then(function (respuesta) {
  return respuesta.json();
  })
  
  
  .then(function (datos) {
  var contenido="";
  for (let i = 0; i< datos.length; i++) {
  contenido = contenido + "<tr><td>" + datos[i].name + "</td><td><button>Editar</button>" + "<button onclick='borrar("+ datos[i].id+")'>Eliminar</button></td></tr>";
  }
  tabla.innerHTML=contenido;
  })
  }
  
  
  }
  
  
  else if (opcionSeleccionada === "opcion2") {
  //CONCERTS
  document.getElementById("conciertosDiv").style.display = "block";
  endPoint='http://127.0.0.1:8000/api/concerts';
  fetch(endPoint)
  .then(function (respuesta2) {
  return respuesta2.json();
  })
  .then(function (datos2) {
  var tabla = document.getElementById('tabla2');
  var contenido = '<thead><tr><th>Conciertos</th><th>Fecha</th><th>Tiempo</th><th>Lugar</th></tr></thead><tbody>';
  datos2.forEach(function (concierto) {
  contenido += '<tr><td>' + concierto.name + '</td><td>' + concierto.date + '</td><td>' + concierto.time + '</td><td>' + concierto.place + "</td><td><button class=boton >Editar</button>" + "<button class=boton onclick='borrar("+ concierto.id+")'>Eliminar</button></td></tr>"+"</td></tr>";
  });
  contenido += '</tbody>';
  tabla.innerHTML = contenido;
  })
  
  
  function post() {
  document.getElementById("myform").addEventListener("submit", function (event) {
  event.preventDefault();
  var datos = {
  name: document.getElementById("nombre").value,
  date: document.getElementById("fecha").value,
  time: document.getElementById("tiempo").value,
  place: document.getElementById("lugar").value,
  }
  
  
  fetch('http://127.0.0.1:8000/api/concerts', {
  method: "POST",
  headers: {'Content-Type': 'application/json'
  },
  body: JSON.stringify(datos)
  })
  .then(res => res.json())
  .then(json => console.log(json))
  })
  }
  function borrar(id) {
  fetch('http://127.0.0.1:8000/api/concerts'+id,{
  method:"DELETE"
  })
  .then(res=>res.json())
  .then(json=>console.log(json))
  
  
  }
  function obtenerDatos() {
  var endPoint = document.getElementById("endpoint").value;
  var tabla = document.getElementById("tbody");
  fetch(endPoint)
  .then(function (respuesta) {
  return respuesta.json();
  })
  
  
  .then(function (datos) {
  var contenido="";
  for (let i = 0; i< datos.length; i++) {
  contenido = contenido + "<tr><td>" + datos[i].name + "</td><td>" + datos[i].date +"</td><td>" + datos[i].time + "</td><td>" + + datos[i].place + "</td><td><button>Editar</button>" + "<button onclick='borrar("+datos[i].id+")'>Eliminar</button></td></tr>";
  }
  tabla.innerHTML=contenido;
  })
  }
  }
  else if (opcionSeleccionada === "opcion3") {
  //ALBUMS
  endPoint='http://127.0.0.1:8000/api/albums';
  fetch(endPoint)
  .then(function (respuesta3) {
  return respuesta3.json();
  })
  .then(function (datos3) {
  var tabla = document.getElementById('tabla3');
  var contenido = '<thead><tr><th>Álbum</th><th>Fecha</th><th>Lugar</th><th>Duración</th><th>Copias Vendidas</th></tr></thead><tbody>';
  datos3.forEach(function (album) {
  contenido += '<tr><td>' + album.name + '</td><td>' + album.release_date + '</td><td>' + album.place + '</td><td>' + album.duration + '</td><td>' + album.copies_sold + "</td><td><button class=boton >Editar</button>" + "<button class=boton onclick='borrar("+ album.id+")'>Eliminar</button></td></tr>"+"</td></tr>";
  });
  contenido += '</tbody>';
  tabla.innerHTML = contenido;
  })
  function post() {
  document.getElementById("myform").addEventListener("submit", function (event) {
  event.preventDefault();
  var datos = {
  name: document.getElementById("nombre").value,
  release_date: document.getElementById("fecha").value,
  place: document.getElementById("lugar").value,
  duration: document.getElementById("duracion").value,
  copies_sold: document.getElementById("copias").value,
  }
  
  
  fetch('http://127.0.0.1:8000/api/albums', {
  method: "POST",
  headers: {'Content-Type': 'application/json'
  },
  body: JSON.stringify(datos)
  })
  .then(res => res.json())
  .then(json => console.log(json))
  })
  }
  function borrar(id) {
  fetch('http://127.0.0.1:8000/api/albums'+id,{
  method:"DELETE"
  })
  .then(res=>res.json())
  .then(json=>console.log(json))
  
  
  }
  function obtenerDatos() {
  var endPoint = document.getElementById("endpoint").value;
  var tabla = document.getElementById("tbody");
  fetch(endPoint)
  .then(function (respuesta) {
  return respuesta.json();
  })
  
  
  .then(function (datos) {
  var contenido="";
  for (let i = 0; i< datos.length; i++) {
  contenido = contenido + "<tr><td>" + datos[i].name + "</td><td>" + datos[i].release_date +"</td><td>" + datos[i].place + "</td><td>" + datos[i].duration + "</td><td>" + datos[i].place + "</td><td>" +"</td><td><button>Editar</button>" + "<button onclick='borrar("+datos[i].id+")'>Eliminar</button></td></tr>";
  }
  tabla.innerHTML=contenido;
  })
  }
  document.getElementById("albumsDiv").style.display = "block";
  }
  else if (opcionSeleccionada === "opcion4") {
  //GENEROS
  endPoint="http://127.0.0.1:8000/api/genres";
  fetch(endPoint)
  .then(function (respuesta4) {
  return respuesta4.json();
  })
  .then(function (datos4) {
  var tabla = document.getElementById('tabla4');
  var contenido = '<thead><tr><th>Género</th></tr></thead><tbody>';
  datos4.forEach(function (genero) {
  contenido += '<tr><td>' + genero.name + "</td><td><button class=boton >Editar</button>" + "<button class=boton onclick='borrar("+ genero.id+")'>Eliminar</button></td></tr>"+"</td></tr>";
  });
  contenido += '</tbody>';
  tabla.innerHTML = contenido;
  })
  
  
  function post() {
  document.getElementById("myform").addEventListener("submit", function (event) {
  event.preventDefault();
  var datos = {
  name: document.getElementById("nombre").value,
  }
  
  
  fetch('http://127.0.0.1:8000/api/genres', {
  method: "POST",
  headers: {'Content-Type': 'application/json'
  },
  body: JSON.stringify(datos)
  })
  .then(res => res.json())
  .then(json => console.log(json))
  })
  }
  function borrar(id) {
  fetch('http://127.0.0.1:8000/api/genres'+id,{
  method:"DELETE"
  })
  .then(res=>res.json())
  .then(json=>console.log(json))
  
  
  }
  function obtenerDatos() {
  var endPoint = document.getElementById("endpoint").value;
  var tabla = document.getElementById("tbody");
  fetch(endPoint)
  .then(function (respuesta) {
  return respuesta.json();
  })
  
  
  .then(function (datos) {
  var contenido="";
  for (let i = 0; i< datos.length; i++) {
  contenido = contenido + "<tr><td>" + datos[i].name + "</td><td><button>Editar</button>" + "<button onclick='borrar("+datos[i].id+")'>Eliminar</button></td></tr>";
  }
  tabla.innerHTML=contenido;
  })
  }
  document.getElementById("generosDiv").style.display = "block";
  
  
  }} 
  // switch (opcionSeleccionada) {
  // case "opcion1":
  // var endpoint = "http://127.0.0.1:8000/api/bands";
  // fetch(endpoint)
  // .then(function (respuesta) {
  // return respuesta.json();
  // })
  // .then(function (datos) {
  // var tabla = document.getElementById('tablaResultados');
  // var contenido = '<thead><tr><th>Nombre de la Banda</th></tr></thead><tbody>';
  // datos.forEach(function (banda) {
  // contenido += '<tr><td>' + banda.name + '</td><td>'+ <button >Editar</button>" + "<button onclick='borrar("+datos[i].id+")'>Eliminar</button>'</td></tr>';
  // });
  // contenido += '</tbody>';
  // tabla.innerHTML = contenido;
  // })
  // var formContent = `
  // <h2>Crear Nueva Banda</h2>
  // <form id="formularioCrear" class="hidden-form">
  // <div class="form-group">
  // <label for="bandName">Nombre de la Banda</label>
  // <input type="text" id="bandName" name="name" class="form-control" required>
  // </div>
  // </form>
  // <button type="button" class="boton" onclick="crearBanda()">Crear Banda</button>
  // `;
  // formularioCrear.innerHTML = formContent;
  // //crear
  // //delete
  // function borrar(id) {
  // fetch(endpoint+id,{
  // method:"DELETE"
  // })
  // .then(res=>res.json())
  // .then(json=>console.log(json))
  // }
  // break;
  
  
  // case "opcion2":
  // var endpoint = "http://127.0.0.1:8000/api/concerts";
  // fetch(endpoint)
  // .then(function (respuesta) {
  // return respuesta.json();
  // })
  // .then(function (datos) {
  // var tabla = document.getElementById('tablaResultados');
  // var contenido = '<thead><tr><th>Conciertos</th><th>Fecha</th><th>Tiempo</th><th>Lugar</th></tr></thead><tbody>';
  // datos.forEach(function (concierto) {
  // contenido += '<tr><td>' + concierto.name + '</td><td>' + concierto.date + '</td><td>' + concierto.time + '</td><td>' + concierto.place + '</td></tr>';
  // });
  // contenido += '</tbody>';
  // tabla.innerHTML = contenido;
  // })
  // .then(function () {
  // var contenidof = `
  // <h3>Crear Concierto</h3>
  // <form id="crearConciertoForm">
  // <div class="form-group">
  // <label for="nombreConcierto">Nombre del Concierto</label>
  // <input type="text" id="nombreConcierto" name="name" class="form-control" required>
  // </div>
  // <div class="form-group">
  // <label for="fechaConcierto">Fecha</label>
  // <input type="date" id="fechaConcierto" name="date" class="form-control" required>
  // </div>
  // <div class="form-group">
  // <label for="horaConcierto">Hora</label>
  // <input type="time" id="horaConcierto" name="time" class="form-control" required>
  // </div>
  // <div class="form-group">
  // <label for="lugarConcierto">Lugar</label>
  // <input type="text" id="lugarConcierto" name="place" class="form-control" required>
  // </div>
  // <button type="button" class="boton" onclick="crearConcierto()">Crear Concierto</button>
  // </form>
  // `;
  // formularioCrear.innerHTML = contenidof;
  // });
  // function crear() {
  // var endpoint = "http://127.0.0.1:8000/api/concerts";
  // var formData = new FormData(document.getElementById('crearConciertoForm'));
  // fetch(endpoint, {
  // method: "POST",
  // body: formData
  // })
  // .then(function (response) {
  // return response.json();
  // })
  // .then(function (data) {
  // console.log(data);
  // });
  // }
  // break;
  
  
  // case "opcion3":
  // var endpoint = "http://127.0.0.1:8000/api/albums";
  // fetch(endpoint)
  // .then(function (respuesta) {
  // return respuesta.json();
  // })
  // .then(function (datos) {
  // var tabla = document.getElementById('tablaResultados');
  // var contenido = '<thead><tr><th>Álbum</th><th>Fecha</th><th>Lugar</th><th>Duración</th><th>Copias Vendidas</th></tr></thead><tbody>';
  // datos.forEach(function (album) {
  // contenido += '<tr><td>' + album.name + '</td><td>' + album.release_date + '</td><td>' + album.place + '</td><td>' + album.duration + '</td><td>' + album.copies_sold + '</td></tr>';
  // });
  // contenido += '</tbody>';
  // tabla.innerHTML = contenido;
  // })
  // .then(function () {
  // var contenidoa = `
  // <h3>Crear Álbum</h3>
  // <form id="crearAlbumForm">
  // <div class="form-group">
  // <label for="nombreAlbum">Nombre del Álbum</label>
  // <input type="text" id="nombreAlbum" name="name" class="form-control" required>
  // </div>
  // <div class="form-group">
  // <label for="fechaLanzamiento">Fecha de Lanzamiento</label>
  // <input type="date" id="fechaLanzamiento" name="release_date" class="form-control" required>
  // </div>
  // <div class="form-group">
  // <label for="lugarLanzamiento">Lugar de Lanzamiento</label>
  // <input type="text" id="lugarLanzamiento" name="place" class="form-control" required>
  // </div>
  // <div class="form-group">
  // <label for="duracionAlbum">Duración</label>
  // <input type="text" id="duracionAlbum" name="duration" class="form-control" required>
  // </div>
  // <div class="form-group">
  // <label for="copiasVendidas">Copias Vendidas</label>
  // <input type="text" id="copiasVendidas" name="copies_sold" class="form-control" required>
  // </div>
  // <button type="button" class="boton" onclick="crearAlbum()">Crear Álbum</button>
  // </form>
  // `;
  // formularioCrear.innerHTML = contenidoa;
  // });
  // function crear() {
  // var endpoint = "http://127.0.0.1:8000/api/albums";
  // var formData = new FormData(document.getElementById('crearAlbumForm'));
  // fetch(endpoint, {
  // method: "POST",
  // body: formData
  // })
  // .then(function (response) {
  // return response.json();
  // })
  // .then(function (data) {
  // console.log(data); // Handle the response data
  // });
  // }
  // break;
  
  
  // case "opcion4":
  // var endpoint = "http://127.0.0.1:8000/api/genres";
  // fetch(endpoint)
  // .then(function (respuesta) {
  // return respuesta.json();
  // })
  // .then(function (datos) {
  // var tabla = document.getElementById('tablaResultados');
  // var contenido = '<thead><tr><th>Género</th></tr></thead><tbody>';
  // datos.forEach(function (genero) {
  // contenido += '<tr><td>' + genero.name + '</td></tr>';
  // });
  // contenido += '</tbody>';
  // tabla.innerHTML = contenido;
  // })
  // .then(function () {
  // var contenidog = `
  // <h3>Crear Género</h3>
  // <form id="crearGeneroForm">
  // <div class="form-group">
  // <label for="nombreGenero">Nombre del Género</label>
  // <input type="text" id="nombreGenero" name="name" class="form-control" required>
  // </div>
  // <button type="button" class="boton" onclick="crearGenero()">Crear Género</button>
  // </form>
  // `;
  // formularioCrear.innerHTML = contenidog;
  // });
  // function crear() {
  // var endpoint = "http://127.0.0.1:8000/api/genres";
  // var formData = new FormData(document.getElementById('crearGeneroForm'));
  // fetch(endpoint, {
  // method: "POST",
  // body: formData
  // })
  // .then(function (response) {
  // return response.json();
  // })
  // .then(function (data) {
  // console.log(data);
  // });
  // }
  // break;
  
  
  // default:
  // break;
  // }
  // return false;
  // }
  
  
  // function crearBanda() {
  // event.preventDefault();
  // var endpoint = "http://127.0.0.1:8000/api/bands";
  // var formData = {
  // name: document.getElementById("bandName").value
  // };
  
  
  // fetch(endpoint, {
  // method: "POST",
  // headers: {
  // 'Content-Type': 'application/json'
  // },
  // body: JSON.stringify(formularioCrear)
  // })
  // .then(response => response.json())
  // .then(data => {
  // console.log(data);
  // })
  // .catch(error => {
  // console.error('Error:', error);
  // });
  // }
  
  
  // document.getElementById("formularioCrear").addEventListener("submit", post);
  
  
  
  
  
  
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
  
  
  function countBandsByGenre(genres, bands) {
  const bandsByGenre = genres.map(genre => ({
  genre: genre.name,
  count: bands.filter(band => band.genre_id === genre.id).length
  }));
  return bandsByGenre;
  }
  
  
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
  
  
  Plotly.newPlot('myDiv', data, layout);
  }
  
  
  function consumir() {
  fetchGenresAndBands()
  .then(([genres, bands]) => {
  generarGraficaBandasPorGenero(genres, bands);
  })
  .catch(error => {
  console.error("Error al obtener los datos:", error);
  });
  }
  