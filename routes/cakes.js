const express = require('express');
const router = express.Router();
const cakeControllers = require('../functions/cakeControllers');

router.get('/', cakeControllers.getAllCakes);

router.get('/:id', cakeControllers.getOneCake);

router.post('/', cakeControllers.postCakes);

router.put('/:id', cakeControllers.putCakes);

router.delete('/:id', cakeControllers.deleteCakes);


module.exports = router;