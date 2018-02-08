const express = require('express');
const app = express();

app.use(express.static('server/public'));

const bodyParser = require('body-parser');
app.use( bodyParser.urlencoded( { extended: true } ));

const movieRouter = require('./routers/movie-router');
app.use('/movies', movieRouter);

const port = 5000;
app.listen(port, function(){
  console.log(`Listening on port ${port}`);
});