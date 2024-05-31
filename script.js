const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGNlY2RhZDhmMmFlZjdiNjFjN2FjN2JkODk1YzA5NyIsInN1YiI6IjY2NDhhYzc2OGNkOGRlNGRiYTFkNGNkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VKTFT_4Z_QqSLFgDHgy5oE-JDgkbP_6ZXMdQI-kVnFM';

const API_URL = 'https://api.themoviedb.org/3';

let currentPage = 1;
function llamarAPI(page) {
  fetch(`${API_URL}/movie/popular?page=${page}`,{
    headers: {
      Authorization: `Bearer ${API_KEY}`,

    },
  })
  .then(response => response.json())
  .then(data => dibujarDatos(data));
}

function dibujarDatos(json){
  const filas = json.results.map(obj => Pelicula (obj));
  document.querySelector('.peliculasTendencia .peliculas').innerHTML = filas.join('');
}

function Pelicula(obj){
  return `
    <a href="#">
      <div class="pelicula">
        <img class="imgTendencia" src="https://image.tmdb.org/t/p/w500/${obj.poster_path}" alt="${obj.title}" loading="lazy">
        <div class="tituloPelicula">
        <h4>${obj.title}</h4>
        </div>
      </div>
    </a>
    `;
}

function cargarPaginaSiguiente(){
  currentPage++;
  llamarAPI(currentPage);

}

function cargarPaginaAnterior(){
  if (currentPage > 1){
    currentPage--;
    llamarAPI(currentPage);
  }
}

document.querySelector('.anterior').addEventListener('click', cargarPaginaAnterior);
document.querySelector('.siguiente').addEventListener('click', cargarPaginaSiguiente);

llamarAPI(currentPage);