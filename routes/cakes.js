const express = require('express');
const router = express.Router();
let cakes = require('../data/cakes.json');

router.get('/', (req, res, next) => {
  res.json({ cakes : cakes })
});






module.exports = router;