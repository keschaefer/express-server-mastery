const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3000;
let cakesRoutes = require('./routes/cakes');
let studentsRoutes = require('./routes/students');

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => res.json({
  "cakes": `https://protected-headland-83497.herokuapp.com/cakes`,
  "usage": `GET routes: Use the "cakes" or "students" endpoints to get cakes or students. 
                        Use "cakes/[number]" to get a specific cake, or the same with students
            POST routes: Use "/cakes" or "/students" endpoints to post.
            PUT/DELETE routes: Use "/cakes/[id number]" or "/students/[id number] to put or delete."`
}))
app.use('/cakes', cakesRoutes);
app.use('/students', studentsRoutes);

app.use(notFound);
app.use(errorHandler);

function notFound(err, req, res, next) {
  res.status(404).send({error: 'Not found!', status: 404, url: req.originalUrl})
};

function errorHandler(err, req, res, next) {
  console.error('NOPE, LOL', err)
  const stack =  process.env.NODE_ENV !== 'production' ? err.stack : undefined
  res.status(500).send({error: err.message, stack, url: req.originalUrl})
};

app.listen(port, () => console.log(`Your port is on ${port}`));