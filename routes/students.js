const express = require('express');
const router = express.Router();
const studentControllers = require('../functions/studentControllers');

router.get('/', studentControllers.getAllStudents);

router.get('/:id', studentControllers.getOneStudent);

router.post('/', studentControllers.postStudents);

router.put('/:id', studentControllers.putStudents);

router.delete('/:id', studentControllers.deleteStudents);


module.exports = router;