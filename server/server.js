const express = require('express');
const app = express();

app.use(express.static('server/public'));

const movieModule = require('./modules/movie-module');
app.get('/movies', function(request, response) {
  response.send(movieModule.moviesArray);
});


const port = 5000;
app.listen(port, function(){
  console.log(`Listening on port ${port}`);
});