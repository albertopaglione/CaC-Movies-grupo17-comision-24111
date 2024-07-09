
//api buscador peliculas

function llamarAPI() {
    fetch('/CaC-Movies/peliculas')
            .then(response => response.json())
            .then(peliculas => dibujarDatos(peliculas));
  }
  
  function Pelicula(pelicula){
    return`
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div class="card h-100" >
          <img src="img/${pelicula.imagen}" class="card-img-top" alt="${pelicula.titulo}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${pelicula.titulo}</h5>
            <p class="card-text flex-grow-1">${pelicula.sinopsis}</p>
            <p class="card-text mt-auto"><small class="text-muted">Lenguaje: ${pelicula.lenguaje}</small></p>
          </div>
        </div>
      </div>
    `;
  }
  
  function dibujarDatos(peliculas){
    const filas = peliculas.map(obj => Pelicula(obj));
    document.querySelector('#peliculas').innerHTML = filas.join('');
  }
  
  llamarAPI();
  //------------------------------------------------------------------------------------------------------------
  /* function buscarPelicula(busqueda){
  return fetch('moviesSimple_24111/peliculas')
  .then (response => response.json())
  .then (peliculas =>{
    
  })
  } */