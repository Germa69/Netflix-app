const express = require('express');
const router = express.Router();
const authToken = require('../verifyToken');

const movieController = require('../app/controllers/MovieController');

router.get('/', authToken, movieController.all);
router.get('/random', authToken, movieController.random)
router.get('/find/:id', authToken, movieController.find)
router.post('/', authToken, movieController.create)
router.put('/:id', authToken, movieController.update)
router.delete('/:id', authToken, movieController.delete)

module.exports = router;