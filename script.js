/*const boton = document.getElementById('linkNav conectApi');
boton.addEventListener('click', llamarAPI);

function llamarAPI(){
    const json =
        fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}')
    console.log(json);

}*/
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGNlY2RhZDhmMmFlZjdiNjFjN2FjN2JkODk1YzA5NyIsInN1YiI6IjY2NDhhYzc2OGNkOGRlNGRiYTFkNGNkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VKTFT_4Z_QqSLFgDHgy5oE-JDgkbP_6ZXMdQI-kVnFM'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/now_playing', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));