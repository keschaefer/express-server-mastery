const express = require('express');
const app = express();
const bodyParser = ('body-parser');
const cors = ('cors');
const port = process.env.PORT || 3000;
let cakesRoutes = ('./routes/cakes.js');
let studentsRoutes = ('./routes/students.js');

app.use(bodyParser.json());
app.use(cors());

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