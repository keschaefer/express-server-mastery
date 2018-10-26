let students = require('../data/students.json');

function getAllStudents(req, res, next) {
  res.json({ students: students })
};

function getOneStudent(req, res, next) {
  const id = req.params.id
  let theStudent = students.filter(student => student.id == id)[0]
  return (!Number(id) || id > students.length) ? res.json({ error: { status: 400, message: "Please enter a valid ID number" } }) : res.json({ student: theStudent })
};

function postStudents(req, res, next) {
  const { id, name, cohort } = req.body
  if (!name || !cohort) {
    return res.json({ error: { status: 400, message: "Please make sure you have a name and cohort" } })
  }
  const newStudent = { id: students.length + 1, name, cohort }
  students.push(newStudent)
  return res.status(201).json({ student: newStudent })
};

function putStudents(req, res, next) {
  const id = req.params.id
  let { name, cohort } = req.body
  if (!Number(id)) {
    return res.json({ error: { status: 400, message: "Please enter a valid ID number" } })
  } else if (!name || !cohort) {
    return res.json({ error: { status: 400, message: "Please make sure you have all fields filled out" } })
  } else {
    let updated = req.body
    students[id - 1] = { id, name, cohort }
    let updatedStudents = students.map(student => {
      if (student.id == id) {
        return { id, name, cohort }
      } else {
        return student
      }
    })
    return res.json({ students: updated })
  }
};

function deleteStudents(req, res, next) {
  const id = req.params.id
  const deletedStudent = students.filter(student => student.id == id)[0]
  if (!Number(id) || id > students.length) {
    return res.json({ error: { status: 400, message: "Please enter a valid ID number" } })
  } else {
    const index = students.indexOf(deletedStudent)
    students.splice(index, 1)
  }
  return res.status(200).json({ student: deletedStudent })
};

module.exports = {
  getAllStudents,
  getOneStudent,
  postStudents,
  putStudents,
  deleteStudents
}