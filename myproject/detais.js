const urlParams = new URLSearchParams(location.search);
      const movieId = urlParams.get('id');
      //fetch details
      const api_key = '631ac11e809a59a8e6d8de7ae9410f9b';
      const detailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=en-US`;
      
      fetch(detailsUrl)
      .then((response) => {
            
          return response.json();
        })
        .then((movieDetails) => {
          const detailsContainer = document.getElementById('movie-details');
          detailsContainer.innerHTML = `<div class="details-container">
          <img src="https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}" alt="Poster">
          <div id="movie-details">
            <h2>${movieDetails.original_title}</h2>
            <p>${movieDetails.release_date}</p>
            <p>${movieDetails.vote_average}</p>
            <p><h2>Synopsis:</h2>${movieDetails.overview}</p>
            </div>
            </div>`;
        })
        .catch((error) => {
          console.error(error);
        });