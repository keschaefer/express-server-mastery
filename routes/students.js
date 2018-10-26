const express = require('express');
const router = express.Router();
let students = require('../data/students.json');

router.get('/', (req, res, next) => {
  res.json({ students : students })
});

router.get('/:id',(req, res, next) => {
  const id = req.params.id
  let theStudent = students.filter(student => student.id == id)
  !Number(id) ? res.json({error: {status: 400, message: "Please enter a valid ID number"}}) : res.json({student: theStudent})
})

router.post('/', (req, res, next) =>{
  const {id, name, cohort} = req.body
  if(!name || ! cohort) {
    res.json({error: {status: 400, message: "Please make sure you have a name and cohort"}})
  }
  const newStudent = {id: students.length + 1, name, cohort}
  students.push(newStudent)
  res.status(201).json({student: newStudent})
})

router.put('/:id', (req, res, next) => {
  const id = req.params.id
  let {name, cohort} = req.body
  if(!Number(id)){
    res.json({error: {status: 400, message: "Please enter a valid ID number"}})
  } else if (!name || ! cohort) {
    res.json({error: {status: 400, message: "Please make sure you have all fields filled out"}})
  } else {
    let updatedStudents = students.map(student => {
      if(student.id == id){
        return {id, name, cohort}
      } else {
        return student
      }
    })
    res.json({cakes : updatedStudents})
  }
});

module.exports = router;