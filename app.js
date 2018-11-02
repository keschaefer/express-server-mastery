const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3000;
let cakesRoutes = require('./routes/cakes');
let studentsRoutes = require('./routes/students');

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  process.env.NODE_ENV !== 'production' ?
  res.json({
    "cakes": `http://localhost:${port}/cakes`,
    "students": `http://localhost:${port}/students`
  }) :
  res.json({
  "cakes": `https://frozen-lowlands-75112.herokuapp.com/cakes`,
  "students": `https://frozen-lowlands-75112.herokuapp.com/students`
  }) 
})
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

app.listen(port, () => process.env.NODE_ENV !== 'production' ? console.log(`Your port is on http://localhost:${port}`) : console.log(`Your port is on https://frozen-lowlands-75112.herokuapp.com/`));