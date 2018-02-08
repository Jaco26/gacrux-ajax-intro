const express = require('express');
const router = express.Router();

const movieModule = require('../modules/movie-module');
router.get('/', function(request, response) {
  let movies = movieModule.getAllMovies();
  console.log('movies', movies);
  response.send(movies);
});

router.post('/add', function(request, response){
  let movie = request.body.movie;
  console.log(movie);
  movieModule.addMovie(movie);
  response.sendStatus(200);
});

module.exports = router;