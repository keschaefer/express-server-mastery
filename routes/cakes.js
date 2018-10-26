const express = require('express');
const router = express.Router();
let cakes = require('../data/cakes.json');

router.get('/', (req, res, next) => {
  res.json({ cakes : cakes })
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id
  let theCake = cakes.filter(cake => cake.id == id)
  !Number(id) ? res.json({error: {status: 400, message: "Please enter a valid ID number"}}) : res.json({cake: theCake})
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
    let updatedCake = cakes.map(cake => {
      if(cake.id == id){
        return {id, name, imageUrl, description}
      } else {
        return cake
      }
    })
    res.json({cakes : updatedCake})
  }
});


module.exports = router;