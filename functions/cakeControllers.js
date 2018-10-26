let cakes = require('../data/cakes.json');

function getAllCakes(req, res, next) {
  res.json({ cakes: cakes });
};

function getOneCake(req, res, next) {
  const id = req.params.id
  let theCake = cakes.filter(cake => cake.id == id)[0]
  return !Number(id) && id > cakes.length ? res.json({ error: { status: 400, message: "Please enter a valid ID number" } }) : res.json({ cake: theCake })
};

function postCakes(req, res, next) {
  const { id, name, imageUrl, description } = req.body
  if (!name || !description || !imageUrl) {
    return res.json({ error: { status: 400, message: "Please make sure you have all fields filled out" } })
  }
  const newCake = { id: cakes.length + 1, name, imageUrl, description }
  cakes.push(newCake)
  return res.status(201).json({ cake: newCake })
};

function putCakes(req, res, next) {
  const id = req.params.id
  let { name, imageUrl, description } = req.body
  if (!Number(id)) {
    return res.json({ error: { status: 400, message: "Please enter a valid ID number" } })
  } else if (!name || !description || !imageUrl) {
    return res.json({ error: { status: 400, message: "Please make sure you have all fields filled out" } })
  } else {
    let updated = req.body
    cakes[id - 1] = { id, name, imageUrl, description }
    let updatedCake = cakes.map(cake => {
      if (cake.id == id) {
        return { id, name, imageUrl, description }
      } else {
        return cake
      }
    })
    return res.json({ cakes: updated })
  }
};

function deleteCakes(req, res, next) {
  const id = req.params.id
  const deletedCake = cakes.filter(cake => cake.id == id)[0]
  if (!Number(id) || id > cakes.length) {
    return res.json({ error: { status: 400, message: "Please enter a valid ID number" } })
  } else {
    const index = cakes.indexOf(deletedCake)
    cakes.splice(index, 1)
  }
  return res.status(200).json({ cake: deletedCake })
};

module.exports = {
  getAllCakes,
  getOneCake,
  postCakes,
  putCakes,
  deleteCakes
}