const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGNlY2RhZDhmMmFlZjdiNjFjN2FjN2JkODk1YzA5NyIsIm5iZiI6MTcyMDYxMTAyOC4xMjg0NDQsInN1YiI6IjY2NDhhYzc2OGNkOGRlNGRiYTFkNGNkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.caP7bQeHef7IUyuw3_KDhqZ2Ry9dUdWnIZw0ueAszgw'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));