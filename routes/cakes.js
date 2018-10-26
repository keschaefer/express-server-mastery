const express = require('express');
const router = express.Router();
let cakes = require('../data/cakes.json');

router.get('/', (req, res, next) => {
  res.json({ cakes : cakes })
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id
  let theCake = cakes.filter(cake => cake.id == id)[0]
  !Number(id) && id > cakes.length ? res.json({error: {status: 400, message: "Please enter a valid ID number"}}) : res.json({cake: theCake})
  console.log(theCake);
});

router.post('/', (req, res, next) => {
  const {id, name, imageUrl, description} = req.body
  if(!name || !description || !imageUrl) {
    res.json({error: {status: 400, message: "Please make sure you have all fields filled out"}})
  }
  const newCake = {id: cakes.length + 1, name, imageUrl, description}
  cakes.push(newCake)
  res.status(201).json({cake: newCake})
});

router.put('/:id', (req, res, next) => {
  const id = req.params.id
  let {name, imageUrl, description} = req.body
  if(!Number(id)){
    res.json({error: {status: 400, message: "Please enter a valid ID number"}})
  } else if (!name || !description || !imageUrl) {
    res.json({error: {status: 400, message: "Please make sure you have all fields filled out"}})
  } else {
    let updated = req.body
    cakes[id - 1] = {id, name, imageUrl, description}
    let updatedCake = cakes.map(cake => {
      if(cake.id == id){
        return {id, name, imageUrl, description}
      } else {
        return cake
      }
    })
    res.json({cakes : updated})
  }
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id
  const deletedCake = cakes.filter(cake => cake.id == id)[0]
  res.status(200).json({ cake: deletedCake })

  const index = cakes.indexOf(deletedCake)
  cakes.splice(index, 1)
})


module.exports = router;