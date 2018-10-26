const express = require('express');
const router = express.Router();
let students = require('../data/students.json');

router.get('/', (req, res, next) => {
  res.json({ students : students })
});






module.exports = router;