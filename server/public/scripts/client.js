$(document).ready(onReady);

function onReady(){
  console.log('Hello from jq');

  $.ajax({
    type: 'GET',
    url: '/movies'
  }).done(function(response){
    // Request was successful
    console.log('Request was successful');
    displayMovies(response);
  }).fail(function(response){
    // If stuff goes wrong on the server...
    console.log(response);
  });


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
}

