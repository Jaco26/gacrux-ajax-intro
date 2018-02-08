$(document).ready(onReady);

function onReady(){
  console.log('Hello from jq');

  $('#btn-add').on('click', function(event){
    event.preventDefault();
    addMovie();
  });

  getAllMovies();

  function getAllMovies() {
    $.ajax({
      type: 'GET',
      url: '/movies'
    }).done(function(response) {
      // Request was successful
      console.log('Request was successful');
      displayMovies(response);
    }).fail(function(response) {
      // If stuff goes wrong on the server...
      console.log(response);
    });
  }

  function displayMovies(movies) {
    $('#output-movies').empty();
    let $ul = $('<ul></ul>');
    for (let movie of movies) {
      $ul.append(`<li>
        ${movie.title}, ${movie.director} - Rating: ${movie.rating}
      </li>`);
    }
    $('#output-movies').append($ul);
  }

  function addMovie(){
    let newMovie = getMovieFromForm();
    console.log('Movie', newMovie);

    $.ajax({
      type: 'POST',
      url: '/movies/add',
      data: { movie: newMovie }
    }).done(function(response){
      console.log('added');
      getAllMovies();
      clearInputForm();
    }).fail(function(error){
      console.log(error);
    });
  }

  function clearInputForm(){
    $('#in-title').val('');
    $('#in-director').val('');
    $('#in-rating').val('');
  }

  function getMovieFromForm(){
    let title = $('#in-title').val();
    let director = $('#in-director').val();
    let rating = $('#in-rating').val();
    let movie = { 
      title: title,
      director: director,
      rating: rating
    }
    return movie;
  }
}

