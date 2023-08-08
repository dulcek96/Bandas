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
  